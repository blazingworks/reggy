import { R } from "../R";
import { e } from "../utils/e";
import { multiReplace } from "@blazingworks/utils/text";

export function t(text: string, extend?: R) {
  return e(
    multiReplace(text, {
      "\\": "\\\\", // escape backslash
      ".": "\\.", // escape dot
      "*": "\\*", // escape asterisk
      "+": "\\+", // escape plus
      "?": "\\?", // escape question mark
      "^": "\\^", // escape caret
      $: "\\$", // escape dollar
      "{": "\\{", // escape opening curly brace
      "}": "\\}", // escape closing curly brace
      "[": "\\[", // escape opening square bracket
      "]": "\\]", // escape closing square bracket
      "(": "\\(", // escape opening parenthesis
      ")": "\\)", // escape closing parenthesis
      "|": "\\|", // escape pipe
      "/": "\\/", // escape slash
    }),
    extend,
  );
}

export function text(text: string, extend?: R) {
  return t(text, extend);
}
