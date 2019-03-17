import { convertToAliasName, convertToSql } from "./SqlUtils"

describe("convertToSql", () => {
  test("カラムが1個のパターン", () => {
    const result = convertToSql("member", ["member_id"])
    expect(result).toEqual(`\
SELECT
  m.member_id
FROM
  member AS m
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
})
