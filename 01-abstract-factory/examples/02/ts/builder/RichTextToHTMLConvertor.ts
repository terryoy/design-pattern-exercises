import RichTextConvertor, { Node } from './RichTextConvertor';

// Product Parts
/* HTML Nodes for converting */
abstract class HTMLNode extends Node {
  renderChildren(): string {
    return this.nodes.map(
      (node:Node) => node.render()
    ).join("");
  }
}

class HTMLSimpleNode extends HTMLNode {
  simpleTagMap: object = {
    "paragraph": "p",
    "bold": "b",
    "italic": "i",
    "underline": "u",
    "strikethrough": "s",
  }

  render() {
    let tag:string = this.simpleTagMap[this.type];

    if (tag) {
      return `<${tag}>${ this.renderChildren() }</${tag}>`;
    }

    return this.renderChildren();
  }
}

class HTMLDocumentNode extends HTMLNode {
  constructor() {
    super('document');
  }

  render():string {
    return `<html><body>${ this.renderChildren() }</body></html>`;
  }
}

class HTMLHeaderNode extends HTMLNode {
  level:number;

  constructor(level:number) {
    super("header");
    this.level = level;
  }
  render():string {
    return `<h${this.level}>${ this.renderChildren() }</h${this.level}>`;
  }
}

class HTMLTextNode extends HTMLNode {
  text: string;
  constructor(text:string) {
    super("text");
    this.text = text;
  }
  render():string {
    return this.text;
  }
}

// Concrete Factory
/* A builder for converting */
class RichTextToHTMLConvertor extends RichTextConvertor {

  createDocument():Node {
    return new HTMLDocumentNode();
  }
  createHeader(level: number):Node {
    return new HTMLHeaderNode(level);
  }
  createParagraph():Node {
    return new HTMLSimpleNode('paragraph');
  }
  createText(text: string):Node {
    return new HTMLTextNode(text);
  }
  createBold():Node {
    return new HTMLSimpleNode("bold");
  }

  createItalic():Node {
    return new HTMLSimpleNode("italic");
  }
  createUnderline():Node {
    return new HTMLSimpleNode("underline");
  }
  createStrikeThrough():Node {
    return new HTMLSimpleNode("strikethrough");
  }

}

export default RichTextToHTMLConvertor;
