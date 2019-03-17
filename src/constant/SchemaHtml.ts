import { TableName } from "../domain/TableName"

/**
 * SchemaHTML依存の定数
 */

export const getSelectColumnsQuery = (tableName: TableName): string => {
  return `#${tableName.value}-body td.columnnamecell`
}

export const SELECT_TABLE_NAME_QUERY = "#table-list-body td.namecell"
