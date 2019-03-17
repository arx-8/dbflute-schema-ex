interface Branded<T extends string> {
  type: T
  value: string
}

/**
 * コンパイルレベルで基本型と区別するための幽霊型
 *
 * Usage: const html = { value: "<div></div>" } as HTMLString
 */
export type HTMLString = Branded<"HTMLString">

export type SystemStatus = "NONE" | "INJECTED"
