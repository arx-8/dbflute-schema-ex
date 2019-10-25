import {
  CLOSE_BUTTON_CLS,
  COPY_BUTTON_CLS,
  DIALOG_BUTTONS_WRAPPER_CLS,
  DIALOG_CLS,
  DIALOG_INNER_CLS,
  INJECT_HTML_REPLACE_CLOSE_BUTTON_ID,
  INJECT_HTML_REPLACE_COPY_BUTTON_ID,
  INJECT_HTML_REPLACE_DIALOG_ID,
  INJECT_HTML_REPLACE_SHOW_BUTTON_ID,
  INJECT_HTML_REPLACE_TEXTAREA_ID,
  SHOW_BUTTON_CLS,
  TEXTAREA_CLS,
} from "../constant/Constants"
import { HTMLString } from "../type/UtilTypes"

/**
 * 各button
 */
export const showButtonHtml = `
<button id="${INJECT_HTML_REPLACE_SHOW_BUTTON_ID}" class="${SHOW_BUTTON_CLS}">
  Show SQL
</button>
<dialog id="${INJECT_HTML_REPLACE_DIALOG_ID}" class="${DIALOG_CLS}">
  <div class="${DIALOG_INNER_CLS}">
    <span class="${DIALOG_BUTTONS_WRAPPER_CLS}">
      <button id="${INJECT_HTML_REPLACE_COPY_BUTTON_ID}" class="${COPY_BUTTON_CLS}">Copy</button>
      <button id="${INJECT_HTML_REPLACE_CLOSE_BUTTON_ID}" class="${CLOSE_BUTTON_CLS}">Close</button>
    </span>
    <textarea id="${INJECT_HTML_REPLACE_TEXTAREA_ID}" class="${TEXTAREA_CLS}"></textarea>
  </div>
</dialog>
` as HTMLString
