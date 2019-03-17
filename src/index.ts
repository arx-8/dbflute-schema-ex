import { extractTableNameList, injectButtonDom } from "./data/DomRepository"
import { showButtonHtml } from "./presentation/ShowButton"

const main = (): void => {
  // table名取り出す
  const tableNameList = extractTableNameList()

  // 各table定義にbuttonを追加する
  injectButtonDom(showButtonHtml, tableNameList)
}

// entry point
main()
