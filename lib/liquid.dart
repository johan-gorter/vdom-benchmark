library vdom_benchmark.liquid;

import 'dart:html' as html;
import 'package:vdom_benchmark/benchmark.dart';
import 'package:vdom_benchmark/generator.dart' as g;
import 'package:vdom/vdom.dart' as v;
import 'package:liquid/liquid.dart';

class NodeComponent extends Component<html.DivElement> {
  g.Node node;

  NodeComponent(Context context, this.node) : super(context);

  VRoot build() {
    final result = [];
    final children = node.children;
    if (children != null) {
      for (var i = 0; i < children.length; i++) {
        final c = children[i];
        if (c.children == null) {
          result.add(new VLeaf(c.key, c));
        } else {
          result.add(new VNode(c.key, c));
        }
      }
    }
    return new VRoot()(result);
  }

  String toString() => 'Node: [$node]';
}

class LeafComponent extends Component<html.SpanElement> {
  g.Node node;

  LeafComponent(Context context, this.node) : super(context);

  void create() {
    element = new html.SpanElement();
  }

  VRoot build() {
    return new VRoot()([new v.Text(0, node.key.toString())]);
  }

  String toString() => 'Leaf: [${node.key}]';
}

class VNode extends VComponentBase {
  g.Node node;

  VNode(Object key, this.node) : super(key);

  void create(Context context) {
    component = new NodeComponent(context, node);
    component.create();
    ref = component.element;
  }

  void update(VNode other, Context context) {
    super.update(other, context);
    component.node = other.node;
    if (other.node.dirty) {
      component.update();
    }
  }
}

class VLeaf extends VComponentBase {
  g.Node node;

  VLeaf(Object key, this.node) : super(key);

  void create(Context context) {
    component = new LeafComponent(context, node);
    component.create();
    ref = component.element;
  }

  void update(VLeaf other, Context context) {
    super.update(other, context);
    component.node = other.node;
    if (other.node.dirty) {
      component.update();
    }
  }
}

class App extends Component {
  List<g.Node> _nodes;

  set node(List<g.Node> newNodes) {
    _nodes = newNodes;
    update();
  }

  App(Context context, this._nodes) : super(context);

  VRoot build() {
    return new VRoot()([new VNode(0, new g.Node(0, true, _nodes))]);
  }
}


class Benchmark extends BenchmarkBase {
  List<g.Node> a;
  List<g.Node> b;
  html.Element _container;

  App _app;

  Benchmark(this.a, this.b, this._container) : super('VComponent');

  void render() {
    _app = new App(null, a);
    _app.create();
    _app.render();
    _container.append(_app.element);
  }

  void update() {
    _app.node = b;
  }

  void setup() {
  }

  void teardown() {
    _app.element.remove();
  }
}