import { R } from "../R";
import { e } from "../utils/e";

export function timesOrMore(child: R, amount: number, extend?: R) {
  return e(`${child.toFragment()}{${amount},}`, extend);
}

export function minimum(child: R, amount: number, extend?: R) {
  return timesOrMore(child, amount, extend);
}

export function atLeast(child: R, amount: number, extend?: R) {
  return timesOrMore(child, amount, extend);
}

export function tom(child: R, amount: number, extend?: R) {
  return timesOrMore(child, amount, extend);
}
