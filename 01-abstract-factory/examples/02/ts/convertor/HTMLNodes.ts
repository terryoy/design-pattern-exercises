import { Node } from './RichTextConvertor';

// Product Parts
/* HTML Nodes for converting */
export abstract class HTMLNode extends Node {
  renderChildren(): string {
    return this.nodes.map(
      (node:Node) => node.render()
    ).join("");
  }
}

export class HTMLSimpleNode extends HTMLNode {
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

export class HTMLDocumentNode extends HTMLNode {
  constructor() {
    super('document');
  }

  render():string {
    return `<html><body>${ this.renderChildren() }</body></html>`;
  }
}

export class HTMLHeaderNode extends HTMLNode {
  level:number;

  constructor(level:number) {
    super("header");
    this.level = level;
  }
  render():string {
    return `<h${this.level}>${ this.renderChildren() }</h${this.level}>`;
  }
}

export class HTMLTextNode extends HTMLNode {
  text: string;
  constructor(text:string) {
    super("text");
    this.text = text;
  }
  render():string {
    return this.text;
  }
}
