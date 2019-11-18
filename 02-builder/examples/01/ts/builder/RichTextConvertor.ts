

export abstract class Node {
  type: string;
  nodes: Node[];

  constructor(type:string) {
    this.type = type;
    this.nodes = [];
  }

  addChild(childNode: Node) {
    this.nodes.push(childNode);
  }

  abstract render():string;
}

export abstract class RichTextConvertor {
  abstract createDocument():Node;
  abstract createHeader(level: number):Node;
  abstract createParagraph():Node;
  abstract createText(text: string):Node;
  abstract createBold():Node;
  abstract createItalic():Node;
  abstract createUnderline():Node;
  abstract createStrikeThrough():Node;
}

export default RichTextConvertor;
