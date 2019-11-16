# 例子01 有一个富文本编辑器使用了json作为内容格式，我们需要把它从JSON转换成HTML格式才能在网页上渲染。

该数据格式大致有以下几种节点：

* document，标记着一个文档的根
* header1, 一级标题
* text，文本节点
* bold，粗体
* italic, 斜体
* underline, 下划线
* strikethrough, 删除线

每个节点下有一个共同的属性nodes，代表它下面的子节点列表。

TypeScript 版本放在 `01/ts/` 目录下
示例数据在 `01/ts/data.ts`
