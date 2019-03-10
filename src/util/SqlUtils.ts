export const convertToSql = (
  tableName: string,
  columnNames: Array<string>,
): string => {
  let result = ""
  const indent = "  "
  let s = 0
  result += "SELECT"
  for (let index = 0; index < columnNames.length; index++) {
    let cName = columnNames[s]
    if (index === columnNames.length - 1) {
      result += "\n" + indent + cName
    } else {
      result += "\n" + indent + cName + ","
    }
    s += 1
  }
  result += "\n" + "FROM" + "\n" + indent + tableName + "\n;"

  return result
}
