import { R } from "../R";
import { e } from "../utils/e";

export function or(children: R[], extend?: R) {
  return e(`(${children.map((c) => c.toFragment()).join("|")})`, extend);
}

export function oneOf(children: R[], extend?: R) {
  return or(children, extend);
}
