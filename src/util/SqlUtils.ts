export const convertToSql = (
  tableName: string,
  columnNames: Array<string>,
): string => {
  let result = ""
  const indent = "  "
  let s = 0
  let AS_name = ""
  result += "SELECT"
  for (let index = 0; index < columnNames.length; index++) {
    let cName = columnNames[s]
    if (cName.indexOf("member") !== -1) {
      AS_name = "m"
      if (index === columnNames.length - 1) {
        result += "\n" + indent + AS_name + "." + cName
      } else {
        result += "\n" + indent + AS_name + "." + cName + ","
      }
      s += 1
    } else if (cName.indexOf("pppp") !== -1) {
      AS_name = "atn"
      if (index === columnNames.length - 1) {
        result += "\n" + indent + AS_name + "." + cName
      } else {
        result += "\n" + indent + AS_name + "." + cName + ","
      }
      s += 1
    }
  }

  result += "\n" + "FROM" + "\n" + indent + tableName + " AS " + AS_name + "\n;"

  return result
}
