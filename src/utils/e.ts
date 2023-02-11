import { R } from "../R";
export function e(fragment: string, extend?: R): R {
  return extend ? extend.append(fragment) : new R(fragment);
}
