

import DocumentData from './data';
import RichTextReader from './builder/RichTextReader';
import RichTextToHTMLConvertor from './builder/RichTextToHTMLConvertor';

class Client {

  convert(data: object): string {
    const reader = new RichTextReader();
    const convertor = new RichTextToHTMLConvertor();
    reader.setConvertor(convertor);
    return reader.parse(data);
  }
}


const client = new Client();
const html = client.convert(DocumentData);

console.log('Source:\n', JSON.stringify(DocumentData, null, '  '));
console.log('HTML Result:\n', html);
