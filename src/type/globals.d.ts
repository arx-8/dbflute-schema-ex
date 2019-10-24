/**
 * 全体で使う型定義
 */

/**
 * for suppress the following error message
 * Cannot compile namespaces when the '--isolatedModules' flag is provided.
 * @see https://github.com/Microsoft/TypeScript/issues/15230
 */
export {}

declare global {
  interface Window {
    DecommentUtil: {
      getSchemaName?: () => string
    }
  }
}
