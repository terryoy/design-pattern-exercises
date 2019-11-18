
import RichTextConvertor from './RichTextConvertor';

// Factory Client
class RichTextReader {
  convertor: RichTextConvertor;

  constructor(convertor: RichTextConvertor) {
    this.convertor = convertor;
  }

  parseNode = (data: object, convertor: RichTextConvertor):void => {
    switch(data["type"]) {
      case "document":
        convertor.startDocument();
        break;
      case "header":
        convertor.startHeader(data["level"]);
        break;
      case "text":
        convertor.startText(data["text"]);
        break;
      case "paragraph":
        convertor.startParagraph();
        break;
      case "bold":
        convertor.startBold();
        break;
      case "italic":
        convertor.startItalic();
        break;
      case "underline":
        convertor.startUnderline();
        break;
      case "strikethrough":
        convertor.startStrikeThrough();
        break;
      default:
        throw new Error(`Unknown node type: ${data["type"]}`);
    }

    // add children
    if (data["nodes"]) {
      data["nodes"].forEach((childData:object) => {
        this.parseNode(childData, convertor);
      });
    }

    convertor.endNode();
  }

  parse(data: object): void {
    this.convertor.reset(); // let's ensure clearing before rebuilding
    this.parseNode(data, this.convertor);
  }
}


export default RichTextReader;
