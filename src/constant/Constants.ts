import { TableName } from "../domain/model/TableName"

export const APP_NAME = "dbflute-schema-ex"

export const getShowButtonId = (tableName: TableName): string => {
  return `${tableName.value}${SHOW_BUTTON_ID_SUFFIX}`
}

export const getDialogId = (tableName: TableName): string => {
  return `${tableName.value}${DIALOG_ID_SUFFIX}`
}

export const getTextareaId = (tableName: TableName): string => {
  return `${tableName.value}${TEXTAREA_ID_SUFFIX}`
}

export const getCloseButtonId = (tableName: TableName): string => {
  return `${tableName.value}${CLOSE_BUTTON_ID_SUFFIX}`
}
export const getCopyButtonId = (tableName: TableName): string => {
  return `${tableName.value}${COPY_BUTTON_ID_SUFFIX}`
}

export const SHOW_BUTTON_ID_SUFFIX = "_show_sql_button"
export const DIALOG_ID_SUFFIX = "_show_sql_dialog"
export const TEXTAREA_ID_SUFFIX = "_show_sql_textarea"
export const COPY_BUTTON_ID_SUFFIX = "_show_sql_copy_button"
export const CLOSE_BUTTON_ID_SUFFIX = "_show_sql_close_button"

export const INJECT_HTML_REPLACE_SHOW_BUTTON_ID = "SHOW_BUTTON_ID"
export const INJECT_HTML_REPLACE_DIALOG_ID = "DIALOG_ID"
export const INJECT_HTML_REPLACE_TEXTAREA_ID = "TEXTAREA_ID"
export const INJECT_HTML_REPLACE_COPY_BUTTON_ID = "COPY_BUTTON_ID"
export const INJECT_HTML_REPLACE_CLOSE_BUTTON_ID = "CLOSE_BUTTON_ID"

export const SHOW_BUTTON_CLS = `${APP_NAME}_show_button`
export const DIALOG_CLS = `${APP_NAME}_dialog`
export const DIALOG_INNER_CLS = `${APP_NAME}_dialog_inner`
export const TEXTAREA_CLS = `${APP_NAME}_textarea`
export const DIALOG_BUTTONS_WRAPPER_CLS = `${APP_NAME}_dialog-buttons-wrapper`
export const COPY_BUTTON_CLS = `${APP_NAME}_copy-button`
export const CLOSE_BUTTON_CLS = `${APP_NAME}_close-button`

export const SYSTEM_STATUS_ID = `${APP_NAME}_system-status`
