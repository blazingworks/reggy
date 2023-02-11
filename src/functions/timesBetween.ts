import { R } from "../R";
import { e } from "../utils/e";

export function timesBetween(child: R, minMax: [number, number], extend?: R) {
  return e(`${child.toFragment()}{${minMax[0]},${minMax[1]}}`, extend);
}

export function between(child: R, minMax: [number, number], extend?: R) {
  return timesBetween(child, minMax, extend);
}

export function tb(child: R, minMax: [number, number], extend?: R) {
  return timesBetween(child, minMax, extend);
}
