/**
 * テーブル名の大小文字を統一して処理する時に取り違えやすいため、class化している
 */
export class TableName {
  constructor(private tableName: string) {}

  get value(): string {
    return this.tableName.toLowerCase()
  }
}
