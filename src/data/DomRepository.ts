import {
  getButtonId,
  getDialogId,
  getTextareaId,
  INJECT_HTML_REPLACE_BUTTON_ID,
  INJECT_HTML_REPLACE_DIALOG_ID,
  INJECT_HTML_REPLACE_TEXTAREA_ID,
  SYSTEM_STATUS_ID,
} from "../constant/Constants"
import {
  getSelectColumnsQuery,
  SELECT_TABLE_NAME_QUERY,
} from "../constant/SchemaHtml"
import { ColumnName } from "../domain/ColumnName"
import { TableName } from "../domain/TableName"
import { HTMLString, SystemStatus } from "../type/UtilTypes"
import { convertToSql } from "../util/SqlUtils"
import {
  exQuerySelectorStrict,
  querySelector,
  querySelectorAll,
  querySelectorStrict,
} from "./QuerySelector"
import { getDocument } from "./QuerySelector/Document"

/**
 * DOMアクセス全般を書く
 */

export const extractSystemStatus = (): SystemStatus => {
  const statusElm = querySelector(SYSTEM_STATUS_ID)
  if (statusElm == null) {
    return "NONE"
  }
  if (statusElm.textContent === "INJECTED") {
    return "INJECTED"
  }
  return "NONE"
}

export const extractTableNameList = (): ReadonlyArray<TableName> => {
  return querySelectorAll(SELECT_TABLE_NAME_QUERY).map((elm) => {
    if (elm.textContent == null) {
      throw new Error("elm.textContent は必ず存在するはず")
    }
    return new TableName(elm.textContent.trim())
  })
}

export const injectSystemHtml = (html: HTMLString): void => {
  const injWrapper = getDocument().createElement("div")
  injWrapper.innerHTML = html.value
  querySelectorStrict("body").appendChild(injWrapper)
}

export const injectButtonDoms = (
  baseHtml: HTMLString,
  targetTableNameList: ReadonlyArray<TableName>,
): void => {
  targetTableNameList.forEach((tableName) => {
    const injWrapper = getDocument().createElement("span")
    injWrapper.innerHTML = baseHtml.value

    // IDとイベントの付与
    {
      const button = exQuerySelectorStrict(
        injWrapper,
        `#${INJECT_HTML_REPLACE_BUTTON_ID}`,
      ) as HTMLButtonElement
      button.id = getButtonId(tableName)
      button.onclick = createClickEvent(tableName)
    }
    {
      const dialog = exQuerySelectorStrict(
        injWrapper,
        `#${INJECT_HTML_REPLACE_DIALOG_ID}`,
      ) as HTMLDialogElement
      dialog.id = getDialogId(tableName)
    }
    {
      const textarea = exQuerySelectorStrict(
        injWrapper,
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
    // テーブル自身のカラムを取り出す
    const colList = extractTableColumnList(tableName)

    // それらをSELECT文に構築する
    const sql = convertToSql(tableName.value, colList.map((c) => c.value))

    // モーダル内のtextareaに、SELECT文を表示する
    {
      const textarea = querySelectorStrict(
        `#${getTextareaId(tableName)}`,
      ) as HTMLTextAreaElement
      textarea.value = sql
    }

    // モーダル表示する
    {
      const modal = querySelectorStrict(
        `#${getDialogId(tableName)}`,
      ) as HTMLDialogElement
      modal.show()
    }
  }
}

const extractTableColumnList = (
  tableName: TableName,
): ReadonlyArray<ColumnName> => {
  return querySelectorAll(getSelectColumnsQuery(tableName)).map((elm) => {
    if (elm.textContent == null) {
      throw new Error("elm.textContent は必ず存在するはず")
    }
    return new ColumnName(elm.textContent)
  })
}
