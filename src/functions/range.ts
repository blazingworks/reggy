import { R } from "../R";
import { e } from "../utils/e";

const templates = {
  digit: "0-9",
  lower: "a-z",
  upper: "A-Z",
  alpha: "a-zA-Z",
  alnum: "0-9a-zA-Z",
  hex: "0-9a-fA-F",
};

function r(range: string | string[], extend?: R) {
  const ranges: string[] = typeof range === "string" ? [range] : range;

  // Loop through the range array and replace any templates with their regex
  ranges.forEach((r) => {
    if (r in templates) ranges[ranges.indexOf(r)] = templates[r as keyof typeof templates];
  });

  // Join the ranges together and return the regex
  return e(`[${ranges.join("")}]`, extend);
}

export function range(range: string | string[], extend?: R) {
  return r(range, extend);
}

export function digit(extend?: R) {
  return r("digit", extend);
}

export function lowercase(extend?: R) {
  return r("lower", extend);
}

export function uppercase(extend?: R) {
  return r("upper", extend);
}

export function letter(extend?: R) {
  return r("alpha", extend);
}

export function alphanumeric(extend?: R) {
  return r("alnum", extend);
}

export function hex(extend?: R) {
  return r("hex", extend);
}
