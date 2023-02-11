import { R } from "../R";
import { e } from "../utils/e";

export function whitespace(extend?: R) {
  return e("\\s", extend);
}

export function ws(extend?: R) {
  return whitespace(extend);
}
