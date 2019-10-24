import { getSchemaName } from "../data/DomRepository"

/** SQL文のインデント */
const IND = "  "

export const convertToSql = (
  tableName: string,
  columnNames: ReadonlyArray<string>,
): string => {
  const alias = convertToAliasName(tableName)

  const colsStr = columnNames.reduce((accum, col, index) => {
    if (index === 0) {
      return `${accum}${IND}${alias}.${col} AS "${alias}.${col}"`
    }
    return `${accum}\n${IND}, ${alias}.${col} AS "${alias}.${col}"`
  }, "")

  // スキーマ名を取得できる場合は、SQLに足してやる
  const maybeSchema = getSchemaName()
  const schema = maybeSchema == null ? "" : `${maybeSchema}.`

  const sqlStr = `\
SELECT
${colsStr}
FROM
  ${schema}${tableName} AS ${alias}
--     LEFT OUTER JOIN xxx_table AS x
--       ON ${alias}.xxx = x.xxx
-- WHERE
-- ORDER BY
LIMIT 10
;`

  return sqlStr
}

export const convertToAliasName = (tableName: string): string => {
  const SEPARATER_CHAR = "_"

  // 区切り文字を含まないテーブル名は、先頭1文字だけでよいため、先に返す
  if (!tableName.includes(SEPARATER_CHAR)) {
    return tableName[0]
  }

  const words = tableName.split(SEPARATER_CHAR)
  const omission = words.reduce((prev, next) => {
    if (next.length > 0) {
      return prev + next[0]
    }
    // 空文字「""」の場合、word[0]を連結すると"undefined"という文字になってしまう
    // そのため、空文字の場合は連結をスキップする
    return prev
  }, "")

  return omission
}
