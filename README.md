# Design Patterns exercises for JavaScript Developers.

## 一、为什么提出设计模式？

### 1.1 设计模式的起源

《建筑之永恒之道》——模式语言

 * 客观存在是复杂的，为了帮助我们认知，我们用抽象的方法给客观存在建立模型，并使用这些模型帮助人们之间的交流。
 * 事务可能存在多种不同视角的模型，因此当我们说到一个名词的时候，我们需要结合上下文、常识和共同文化背景，才可以了解彼此所指的是哪个事物在哪个视角下的模型。
 * 模式之道：它以不自觉的形式隐藏于所有的建筑方式背后——即大道至简。所有的建筑背后有一种普适原则，形式只是表象。


GoF的《设计模式》尝试借用这本书里面的模式语言这个理念，观察并发现出在软件设计里面普遍存在的一些模式，并把它们归纳整理成23个模式的例子，分成“创建型”、“结构型”、“行为型”三类。

同时，他们在书中也提出了设计模式的作用，以及避免误用的原则：

 * 设计模式为设计师们提供一种共通的词汇储备，帮助其沟通、编写文档并探索设计方案。
 * 理解本书中的设计模式能够帮助大家更轻松地掌握现有系统。
 * 人们很容易将模式视为一种解决方案，相比之下，人们很难弄清其更为确切的核心——即定义其能够解决的问题以及在哪些背景下才属于最佳解决方案。


### 1.2 设计模式的描述

书中设计出一系列用来描述设计模式，以及对软件设计模式进行编目整理所需要的属性：

| 用于识别和交流模式  | 用于了解模式的如何运作   | 识别类似场景或关联的其他模式 |
| :------------------- | :------------------------- | :--------------------------- |
| 模式名和分类      | 结构、参与者、协作     | 相关模式                   |
| 意图              | 效果                   |                              |
| 别名              | 实现                   |                              |
| 动机              | 代码示例               |                              |
| 适用性            | 已知应用               | &nbsp;                       |



### 1.3 使用设计模式的三个层次

HFDP(Head First Design Pattern)的作者说，使用设计模式有3个层次：

* Beginner——初级的时候无处不用设计模式，认为用的模式越多，设计就越好
* Intermediate——中级的时候知道何时该用什么设计模式，什么时候不该用
* Zen——到了禅的境界，设计模式被用来简化设计，让设计更优雅

### 1.4 反模式

反面模式（anti-pattern或antipattern）指的是在实践中明显出现但又低效或是有待优化的设计模式，是用来解决问题的带有共同性的不良方法。

它们已经经过研究并分类，以防止日后重蹈覆辙，并能在研发尚未投产的系统时辨认出来。

按《AntiPatterns》作者的说法，可以用至少两个关键因素来把反面模式和不良习惯、错误的实践或糟糕的想法区分开来：

  * 行动、过程和结构中的一些重复出现的乍一看是有益的，但最终得不偿失的模式
  * 在实践中证明且可重复的清晰记录的重构方案


## 二、GoF（Gang of Four，四人帮）23个设计模式

《设计模式：可复用面向对象软件的基础》这本书里面，四位作者整理了23个设计模式，分别归类到3个范例的类别里面。

> We don’t consider this collection of design patterns complete and static; it’s more a recording of our current thoughts on design.
>
> - 《Design Patterns：Elements of Reusable Object-Oriented Software》

他们认为这这并不是软件所有的设计模式，而仅仅是一个对过去设计思想的记录。

* 创建型模式
  * 抽象工厂 (Abstract Factory)
  * 构造器 (Builder Pattern)
  * 工厂方法 (Factory Method pattern)
  * 原型 (Prototype pattern)
  * 单例模式 (Singleton pattern)
* 结构型模式
  * 适配器(Adapter pattern)
  * 桥接(Bridge pattern)
  * 组合(Composite pattern)
  * 装饰(Decorator pattern)
  * 外观(Façade pattern)
  * 享元(Flyweight pattern)
  * 代理(Proxy pattern)
* 行为模式
  * 职责链(Chain-of-responsibility pattern)
  * 命令(Command pattern)
  * 翻译器(Interpreter pattern)
  * 迭代器(Iterator pattern)
  * 中介者(Mediator pattern)
  * 回忆(Memento pattern)
  * 观察者(Observer pattern)
  * 状态机(State pattern)
  * 策略(Strategy pattern)
  * 模板方法(Template method pattern)
  * 参观者(Visitor)


## 三、本教程的设计

在这个教程里，对一个设计模式的讲解有三部分：

 - 设计模式介绍
 - 设计模式的案例
 - 设计模式的练习

大家可以在以下目录里找到对应的内容：

 * tutorials，以“序号-模式名字”为目录，存放每个模式的介绍内容
 * examples，以“序号-模式名字”为目录，存放每个模式的案例
 * exercises，以“序号-模式名字”为目录，存放每个模式的练习题目，以及你们每个人可以在该目录下编写自己的答案版本，以自己的id为命名。

教程内设计模式的列表请参看[《设计模式列表》](pattern_list.md)
