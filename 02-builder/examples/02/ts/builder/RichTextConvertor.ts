
// Builder Interface
export interface RichTextConvertor {
  startDocument():RichTextConvertor;
  startHeader(level: number):RichTextConvertor;
  startParagraph():RichTextConvertor;
  startText(text: string):RichTextConvertor;
  startBold():RichTextConvertor;
  startItalic():RichTextConvertor;
  startUnderline():RichTextConvertor;
  startStrikeThrough():RichTextConvertor;

  endNode():RichTextConvertor; // end

  // not neccessary in the class
  reset():void; // rebuild content
  getResult():string; // get string content
}

export default RichTextConvertor;
