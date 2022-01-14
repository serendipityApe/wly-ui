import React from 'react';
import { Props } from './interface';

const defaultProps = {};

const Markdown: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };
  const [myMarkdown, setMyMarkdown] = React.useState('');
  type State = {
    output: string;
  };
  enum TagType {
    Paragraph,
    Header1,
    Header2,
    Header3,
    HorizontalRule,
  }
  class TagTypeToHTML {
    private readonly tagType: Map<TagType, string> = new Map<TagType, string>();
    constructor() {
      this.tagType.set(TagType.Paragraph, 'p');
      this.tagType.set(TagType.Header1, 'h1');
      this.tagType.set(TagType.Header2, 'h2');
      this.tagType.set(TagType.Header3, 'h3');
      this.tagType.set(TagType.HorizontalRule, 'hr');
    }
    getOpeningTag(tagType: TagType) {
      return this.getTag(tagType, '<');
    }
    getClosingTag(tagType: TagType) {
      return this.getTag(tagType, '</');
    }
    getTag(tagType: TagType, openingTagPattern: string) {
      let tag = this.tagType.get(tagType);
      if (tag) {
        return `${openingTagPattern}${tag}>`;
      }
      return `${openingTagPattern}p>`;
    }
  }
  class ParseElement {
    currentLine: string = '';
  }
  abstract class Handler<T> {
    protected next: Handler<T> | null = null;
    protected abstract canHandle(requset: T): boolean;
    public setNext(next: Handler<T>) {
      return (this.next = next);
    }
    public HandleRequest(request: T) {
      if (!this.canHandle(request)) {
        if (this.next !== null) {
          this.next.HandleRequest(request);
        }
        return;
      }
    }
  }
  class ParseChainHandler extends Handler<ParseElement> {
    constructor(
      private readonly dispatch: Dispatch,
      private readonly tag: string,
      private readonly tagType: TagType,
    ) {
      super();
    }
    protected canHandle(request: ParseElement): boolean {
      let split = new LineParser().parse(request.currentLine, this.tag);
      if (split[0]) {
        //next Line
        this.dispatch({ type: this.tagType, currentLine: split[1] });
      }
      return split[0];
    }
  }
  class ParagraphHandler extends Handler<ParseElement> {
    constructor(private readonly dispatch: Dispatch) {
      super();
    }
    protected canHandle(request: ParseElement): boolean {
      this.dispatch({ type: TagType.Paragraph, currentLine: request.currentLine });
      return true;
    }
  }
  //定义解析规则
  class Header1ChainHandler extends ParseChainHandler {
    constructor(dispatch: Dispatch) {
      super(dispatch, '# ', TagType.Header1);
    }
  }
  class Header2ChainHandler extends ParseChainHandler {
    constructor(dispatch: Dispatch) {
      super(dispatch, '## ', TagType.Header2);
    }
  }
  class Header3ChainHandler extends ParseChainHandler {
    constructor(dispatch: Dispatch) {
      super(dispatch, '### ', TagType.Header3);
    }
  }
  class HorizontalRuleHandler extends ParseChainHandler {
    constructor(dispatch: Dispatch) {
      super(dispatch, '---', TagType.HorizontalRule);
    }
  }
  class ChainOfResponsibilityFactory {
    Build(dispatch: Dispatch): ParseChainHandler {
      let header1: Header1ChainHandler = new Header1ChainHandler(dispatch);
      let header2: Header2ChainHandler = new Header2ChainHandler(dispatch);
      let header3: Header1ChainHandler = new Header3ChainHandler(dispatch);
      let horizontal: Header2ChainHandler = new HorizontalRuleHandler(dispatch);
      let Paragraph: ParagraphHandler = new ParagraphHandler(dispatch);
      header1
        .setNext(header2)
        .setNext(header3)
        .setNext(horizontal)
        .setNext(Paragraph);
      console.log(header1);
      return header1;
    }
  }
  class Markdown {
    public ToHtml(text: string) {
      let header1: Header1ChainHandler = new ChainOfResponsibilityFactory().Build(dispatch);
      let lines: string[] = text.split(`\n`);
      for (let index = 0; index < lines.length; index++) {
        let parseElement: ParseElement = new ParseElement();
        parseElement.currentLine = lines[index];
        header1.HandleRequest(parseElement);
      }
    }
  }
  class LineParser {
    public parse(value: string, tag: string): [boolean, string] {
      let res: [boolean, string] = [false, ''];
      res[1] = value;
      let split = value.startsWith(`${tag}`);
      if (split) {
        res[0] = true;
        res[1] = value.substring(tag.length);
        console.log(res[1]);
      }
      return res;
    }
  }
  React.useEffect(() => {
    function RenderHtmlContent(input: string) {
      let markdown = new Markdown();
      dispatch({ type: 'reset', currentLine: '' });
      markdown.ToHtml(input);
    }
    RenderHtmlContent(myMarkdown);
  }, [myMarkdown]);

  const [state, dispatch] = React.useReducer(reducer, { output: '' });
  type Dispatch = typeof dispatch;
  function reducer(state: State, action: { type: TagType | 'reset'; currentLine: string }): State {
    function baseAdd(...content: string[]) {
      let newOutput = state.output;
      content.forEach(item => {
        newOutput += item;
      });
      return { output: newOutput, currentLine: '' };
    }
    let tagTypeToHTML = new TagTypeToHTML();
    switch (action.type) {
      case 'reset':
        return { output: '' };
      case TagType.Header1:
        return baseAdd(
          tagTypeToHTML.getOpeningTag(TagType.Header1),
          action.currentLine,
          tagTypeToHTML.getClosingTag(TagType.Header1),
        );
      case TagType.Header2:
        return baseAdd(
          tagTypeToHTML.getOpeningTag(TagType.Header2),
          action.currentLine,
          tagTypeToHTML.getClosingTag(TagType.Header2),
        );
      case TagType.Header3:
        return baseAdd(
          tagTypeToHTML.getOpeningTag(TagType.Header3),
          action.currentLine,
          tagTypeToHTML.getClosingTag(TagType.Header3),
        );
      case TagType.HorizontalRule:
        return baseAdd(
          tagTypeToHTML.getOpeningTag(TagType.HorizontalRule),
          tagTypeToHTML.getClosingTag(TagType.HorizontalRule),
        );
      case TagType.Paragraph:
        return baseAdd(
          tagTypeToHTML.getOpeningTag(TagType.Paragraph),
          action.currentLine,
          tagTypeToHTML.getClosingTag(TagType.Paragraph),
        );
      default:
        return { output: '' };
    }
  }
  return (
    <div className="wly-markdown">
      <div className="container">
        <div className="left">
          <textarea
            className="myMarkdown"
            onChange={e => {
              e.persist();
              if (e.target instanceof HTMLTextAreaElement) {
                setMyMarkdown(e.target.value);
                // RenderHtmlContent(e.target.value);
              }
            }}
          ></textarea>
        </div>
        <div className="right">
          <div className="markdownOutput" dangerouslySetInnerHTML={{ __html: state.output }}></div>
        </div>
      </div>
    </div>
  );
};

export default Markdown;
