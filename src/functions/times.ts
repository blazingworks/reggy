import { R } from "../R";
import { e } from "../utils/e";

export function times(child: R, amount?: number, extend?: R) {
  return e(`${child.toFragment()}{${amount}}`, extend);
}

export function amount(child: R, amount?: number, extend?: R) {
  return times(child, amount, extend);
}
