import * as DomRepository from "."
import { createMockDocumentBy } from "../../__test__/Helper"
import * as Document from "../QuerySelector/Document"
import { testHtml } from "./index.test.data"

describe("DomRepository tests", () => {
  let sut: typeof DomRepository
  // let mockDocument: jest.MockInstance<typeof Document>
  let mockDocument: typeof Document

  beforeAll(() => {
    // ## Arrange ##
    jest.mock("../QuerySelector/Document")

    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    mockDocument = require("../QuerySelector/Document")
    // mock化しているため、mockReturnValueは必ず存在する
    // 型の書き方が不明なため、any castしている
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(mockDocument as any).getDocument.mockReturnValue(
      createMockDocumentBy(testHtml),
    )

    // eslint-disable-next-line global-require
    sut = require(".")
  })

  describe("whole process", () => {
    test("inject Before/After", () => {
      // Before inject
      // ## Assert ##
      expect(sut.isValidAppTarget()).toEqual(true)
      expect(sut.extractSystemStatus()).toEqual("NONE")

      // ## Act ##
      sut.injectApp()

      // After inject
      // ## Assert ##
      expect(sut.isValidAppTarget()).toEqual(true)
      expect(sut.extractSystemStatus()).toEqual("INJECTED")
      // bodyは必ず1つ存在するため、[0]
      expect(
        mockDocument.getDocument().getElementsByTagName("body")[0].innerHTML,
      ).toMatchSnapshot()
    })
  })
})
