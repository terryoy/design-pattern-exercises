import 'mocha';
import { expect } from 'chai';

import { Client } from './client';
import DocumentData from './data';


describe('Test HTML converting result', () => {
  it('DocumentData', () => {
    const client = new Client();
    const html = client.convert(DocumentData);
    const spec = `<html><body><h1>An Example of a Rich Text Document</h1><p>This demonstrate some rich text formats of:<b>bold</b>, <i>italic</i>, and <u>underline</u>, and <s>strikethrough</s>.</p></body></html>`;
    expect(html).to.eq(spec);
  })
});
