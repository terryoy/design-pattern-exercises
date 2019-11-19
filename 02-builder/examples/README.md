# 例子01 MazeBuilder




# 例子02 富文本转换器（Factory的例子02）的builder版本

由于Builder和Factory非常相似，这个例子着重体现与[Abstract Factory抽象工厂第二个例子](../../01-abstract-factory/examples/)
的区别，实现一种Builder的方案。

把一个富文本编辑器定义的json内容格式，转换成HTML内容。该数据格式大致有以下几种节点：

* document，标记着一个文档的根
* header1...header5, 多级级标题
* text，文本节点
* bold，粗体
* italic, 斜体
* underline, 下划线
* strikethrough, 删除线

每个节点下有一个共同的属性nodes，代表它下面的子节点列表。

TypeScript 版本放在 `02/ts/` 目录下
示例数据在 `02/ts/data.ts`

可执行测试（在根目录下执行）：
```
$ yarn testts 02-builder/examples/02/ts/
```
