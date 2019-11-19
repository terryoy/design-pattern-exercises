===================

### 练习1: 设计一个HTML到Markdown的转换器

尝试写一个HTML或DOM的转换器，能够把HTML内容转换成Markdown纯文本内容，至少支持如
下特性：

* 文本段落：`<p>段落</p>` => `段落` (末尾加两个回车)
* 粗体：`<b>bold</b>` => `**bold**`
* 斜体: `<i>italic</i>` => `_italic_`
* 标题：`<h1>Header 1</h1>` => `# Header 1`, H2~H5 如此类推
* 列表：
  ```
  <ul>
    <li>A</li>
    <li>B</li>
  </ul>
  ```
  转换成：
  ```
  * A
  * B
  ```

骨架代码：
```

abstract class HTMLElementConvertor {
  // Builder interface...
}

class HTMLElementToMarkdownConvertor extends HTMLElementConvertor {
  // Concrete Builder...
}

class HTMLReader {
  // Director...
}


```

示例输入：

```
<h1>Design Pattern - Builder</h1>

<p>The <b>Builder</b> pattern contains several components:</p>

<ul>
  <li><i>Builder</i></li>
  <li><i>ConcreteBuidler</i></li>
  <li><i>Director</i></li>
  <li><i>Product</i></li>
</ul>

```

期望输出Markdown内容：

```
# Deisgn Pattern - Builder

The **Builder** pattern contains several components:

* _Builder_
* _ConcreteBuidler_
* _Director_
* _Product_

```


==============
