import { R } from "../R";
import { e } from "../utils/e";

export function lineBeginning(extend?: R) {
  return e("^", extend);
}

export function lineStart(extend?: R) {
  return lineBeginning(extend);
}

export function beginningOfLine(extend?: R) {
  return lineBeginning(extend);
}

export function startOfLine(extend?: R) {
  return lineBeginning(extend);
}

export function start(extend?: R) {
  return lineBeginning(extend);
}

export function lineEnding(extend?: R) {
  return e("$", extend);
}

export function lineEnd(extend?: R) {
  return lineEnding(extend);
}

export function endingOfLine(extend?: R) {
  return lineEnding(extend);
}

export function endOfLine(extend?: R) {
  return lineEnding(extend);
}

export function end(extend?: R) {
  return lineEnding(extend);
}
