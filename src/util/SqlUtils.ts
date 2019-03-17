export const convertToSql = (
  tableName: string,
  columnNames: ReadonlyArray<string>,
): string => {
  return `${tableName}:${columnNames.join(",")}`
}
