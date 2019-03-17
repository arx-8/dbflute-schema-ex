import {
  getButtonId,
  getDialogId,
  getTextareaId,
  INJECT_HTML_REPLACE_BUTTON_ID,
  INJECT_HTML_REPLACE_DIALOG_ID,
  INJECT_HTML_REPLACE_TEXTAREA_ID,
} from "../constant/Constants"
import { TableName } from "../domain/TableName"
import { HTMLString } from "../type/UtilTypes"
import { querySelectorAll, querySelectorStrict } from "./QuerySelector"
import { getDocument } from "./QuerySelector/Document"

/**
 * DOMアクセス全般を書く
 */

export const extractTableNameList = (): ReadonlyArray<TableName> => {
  return querySelectorAll("#table-list-body td.namecell").map((elm) => {
    if (elm.textContent == null) {
      throw new Error("elm.textContent は必ず存在するはず")
    }
    return new TableName(elm.textContent.trim())
  })
}

export const injectButtonDom = (
  baseHtml: HTMLString,
  targetTableNameList: ReadonlyArray<TableName>,
): void => {
  targetTableNameList.forEach((tableName) => {
    const injWrapper = getDocument().createElement("span")
    injWrapper.innerHTML = baseHtml.value

    // IDとイベントの付与
    {
      const button = injWrapper.querySelector(
        `#${INJECT_HTML_REPLACE_BUTTON_ID}`,
      ) as HTMLButtonElement
      button.id = getButtonId(tableName)
      button.onclick = createClickEvent(tableName)
    }
    {
      const dialog = injWrapper.querySelector(
        `#${INJECT_HTML_REPLACE_DIALOG_ID}`,
      ) as HTMLDialogElement
      dialog.id = getDialogId(tableName)
    }
    {
      const textarea = injWrapper.querySelector(
        `#${INJECT_HTML_REPLACE_TEXTAREA_ID}`,
      ) as HTMLTextAreaElement
      textarea.id = getTextareaId(tableName)
    }

    const targetId = `#${tableName.value}`
    querySelectorStrict(targetId).appendChild(injWrapper)
  })
}

const createClickEvent = (tableName: TableName): (() => void) => {
  return () => {
    // TODO
    // - テーブル自身のカラムを取り出す
    // - それらをSELECT文に構築する
    // - モーダル表示する
    // - モーダル内のtextareaに、SELECT文を表示する
    console.log(tableName.value)
  }
}
