import { TableName } from "../domain/TableName"

export const getButtonId = (tableName: TableName): string => {
  return `${tableName.value}${BUTTON_ID_SUFFIX}`
}

export const getDialogId = (tableName: TableName): string => {
  return `${tableName.value}${DIALOG_ID_SUFFIX}`
}

export const getTextareaId = (tableName: TableName): string => {
  return `${tableName.value}${TEXTAREA_ID_SUFFIX}`
}

export const BUTTON_ID_SUFFIX = "_show_sql_button"
export const DIALOG_ID_SUFFIX = "_show_sql_dialog"
export const TEXTAREA_ID_SUFFIX = "_show_sql_textarea"

export const INJECT_HTML_REPLACE_BUTTON_ID = "BUTTON_ID"
export const INJECT_HTML_REPLACE_DIALOG_ID = "DIALOG_ID"
export const INJECT_HTML_REPLACE_TEXTAREA_ID = "TEXTAREA_ID"
