import {
  extractSystemStatus,
  injectApp,
  isValidAppTarget,
} from "./data/DomRepository"
import { debugLog } from "./util/Logger"

const main = (): void => {
  if (!isValidAppTarget()) {
    // dbflute schema html以外で実行された場合は、何もせず終了
    alert(`No operation.

[Reason] No schema html or Invalid.`)
    return
  }

  if (extractSystemStatus() === "INJECTED") {
    // 既に実行済みの場合、何もせず終了
    alert(`No operation.

[Reason] Already executed.`)
    return
  }

  injectApp()

  debugLog("injected")
}

// entry point
main()
