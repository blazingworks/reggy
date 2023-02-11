import * as f from "./functions";

export class R {
  private regexString = "";

  constructor(fragment: string) {
    this.regexString = fragment;
  }

  public append(fragment: string) {
    this.regexString += fragment;
    return this;
  }

  public readonly any = () => f.any(this);

  public readonly fragment = (child: R) => f.fragment(child, this);
  public readonly f = (child: R) => f.f(child, this);
  public readonly frg = (child: R) => f.frg(child, this);

  public readonly group = (child: R) => f.group(child, this);
  public readonly g = (child: R) => f.g(child, this);
  public readonly grp = (child: R) => f.grp(child, this);

  public readonly lineBeginning = () => f.lineBeginning(this);
  public readonly lineStart = () => f.lineStart(this);
  public readonly beginningOfLine = () => f.beginningOfLine(this);
  public readonly startOfLine = () => f.startOfLine(this);
  public readonly start = () => f.start(this);
  public readonly lineEnding = () => f.lineEnding(this);
  public readonly lineEnd = () => f.lineEnd(this);
  public readonly endingOfLine = () => f.endingOfLine(this);
  public readonly endOfLine = () => f.endOfLine(this);
  public readonly end = () => f.end(this);

  public readonly newline = () => f.newline(this);
  public readonly n = () => f.n(this);
  public readonly nl = () => f.nl(this);

  public readonly nonwhitespace = () => f.nonwhitespace(this);
  public readonly nws = () => f.nws(this);

  public readonly oneOrMore = (child: R) => f.oneOrMore(child, this);
  public readonly oneOrMoreOf = (child: R) => f.oneOrMoreOf(child, this);
  public readonly oom = (child: R) => f.oom(child, this);

  public readonly or = (children: R[]) => f.or(children, this);
  public readonly oneOf = (children: R[]) => f.oneOf(children, this);

  public readonly range = (ranges: string | string[]) => f.range(ranges, this);
  public readonly r = (ranges: string | string[]) => f.range(ranges, this);
  public readonly digit = () => f.digit(this);
  public readonly lowercase = () => f.lowercase(this);
  public readonly uppercase = () => f.uppercase(this);
  public readonly letter = () => f.letter(this);
  public readonly alphanumeric = () => f.alphanumeric(this);
  public readonly hex = () => f.hex(this);

  public readonly space = () => f.space(this);

  public readonly text = (text: string) => f.text(text, this);
  public readonly t = (text: string) => f.t(text, this);

  public readonly times = (child: R, amount: number) => f.times(child, amount, this);
  public readonly amount = (child: R, amount: number) => f.amount(child, amount, this);

  public readonly timesBetween = (child: R, minMax: [number, number]) => f.timesBetween(child, minMax, this);
  public readonly between = (child: R, minMax: [number, number]) => f.between(child, minMax, this);
  public readonly tb = (child: R, minMax: [number, number]) => f.tb(child, minMax, this);

  public readonly timesOrMore = (child: R, amount: number) => f.timesOrMore(child, amount, this);
  public readonly minimum = (child: R, amount: number) => f.minimum(child, amount, this);
  public readonly atLeast = (child: R, amount: number) => f.atLeast(child, amount, this);
  public readonly tom = (child: R, amount: number) => f.tom(child, amount, this);

  public readonly whitespace = () => f.whitespace(this);
  public readonly ws = () => f.ws(this);

  public readonly zeroOrMore = (child: R) => f.zeroOrMore(child, this);
  public readonly zeroOrMoreOf = (child: R) => f.zeroOrMoreOf(child, this);
  public readonly zom = (child: R) => f.zom(child, this);

  public readonly zeroOrOne = (child: R) => f.zeroOrOne(child, this);
  public readonly zeroOrOneOf = (child: R) => f.zeroOrOneOf(child, this);
  public readonly zoo = (child: R) => f.zoo(child, this);
  public readonly optional = (child: R) => f.optional(child, this);

  public toFragment() {
    return this.regexString;
  }

  public buildRegex(flags?: string) {
    return new RegExp(this.regexString, flags);
  }

  public buildString(flags?: string) {
    return `/${this.regexString}/${flags}`;
  }

  public test(text: string, flags?: string) {
    return this.buildRegex(flags).test(text);
  }
}
