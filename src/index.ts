import {
  extractSystemStatus,
  extractTableNameList,
  injectButtonDoms,
  injectSystemHtml,
  isValidAppTarget,
} from "./data/DomRepository"
import { showButtonHtml } from "./presentation/ShowButton"
import { systemHtml } from "./presentation/SystemHtml"
import { debugLog } from "./util/Logger"

const main = (): void => {
  if (!isValidAppTarget()) {
    // dbflute schema html以外で実行された場合は、何もせず終了
    debugLog("NOP. Cause: No schema html or Invalid.")
    return
  }

  if (extractSystemStatus() === "INJECTED") {
    // 既に実行済みの場合、何もせず終了
    debugLog("NOP. Cause: Already injected.")
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
