import { R } from "../R";
import { e } from "../utils/e";

export function oneOrMore(child: R, extend?: R) {
  return e(`${child.toFragment()}+`, extend);
}

export function oneOrMoreOf(child: R, extend?: R) {
  return oneOrMore(child, extend);
}

export function oom(child: R, extend?: R) {
  return oneOrMore(child, extend);
}
