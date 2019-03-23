export const convertToSql = (
  tableName: string,
  columnNames: ReadonlyArray<string>,
): string => {
  let result = ""
  const indent = "  "
  const asName = convertToAliasName(tableName)
  result += "SELECT"
  for (let index = 0; index < columnNames.length; index += 1) {
    const cName = columnNames[index]
    if (index === columnNames.length - 1) {
      result += `\n${indent}${asName}.${cName}`
    } else {
      result += `\n${indent}${asName}.${cName},`
    }
  }

  result += `\nFROM\n${indent}${tableName} AS ${asName}\n;`

  return result
}

export const convertToAliasName = (tableName: string): string => {
  const SEPARATER_CHAR = "_"

  // 区切り文字を含まないテーブル名は、先頭1文字だけでよいため、先に返す
  if (!tableName.includes(SEPARATER_CHAR)) {
    return tableName[0]
  }

  let omission = ""

  const words = tableName.split(SEPARATER_CHAR)
  for (const word of words) {
    // 空文字「""」の場合、word[0]を連結すると"undefined"という文字になってしまう
    // そのため、空文字の場合は連結をスキップする
    if (word.length > 0) {
      omission += word[0]
    }
  }

  return omission
}
