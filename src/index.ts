import {
  extractSystemStatus,
  extractTableNameList,
  injectButtonDoms,
  injectSystemHtml,
} from "./data/DomRepository"
import { showButtonHtml } from "./presentation/ShowButton"
import { systemHtml } from "./presentation/SystemHtml"
import { debugLog } from "./util/Logger"

const main = (): void => {
  if (extractSystemStatus() === "INJECTED") {
    // 既に実行済みの場合、何もせず終了
    debugLog("NOP")
    return
  }

  // table名取り出す
  const tableNameList = extractTableNameList()

  // このアプリの管理に必要なhtmlを注入
  injectSystemHtml(systemHtml)

  // 各table定義にbuttonを注入
  injectButtonDoms(showButtonHtml, tableNameList)

  debugLog("injected")
}

// entry point
main()
