import { convertToSql } from "./SqlUtils"

test("1個のパターン", () => {
  const result = convertToSql("member", ["member_id"])
  expect(result).toEqual(
    `SELECT
  member_id
FROM
  member
;`,
  )
})

test("2個のパターン", () => {
  const result = convertToSql("member", ["member_id", "member_name"])
  expect(result).toEqual(
    `SELECT
  member_id,
  member_name
FROM
  member
;`,
  )
})

test("3個のパターン", () => {
  const result = convertToSql("pppp", ["pppp_id", "pppp_name", "pppp_account"])
  expect(result).toEqual(
    `SELECT
  pppp_id,
  pppp_name,
  pppp_account
FROM
  pppp
;`,
  )
})
