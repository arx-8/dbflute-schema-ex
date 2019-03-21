export const convertToSql = (
  tableName: string,
  columnNames: string[],
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
  let omission = ""
  const ts = tableName.split("")

  omission += ts[0]
  for (let index = 0; index < tableName.length; index += 1) {
    if (ts[index] === "_") {
      omission += ts[index + 1]
    }
  }

  return omission
}
