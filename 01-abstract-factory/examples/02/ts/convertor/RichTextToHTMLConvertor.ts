import RichTextConvertor, { Node } from './RichTextConvertor';
import { HTMLDocumentNode, HTMLSimpleNode, HTMLTextNode, HTMLHeaderNode } from './HTMLNodes';

// Concrete Factory
/* A builder for converting */
class RichTextToHTMLConvertor implements RichTextConvertor {

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
