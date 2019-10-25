/**
 * e.g.) type BrandName = Brand<string, "BrandName">
 */
type Brand<K, T> = K & { __brand: T }

/**
 * コンパイルレベルで基本型と区別するための幽霊型
 */
export type HTMLString = Brand<string, "HTMLString">

export type SystemStatus = "NONE" | "INJECTED"
