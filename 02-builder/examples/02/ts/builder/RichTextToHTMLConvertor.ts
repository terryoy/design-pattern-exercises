import RichTextConvertor from './RichTextConvertor';
import { HTMLNode, HTMLSimpleNode, HTMLTextNode, HTMLHeaderNode, HTMLDocumentNode } from './HTMLNodes';


// Concrete Builder
/* A builder for converting */
class RichTextToHTMLConvertor implements RichTextConvertor {
  html: string;
  stack: HTMLNode[];

  constructor() {
    this.html = '';
    this.stack = [];
  }

  reset():void {
    this.html = '';
  }

  getResult():string {
    return this.html;
  }

  startDocument():RichTextConvertor {
    return this.startNode(new HTMLDocumentNode());
  }
  startHeader(level: number):RichTextConvertor {
    return this.startNode(new HTMLHeaderNode(level));
  }
  startParagraph():RichTextConvertor {
    return this.startNode(new HTMLSimpleNode('paragraph'));
  }
  startText(text: string):RichTextConvertor {
    return this.startNode(new HTMLTextNode(text));
  }
  startBold():RichTextConvertor {
    return this.startNode(new HTMLSimpleNode("bold"));
  }

  startItalic():RichTextConvertor {
    return this.startNode(new HTMLSimpleNode("italic"));
  }
  startUnderline():RichTextConvertor {
    return this.startNode(new HTMLSimpleNode("underline"));
  }
  startStrikeThrough():RichTextConvertor {
    return this.startNode(new HTMLSimpleNode("strikethrough"));
  }

  startNode(node:HTMLNode):RichTextConvertor {
    this.html += node.start();
    this.stack.push(node);
    return this;
  }

  endNode():RichTextConvertor {
    const node = this.stack.pop();
    this.html += node.end();
    return this;
  }

}

export default RichTextToHTMLConvertor;
