
import DocumentData from './data';
import RichTextReader from './convertor/RichTextReader';
import RichTextToHTMLConvertor from './convertor/RichTextToHTMLConvertor';

export class Client {

  convert(data: object): string {
    const convertor = new RichTextToHTMLConvertor();
    const reader = new RichTextReader(convertor);
    return reader.parse(data);
  }
}


const client = new Client();
const html = client.convert(DocumentData);

console.log(`HTML Result:\n${html}`);
