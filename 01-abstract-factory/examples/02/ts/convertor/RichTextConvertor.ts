
// Abstract Product Part
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

// Abstract Factory
export interface RichTextConvertor {
  createDocument():Node;
  createHeader(level: number):Node;
  createParagraph():Node;
  createText(text: string):Node;
  createBold():Node;
  createItalic():Node;
  createUnderline():Node;
  createStrikeThrough():Node;
}

export default RichTextConvertor;
