import { R } from "../R";
import { e } from "../utils/e";

export function newline(extend?: R) {
  return e("\\n", extend);
}

export function n(extend?: R) {
  return newline(extend);
}

export function nl(extend?: R) {
  return newline(extend);
}
