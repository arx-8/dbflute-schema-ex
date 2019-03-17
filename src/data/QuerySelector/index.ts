import { getDocument } from "./Document"

/**
 * document.querySelectorAll() をモック可能にするためのラッパー
 */
export const querySelectorAll = (
  selector: string,
): ReadonlyArray<HTMLElement> => {
  return Array.prototype.slice.call(getDocument().querySelectorAll(selector))
}
/**
 * 1要素をgetする
 *
 * @throws 2要素以上見つかった
 */
export const querySelector = (selector: string): HTMLElement | null => {
  const founds = querySelectorAll(selector)
  if (founds.length === 0) {
    return null
  }
  if (founds.length === 1) {
    return founds[0]
  }
  throw new Error(`Logic Failure: "${selector}" found multiple elements`)
}

/**
 * 必ず1要素をgetする
 *
 * @throws 見つからない | 2要素以上見つかった
 */
export const querySelectorStrict = (selector: string): HTMLElement => {
  const founds = querySelectorAll(selector)
  if (founds.length === 1) {
    return founds[0]
  }
  throw new Error(`Logic Failure: "${selector}" is always 1 element exists`)
}
