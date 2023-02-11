import { R } from "../R";
import { e } from "../utils/e";

export function nonwhitespace(extend?: R) {
  return e("\\S", extend);
}

export function nws(extend?: R) {
  return nonwhitespace(extend);
}
