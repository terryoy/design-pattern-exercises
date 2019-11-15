01 抽象工厂（Abstract Factory）
==========================

### 意图

提供一个创建一系列相关或互相依赖的对象的接口，而无需（在创建时）指定他们具体的类。

### 动机

考虑要实现一个可以有多种风格的 UI 工具包，比如说支持 Material Design 或者 Metro，
它的工具条、按钮窗口等的外观和行为可能都有所不一样。为了保证应用的可移植性，一个
应用不应该为特定的视觉规范而硬编码它的窗体组件，这时候希望对“风格的实例化”的这个
过程进行抽象封装。

### 结构实现

![Abstract Factory from StartUML](https://github.com/loredanacirstea/staruml-design-patterns/raw/master/generated/Model/loretek/design_patterns/creational/abstract_factory/abstract_factory.png)
（[图片来源](https://github.com/loredanacirstea/staruml-design-patterns/blob/master/generated/Model/loretek/design_patterns/creational/abstract_factory/abstract_factory.png)）

如果我们把 UI 组件看成是 Product 的话，那么这个Abstract Factory就是对组件按不同
风格去生成实体组件的一个组件工厂的抽象接口。

当Client需要的是一个用于创建各种构件的工具方法的时候，使用Abstract Factory的某一
个实体类来初始化的时候，只需要指定相应的工厂（Concrete1或Concrete2）。之后创建组
件的方法，以及创建出来的组件都是基于抽象接口的（createProductA，返回的是
AbstractProductA）。因此，对于Client来说它的构造代码不需要对应不同的UI而写两分代码。

### 适用性

以下情况适用 Abstract Factory 模式：

* 一个系统要独立于它的产品的创建、组合和表示时。
* 一个系统要由多个产品系列中的一个来配置时。
* 当你要强调一系列相关的产品对象的设计以便进行联合使用时。
* 当你提供一个产品类库，而只想显示它们的接口而不是实现时。

在上面的例子里，“系统”对应的是一个应用，“产品”是UI组件，但是这个产品有不同的配置
方式，所以我们把“配置”这个东西做成了抽象工厂。当你要什么样的风格的配置时，我们就
有相应的实体工厂来给你制造对应这个配置下的“产品”。
