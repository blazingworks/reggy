import { R } from "../R";
import { e } from "../utils/e";

export function zeroOrMore(child: R, extend?: R) {
  return e(`${child.toFragment()}*`, extend);
}

export function zeroOrMoreOf(child: R, extend?: R) {
  return zeroOrMore(child, extend);
}

export function zom(child: R, extend?: R) {
  return zeroOrMore(child, extend);
}
