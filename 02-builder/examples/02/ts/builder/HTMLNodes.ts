// Product Parts
/* HTML Nodes for converting */
export abstract class HTMLNode {
  type:string;
  constructor(type:string) {
    this.type = type;
  }

  abstract start():string;
  abstract end():string;
}

export class HTMLSimpleNode extends HTMLNode {
  simpleTagMap: object = {
    "paragraph": "p",
    "bold": "b",
    "italic": "i",
    "underline": "u",
    "strikethrough": "s",
  }

  getTag():string {
    return this.simpleTagMap[this.type];
  }

  start():string {
    const tag = this.getTag();
    return tag ? `<${tag}>` : '';
  }

  end():string {
    const tag = this.getTag();
    return tag ? `</${tag}>` : '';
  }
}


export class HTMLDocumentNode extends HTMLNode {
  constructor() {
    super('document');
  }

  start():string {
    return '<html><body>';
  }

  end():string {
    return '</body></html>';
  }
}

export class HTMLHeaderNode extends HTMLNode {
  level:number;

  constructor(level:number) {
    super("header");
    this.level = level;
  }

  start = ():string => `<h${this.level}>`;
  end = ():string => `</h${this.level}>`;
}

export class HTMLTextNode extends HTMLNode {
  text: string;
  constructor(text:string) {
    super("text");
    this.text = text;
  }
  start = ():string => this.text;
  end = ():string => '';
}
