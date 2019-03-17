/**
 * (memo)
 * jest で mock 化する場合は、別ファイルにないと正しく動作しない
 * そのため、この function のためだけに別ファイルに切り出している。
 */

/**
 * jest の import mock で document オブジェクトを mock 化させるため、
 * document には直接アクセスせず、この function 経由でアクセスする
 */
export const getDocument = (): Document => {
  // eslint-disable-next-line no-restricted-globals
  return document
}
