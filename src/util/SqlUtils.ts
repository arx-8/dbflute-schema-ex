export const convertToSql = (
  tableName: string,
  columnNames: Array<string>,
): string => {
  let result = ""
  const indent = "  "
  let s = 0
  const AS_name = convertToAliasName(tableName)
  result += "SELECT"
  for (let index = 0; index < columnNames.length; index++) {
    const cName = columnNames[s]
    if (index === columnNames.length - 1) {
      result += "\n" + indent + AS_name + "." + cName
    } else {
        result += "\n" + indent + AS_name + "." + cName + ","
    }
    s += 1
  }

  result += "\n" + "FROM" + "\n" + indent + tableName + " AS " + AS_name + "\n;"

  return result
}

export const convertToAliasName = (tableName: string) => {
  // TODO
  return "m"
}
