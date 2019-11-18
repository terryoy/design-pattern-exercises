02 构造器（Builder）
==========================

### 意图

将一个复杂对象的构建与它的表示（representation）分离，使得同样的构建过程可以创建不同的表示。

### 动机

考虑要实现一个RTF富文本的文档交换格式，它可以将富文本内容很方便地转换成多种表示
形式，比如说转换成ASCII普通文本或者是可交互的富文本编辑器。这个问题有两个特点：

1. 数据本身是无限的
2. 节点的类型是可以方便扩展的

一个解决办法是可以设计一个TextConverter对象配置这个RTFReader的类。当使用RTFReader
对富文本进行语法分析的时候，每遇到一个RTF标记，就使用TextConverter去做转换这个标记。
TextConverter对象负责进行数据转换，以及用特定格式表示该标记。


### 结构实现

![Builder from StartUML](https://github.com/loredanacirstea/staruml-design-patterns/raw/master/generated/Model/loretek/design_patterns/creational/builder/builder.png)
（[图片来源](https://github.com/loredanacirstea/staruml-design-patterns/raw/master/generated/Model/loretek/design_patterns/creational/builder/builder.png)）

参与者：
- Builder(TextConverter)
  * 为创建一个Product对象定义的各个部件指定**抽象接口**
- ConcreteBuidler(ASCII Converter、TeXConverter、TextWidgetConverter)
  * 实现Builder的接口以构造各部件
  * 定义它所创建的部件表示（representation）
  * 提供一个检索产品的接口（如：GetASCIIText和GetTexstWidget）
- Director(RTFReader)
  * 一个使用Builder接口的对象
- Product
  * 最终产物，被构造出来的复杂对象

下面交互图说明了Director和Builder之间是怎么配合的：

![Builder Sequence from StartUML](https://github.com/loredanacirstea/staruml-design-patterns/raw/master/generated/Model/loretek/design_patterns/creational/builder/builder_seq.png)
（[图片来源](https://github.com/loredanacirstea/staruml-design-patterns/raw/master/generated/Model/loretek/design_patterns/creational/builder/builder_seq.png)）


RTFReader的一个Java实现参考：<https://www.oodesign.com/builder-pattern.html>


##### 与抽象工厂（Abstract factory)的区别

不知道大家有没有留意到，在[抽象工厂(Abstract Factory)](../01-abstract-factory/README.md)
里面，我们也提到了一个UI组件库的不同样式表达；同时，我们在Builder这里也有
buildPartA()、buildPartB()这样相似的方法。那么Builder跟AbstractFactory的区别是什
么呢？

一个明显的差别是：对于工厂模式，最终的生成物Product的过程是在Client这一端；而在
Builder模式当中，生成物Product是在Builder获得的。造成这种差异的原因是：

* Builder模式内部对象的**构造顺序必须是稳定的**。
* Builder模式要构建的产品中，对象的结构是复杂多变的，为了适应这种变化，因此往往是
  用数据而不是代码来表达这个结构。
* Product的整体与部件的关系，是在Builder内部实现的；而Factory模式中，部件之间的
  联系是很难在构建时表达的，因为它们都是在Client端完成组装的。

具体可以参看[例子02](examples/README.md)与抽象工厂模式的区别。

### 适用性

以下情况适用 Builder 模式：

*
