import { R } from "../R";
import { e } from "../utils/e";

export function group(child: R, extend?: R) {
  return e(`(${child.toFragment()})`, extend);
}

export function g(child: R, extend?: R) {
  return group(child, extend);
}

export function grp(child: R, extend?: R) {
  return group(child, extend);
}
