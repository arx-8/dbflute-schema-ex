import { convertToAliasName, convertToSql } from "./SqlUtils"

describe("convertToSql", () => {
  test("カラムが1個のパターン", () => {
    const result = convertToSql("member", ["member_id"])
    expect(result).toEqual(`\
SELECT
  m.member_id
FROM
  member AS m
--     LEFT OUTER JOIN xxx AS x
--       on m.xxx = x.xxx
-- WHERE
-- ORDER BY
LIMIT 100
;`)
  })

  test("カラムが2個のパターン", () => {
    const result = convertToSql("member", ["member_id", "member_name"])
    expect(result).toEqual(`\
SELECT
  m.member_id,
  m.member_name
FROM
  member AS m
--     LEFT OUTER JOIN xxx AS x
--       on m.xxx = x.xxx
-- WHERE
-- ORDER BY
LIMIT 100
;`)
  })

  test("カラムが3個、テーブル名のエイリアスが2文字以上になるパターン", () => {
    const result = convertToSql("any_table_name", [
      "pppp_id",
      "pppp_name",
      "pppp_account",
    ])
    expect(result).toEqual(`\
SELECT
  atn.pppp_id,
  atn.pppp_name,
  atn.pppp_account
FROM
  any_table_name AS atn
--     LEFT OUTER JOIN xxx AS x
--       on atn.xxx = x.xxx
-- WHERE
-- ORDER BY
LIMIT 100
;`)
  })
})

describe("convertToAliasName", () => {
  test("_を含まないパターン", () => {
    // ## Arrange ##
    const tableName = "purchase"
    // ## Act ##
    const result = convertToAliasName(tableName)
    // ## Assert ##
    expect(result).toEqual("p")
  })

  test("_を1つ含むパターン", () => {
    // ## Arrange ##
    const tableName = "service_rank"
    // ## Act ##
    const result = convertToAliasName(tableName)
    // ## Assert ##
    expect(result).toEqual("sr")
  })

  test("_を2つ以上含むパターン", () => {
    // ## Arrange ##
    const tableName = "a_a_b_b_b_c"
    // ## Act ##
    const result = convertToAliasName(tableName)
    // ## Assert ##
    expect(result).toEqual("aabbbc")
  })

  test("特殊なテーブル名のパターン: 先頭に_", () => {
    // ## Arrange ##
    const tableName = "_table_name"
    // ## Act ##
    const result = convertToAliasName(tableName)
    // ## Assert ##
    expect(result).toEqual("tn")
  })

  test("特殊なテーブル名のパターン: 末尾に_", () => {
    // ## Arrange ##
    const tableName = "table_name_"
    // ## Act ##
    const result = convertToAliasName(tableName)
    // ## Assert ##
    expect(result).toEqual("tn")
  })

  test("特殊なテーブル名のパターン: _の連続あり", () => {
    // ## Arrange ##
    const tableName = "long__table_______name"
    // ## Act ##
    const result = convertToAliasName(tableName)
    // ## Assert ##
    expect(result).toEqual("ltn")
  })
})
