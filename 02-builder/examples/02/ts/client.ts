
import DocumentData from './data';
import RichTextReader from './builder/RichTextReader';
import RichTextToHTMLConvertor from './builder/RichTextToHTMLConvertor';

export class Client {
  convert(data: object): string {
    const convertor = new RichTextToHTMLConvertor();
    const reader = new RichTextReader(convertor);
    reader.parse(data);
    return convertor.getResult();
  }
}

const client = new Client();
const html = client.convert(DocumentData);
console.log(`HTML Result:\n${html}`);
