
// Abstract Factory
export abstract class RichTextConvertor {
  abstract startDocument():RichTextConvertor;
  abstract startHeader(level: number):RichTextConvertor;
  abstract startParagraph():RichTextConvertor;
  abstract startText(text: string):RichTextConvertor;
  abstract startBold():RichTextConvertor;
  abstract startItalic():RichTextConvertor;
  abstract startUnderline():RichTextConvertor;
  abstract startStrikeThrough():RichTextConvertor;

  abstract endNode():RichTextConvertor; // end

  // not neccessary in the abstract class
  abstract reset():void; // rebuild content
  abstract getResult():string; // get string content
}

export default RichTextConvertor;
