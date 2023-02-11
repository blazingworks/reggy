import { R } from "../R";
import { e } from "../utils/e";

export function zeroOrOne(child: R, extend?: R) {
  return e(`${child.toFragment()}?`, extend);
}

export function zeroOrOneOf(child: R, extend?: R) {
  return zeroOrOne(child, extend);
}

export function zoo(child: R, extend?: R) {
  return zeroOrOne(child, extend);
}

export function optional(child: R, extend?: R) {
  return zeroOrOne(child, extend);
}
