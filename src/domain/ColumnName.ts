/**
 * 名の大小文字を統一して処理する時に取り違えやすいため、class化している
 */
export class ColumnName {
  constructor(private columnName: string) {}

  get value(): string {
    return this.columnName.toLowerCase()
  }
}
