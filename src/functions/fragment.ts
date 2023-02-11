import { R } from "../R";
import { e } from "../utils/e";

export function fragment(child: R, extend?: R) {
  return e(child.toFragment(), extend);
}

export function f(child: R, extend?: R) {
  return fragment(child, extend);
}

export function frg(child: R, extend?: R) {
  return fragment(child, extend);
}
