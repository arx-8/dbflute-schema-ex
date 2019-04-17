import {
  getCloseButtonId,
  getCopyButtonId,
  getDialogId,
  getShowButtonId,
  getTextareaId,
  INJECT_HTML_REPLACE_CLOSE_BUTTON_ID,
  INJECT_HTML_REPLACE_COPY_BUTTON_ID,
  INJECT_HTML_REPLACE_DIALOG_ID,
  INJECT_HTML_REPLACE_SHOW_BUTTON_ID,
  INJECT_HTML_REPLACE_TEXTAREA_ID,
  SYSTEM_STATUS_ID,
} from "../../constant/Constants"
import {
  getSelectColumnsQuery,
  SELECT_TABLE_NAME_QUERY,
} from "../../constant/SchemaHtml"
import { ColumnName } from "../../domain/model/ColumnName"
import { TableName } from "../../domain/model/TableName"
import { showButtonHtml } from "../../presentation/ShowButton"
import { systemHtml } from "../../presentation/SystemHtml"
import { HTMLString, SystemStatus } from "../../type/UtilTypes"
import { convertToSql } from "../../util/SqlUtils"
import {
  exQuerySelectorStrict,
  querySelector,
  querySelectorAll,
  querySelectorStrict,
} from "../QuerySelector"
import { getDocument } from "../QuerySelector/Document"

/**
 * DOMアクセス全般を書く
 */

/**
 * dbflute-shcema-htmlなら必ず存在するDOMの存在チェックで、このAppの対象かどうか判定
 */
export const isValidAppTarget = (): boolean => {
  const elm = querySelectorAll(SELECT_TABLE_NAME_QUERY)
  return elm.length > 0
}

export const extractSystemStatus = (): SystemStatus => {
  const statusElm = querySelector(`#${SYSTEM_STATUS_ID}`)
  if (statusElm == null) {
    return "NONE"
  }
  if (statusElm.textContent == null) {
    return "NONE"
  }
  if (statusElm.textContent.trim() === "INJECTED") {
    return "INJECTED"
  }
  return "NONE"
}

/**
 * このAppのhtmlを生成し、DOMへ注入する
 * (Service/Controller層に書くべきだが、面倒なのでとりあえずここに実装)
 */
export const injectApp = (): void => {
  // table名取り出す
  const tableNameList = extractTableNameList()

  // このアプリの管理に必要なhtmlを注入
  injectSystemHtml(systemHtml)

  // 各table定義にbuttonを注入
  injectButtonDoms(showButtonHtml, tableNameList)
}

const extractTableNameList = (): ReadonlyArray<TableName> => {
  return querySelectorAll(SELECT_TABLE_NAME_QUERY).map((elm) => {
    if (elm.textContent == null) {
      throw new Error("elm.textContent は必ず存在するはず")
    }
    return new TableName(elm.textContent.trim())
  })
}

const injectSystemHtml = (html: HTMLString): void => {
  const injWrapper = getDocument().createElement("div")
  injWrapper.innerHTML = html.value
  querySelectorStrict("body").appendChild(injWrapper)
}

const injectButtonDoms = (
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
        `#${INJECT_HTML_REPLACE_SHOW_BUTTON_ID}`,
      ) as HTMLButtonElement
      button.id = getShowButtonId(tableName)
      button.onclick = createShowSqlBtnEvent(tableName)
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
    {
      const closeButton = exQuerySelectorStrict(
        injWrapper,
        `#${INJECT_HTML_REPLACE_CLOSE_BUTTON_ID}`,
      ) as HTMLButtonElement
      closeButton.id = getCloseButtonId(tableName)
      closeButton.onclick = createCloseBtnEvent(tableName)
    }
    {
      const copyButton = exQuerySelectorStrict(
        injWrapper,
        `#${INJECT_HTML_REPLACE_COPY_BUTTON_ID}`,
      ) as HTMLButtonElement
      copyButton.id = getCopyButtonId(tableName)
      copyButton.onclick = createCopyBtnEvent(tableName)
    }

    const targetId = `#${tableName.value}`
    querySelectorStrict(targetId).appendChild(injWrapper)
  })
}

const createShowSqlBtnEvent = (tableName: TableName): (() => void) => {
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

const createCloseBtnEvent = (tableName: TableName): (() => void) => {
  return () => {
    // モーダルを閉じる
    const modal = querySelectorStrict(
      `#${getDialogId(tableName)}`,
    ) as HTMLDialogElement
    modal.close()
  }
}

const createCopyBtnEvent = (tableName: TableName): (() => void) => {
  return () => {
    const textarea = querySelectorStrict(
      `#${getTextareaId(tableName)}`,
    ) as HTMLTextAreaElement
    textarea.select()
    getDocument().execCommand("copy")
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

/**
 * スキーマ名を返す。
 * Schema HTMLに埋まってる decomment 用 JavaScript を利用させてもらっている。
 * そのため、予告なく壊れる可能性の高い実装である。
 */
export const getSchemaName = (): string | null => {
  const { DecommentUtil } = window as any

  if (
    DecommentUtil == null ||
    typeof DecommentUtil !== "object" ||
    DecommentUtil.getSchemaName == null ||
    typeof DecommentUtil.getSchemaName !== "function"
  ) {
    return null
  }

  return DecommentUtil.getSchemaName()
}
