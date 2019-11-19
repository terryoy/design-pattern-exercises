
import RichTextConvertor, { Node } from './RichTextConvertor';

// Client of the Factory(RichTextConvertor)
class RichTextReader {
  convertor: RichTextConvertor;

  constructor(convertor: RichTextConvertor) {
    this.convertor = convertor;
  }

  buildNode(data: object):Node {
    var node:Node;

    switch(data["type"]) {
      case "document":
        node = this.convertor.createDocument();
        break;
      case "header":
        node = this.convertor.createHeader(data["level"]);
        break;
      case "text":
        node = this.convertor.createText(data["text"]);
        break;
      case "paragraph":
        node = this.convertor.createParagraph();
        break;
      case "bold":
        node = this.convertor.createBold();
        break;
      case "italic":
        node = this.convertor.createItalic();
        break;
      case "underline":
        node = this.convertor.createUnderline();
        break;
      case "strikethrough":
        node = this.convertor.createStrikeThrough();
        break;
      default:
        throw new Error(`Unknown node type: ${data["type"]}`);
    }

    // add children
    if (data["nodes"]) {
      data["nodes"].forEach((childData:object) => {
          node.addChild(this.buildNode(childData));
      });
    }

    return node;
  }

  parse(data: object): string {
    const document = this.buildNode(data);
    return document.render();
  }
}


export default RichTextReader;
