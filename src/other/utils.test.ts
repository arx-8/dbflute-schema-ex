import { greet } from "./utils"

test("sample", () => {
  expect(greet("taro")).toStrictEqual("hello taro")
})
