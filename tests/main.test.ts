import { R, r } from "../src/";

test("Single Digit Matching", () => {
  const fragment = r.start().digit().end();
  expect(fragment.test("1")).toBe(true);
  expect(fragment.test("2")).toBe(true);
  expect(fragment.test("13")).toBe(false);
  expect(fragment.buildString("gm")).toBe("/^[0-9]$/gm");
  expect(fragment.toFragment()).toBe("^[0-9]$");
});

test("Any", () => {
  const fragment = r.start().any().end();
  expect(fragment.test("1")).toBe(true);
  expect(fragment.test("d")).toBe(true);
  expect(fragment.test("$")).toBe(true);
  expect(fragment.buildString("gm")).toBe("/^.$/gm");
  expect(fragment.toFragment()).toBe("^.$");
});

test("Fragments", () => {
  const fragment = r.fragment(r.alphanumeric()).f(r.space()).frg(r.letter());
  expect(fragment.test("a a")).toBe(true);
  expect(fragment.test("4 a")).toBe(true);
  expect(fragment.test("B A")).toBe(true);
  expect(fragment.test("7 D")).toBe(true);
  expect(fragment.test("d 5")).toBe(false);
  expect(fragment.test("3 5")).toBe(false);
  expect(fragment.test("4a")).toBe(false);
  expect(fragment.test("aa")).toBe(false);
  expect(fragment.test("A4")).toBe(false);
  expect(fragment.toFragment()).toBe("[0-9a-zA-Z] [a-zA-Z]");
});

test("Groups", () => {
  const fragment = r.group(r.uppercase()).g(r.space()).grp(r.lowercase());
  expect(fragment.test("A a")).toBe(true);
  expect(fragment.test("B b")).toBe(true);
  expect(fragment.test("X g")).toBe(true);
  expect(fragment.test("d D")).toBe(false);
  expect(fragment.test("d d")).toBe(false);
  expect(fragment.test("7 d")).toBe(false);
  expect(fragment.test("7 D")).toBe(false);
  expect(fragment.test("D 7")).toBe(false);
  expect(fragment.test("d 7")).toBe(false);
  expect(fragment.test("Aa")).toBe(false);
  expect(fragment.test("Bb")).toBe(false);
  expect(fragment.test("Xg")).toBe(false);
  expect(fragment.test("dD")).toBe(false);
  expect(fragment.test("dd")).toBe(false);
  expect(fragment.test("7d")).toBe(false);
  expect(fragment.test("7D")).toBe(false);
  expect(fragment.test("D7")).toBe(false);
  expect(fragment.test("d7")).toBe(false);
  expect(fragment.toFragment()).toBe("([A-Z])( )([a-z])");
});

test("Line Start Ends", () => {
  const fragment = r
    .lineBeginning()
    .lineStart()
    .beginningOfLine()
    .startOfLine()
    .start()
    .lineEnding()
    .lineEnd()
    .endingOfLine()
    .endOfLine()
    .end();
  expect(fragment.toFragment()).toBe("^^^^^$$$$$");
});

test("New Line", () => {
  const fragment = r.newline().n().nl();
  expect(
    fragment.test(`


`),
  ).toBe(true);
  expect(fragment.toFragment()).toBe("\\n\\n\\n");
});

test("Whitespace & Non-Whitespace", () => {
  const fragment = r.start().whitespace().nonwhitespace().ws().nws().end();
  expect(fragment.test("aaaa")).toBe(false);
  expect(fragment.test("aaa ")).toBe(false);
  expect(fragment.test("aa  ")).toBe(false);
  expect(fragment.test("a   ")).toBe(false);
  expect(fragment.test(" aaa")).toBe(false);
  expect(fragment.test(" a  ")).toBe(false);
  expect(fragment.test(" aa ")).toBe(false);
  expect(fragment.test("   a")).toBe(false);
  expect(fragment.test("  aa")).toBe(false);
  expect(fragment.test("a  a")).toBe(false);
  expect(fragment.test("a a ")).toBe(false);
  expect(fragment.test(" a a")).toBe(true);
  expect(fragment.test(" 7 7")).toBe(true);
  expect(fragment.test("    ")).toBe(false);
  expect(fragment.test(" a a ")).toBe(false);
  expect(fragment.test(" a  a")).toBe(false);
});

test("Or", () => {
  const fragment = r
    .start()
    .text("Hello ")
    .or([r.t("Tao"), r.t("Elle")])
    .t("!");

  expect(fragment.test("Hello Tao!")).toBe(true);
  expect(fragment.test("Hello Elle!")).toBe(true);
  expect(fragment.test("Hello World!")).toBe(false);
  expect(fragment.test("Hello Tao")).toBe(false);
  expect(fragment.test("Hello Elle")).toBe(false);
  expect(fragment.test("Hello Tao & Elle!")).toBe(false);
  expect(fragment.test("Hello Nick!")).toBe(false);
  expect(fragment.test("Hello Charlie!")).toBe(false);
  expect(fragment.test("Hello Nick & Charlie!")).toBe(false);
  expect(fragment.toFragment()).toBe("^Hello (Tao|Elle)!");

  const fragment2 = r
    .start()
    .text("Hello ")
    .oneOf([r.t("Nick"), r.t("Charlie")])
    .t("!");

  expect(fragment2.test("Hello Nick!")).toBe(true);
  expect(fragment2.test("Hello Charlie!")).toBe(true);
  expect(fragment2.test("Hello World!")).toBe(false);
  expect(fragment2.test("Hello Nick")).toBe(false);
  expect(fragment2.test("Hello Charlie")).toBe(false);
  expect(fragment2.test("Hello Nick & Charlie!")).toBe(false);
  expect(fragment2.test("Hello Tao!")).toBe(false);
  expect(fragment2.test("Hello Elle!")).toBe(false);
  expect(fragment2.test("Hello Tao & Elle!")).toBe(false);
  expect(fragment2.toFragment()).toBe("^Hello (Nick|Charlie)!");
});

test("Quantifiers", () => {
  const timesF = r
    .start()
    .times(r.group(r.text("Hello ")), 3)
    .amount(r.group(r.text("World")), 2)
    .end();
  expect(timesF.toFragment()).toBe("^(Hello ){3}(World){2}$");
  expect(timesF.test("Hello Hello Hello WorldWorld")).toBe(true);
  expect(timesF.test("Hello Hello Hello WorldWorldWorld")).toBe(false);
  expect(timesF.test("Hello Hello Hello World World")).toBe(false);
  expect(timesF.test("Hello Hello Hello World World World")).toBe(false);
  expect(timesF.test("Hello Hello World World")).toBe(false);

  const oomF = r.start().oom(r.t("a")).end();
  expect(oomF.test("a")).toBe(true);
  expect(oomF.test("aa")).toBe(true);
  expect(oomF.test("aaa")).toBe(true);
  expect(oomF.test("aaaa")).toBe(true);
  expect(oomF.test("b")).toBe(false);
  expect(oomF.test("")).toBe(false);

  const tbF = r.start().tb(r.t("a"), [3, 5]).end();
  expect(tbF.test("aaa")).toBe(true);
  expect(tbF.test("aaaa")).toBe(true);
  expect(tbF.test("aaaaa")).toBe(true);
  expect(tbF.test("aaaaaa")).toBe(false);
  expect(tbF.test("aa")).toBe(false);
  expect(tbF.test("")).toBe(false);

  const tomF = r.start().tom(r.t("a"), 3).end();
  expect(tomF.test("aaa")).toBe(true);
  expect(tomF.test("aaaa")).toBe(true);
  expect(tomF.test("aaaaa")).toBe(true);
  expect(tomF.test("aaaaaa")).toBe(true);
  expect(tomF.test("aa")).toBe(false);
  expect(tomF.test("")).toBe(false);

  const zomF = r.start().zom(r.t("a")).end();
  expect(zomF.test("a")).toBe(true);
  expect(zomF.test("aa")).toBe(true);
  expect(zomF.test("aaa")).toBe(true);
  expect(zomF.test("aaaa")).toBe(true);
  expect(zomF.test("")).toBe(true);
  expect(zomF.test("b")).toBe(false);

  const zooF = r.start().zoo(r.t("a")).end();
  expect(zooF.test("a")).toBe(true);
  expect(zooF.test("aa")).toBe(false);
  expect(zooF.test("aaa")).toBe(false);
  expect(zooF.test("aaaa")).toBe(false);
  expect(zooF.test("")).toBe(true);
  expect(zooF.test("b")).toBe(false);

  const bigFragment = r
    .oneOrMore(r.t("a"))
    .oneOrMoreOf(r.t("b"))
    .oom(r.t("c"))
    .times(r.t("d"), 2)
    .amount(r.t("e"), 3)
    .timesBetween(r.t("f"), [9, 10])
    .between(r.t("g"), [113, 114])
    .tb(r.t("h"), [999, 1000])
    .timesOrMore(r.t("i"), 2)
    .atLeast(r.t("j"), 3)
    .tom(r.t("k"), 2)
    .minimum(r.t("l"), 3)
    .zom(r.t("l"))
    .zeroOrMoreOf(r.t("m"))
    .zeroOrMore(r.t("n"))
    .zoo(r.t("o"))
    .zeroOrOne(r.t("p"))
    .zeroOrOneOf(r.t("q"))
    .optional(r.t("r"));

  expect(bigFragment.buildString("gm")).toBe("/a+b+c+d{2}e{3}f{9,10}g{113,114}h{999,1000}i{2,}j{3,}k{2,}l{3,}l*m*n*o?p?q?r?/gm");
});

test("Ranges", () => {
  const fragment = r
    .range("digit")
    .r("lower")
    .r("upper")
    .r("alpha")
    .r("alnum")
    .r("hex")
    .digit()
    .lowercase()
    .uppercase()
    .letter()
    .alphanumeric()
    .hex()
    .r(["digit", "A-C", "lower"]);
  expect(fragment.toFragment()).toBe(
    "[0-9][a-z][A-Z][a-zA-Z][0-9a-zA-Z][0-9a-fA-F][0-9][a-z][A-Z][a-zA-Z][0-9a-zA-Z][0-9a-fA-F][0-9A-Ca-z]",
  );
});

test("R class", () => {
  const fragment = new R("[A-Z]");
  expect(fragment.test("A")).toBe(true);
  expect(fragment.test("B")).toBe(true);
  expect(fragment.test("a")).toBe(false);
  expect(fragment.test("")).toBe(false);
  expect(fragment.toFragment()).toBe("[A-Z]");

  fragment.append("+");
  expect(fragment.test("A")).toBe(true);
  expect(fragment.test("B")).toBe(true);
  expect(fragment.test("AB")).toBe(true);
  expect(fragment.test("a")).toBe(false);
  expect(fragment.test("")).toBe(false);
});
