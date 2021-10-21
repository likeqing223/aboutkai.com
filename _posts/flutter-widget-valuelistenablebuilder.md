---
title: "Flutter Widget: ValueListenableBuilder"
date: "2021-04-14"
author: kaichi
tags: flutter
excerpt: ValueListenableBuilder 组件介绍
---

相信大家一定用过 `setState`, 在 `StatefulWidget` 中我们常使用 `setState` 来更新组件状态以此来更新 ui。下面这个计数器的 🌰 大家非常熟悉。

```dart
class _CounterState extends State<Counter> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text(
          'You had tapped $_count.',
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () => setState(() => _count++),
      ),
    );
  }
}
```

今天给大家介绍的 **ValueListenableBuilder**, 可以让我们更新的的组件状态而不需要使用`setState`。**ValueListenableBuilder** 有两个必须必需的参数。_valueListenable_ 是 **ValueNotifier** 实例，_builder_ 是一个回调函数，该回调函数根据所监听的值来构建组件，使用 **ValueListenableBuilder** 实现一个计数器。

你会发现这样一个计数器依旧是正常工作的，既然我们没有使用 `setState` 方法，组件是如何更新的呢？

**ValueListenableBuilder** 会监听 **ValueListenable** 上的任何更改，因此可以在值更改后重建 UI。这也是目前为止唯一可以基于组件当前状态重构 UI 的方法，当点击按钮使 counter 的 value 更新后，更新的也只是 Text 组件，而不需要整个页面重构。

除了上面的两个参数，**ValueListenableBuilder** 还有另外一个参数 _child_。上面的计数器 _builder_ 返回一个 **Text** 组件展示 counter 的值，当 counter 的值改变时需要重构的组件也就是这个 **Text** 组件。但有时 _builder_ 返回了一个非常复杂的组件，但是只有一部分组件依赖 value。这是我们就要用的 _child_ 参数，例如下面这个 🌰。

```dart
ValueListenableBuilder(
  valueListenable: _counter,
  builder: (context, value, child) => Container(
    width: 200,
    height: 200,
    color: value % 2 == 0 ? Colors.blue : Colors.red,
    alignment: Alignment.center,
    child: child,
  ),
  child: Container(
    color: Colors.green,
    width: 100,
    height: 100,
  ),
)
```

当 value 改变时，只有外面的 **Container** 会重构，而内部 **Container** 则不会重构。

> 记得销毁 **ValueNotifier**, 避免内存泄漏。就像这样。

```dart
  @override
  void dispose() {
    _counter.dispose();
    super.dispose();
  }
```
