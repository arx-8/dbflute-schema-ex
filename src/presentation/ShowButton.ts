import {
  BUTTON_CLS,
  CLOSE_BUTTON_WRAPPER_CLS,
  DIALOG_CLS,
  DIALOG_INNER_CLS,
  INJECT_HTML_REPLACE_BUTTON_ID,
  INJECT_HTML_REPLACE_CLOSE_BUTTON_ID,
  INJECT_HTML_REPLACE_DIALOG_ID,
  INJECT_HTML_REPLACE_TEXTAREA_ID,
  TEXTAREA_CLS,
} from "../constant/Constants"
import { HTMLString } from "../type/UtilTypes"

/**
 * 各button
 */
export const showButtonHtml: HTMLString = {
  value: `
<button id="${INJECT_HTML_REPLACE_BUTTON_ID}" class="${BUTTON_CLS}">
  Show SQL
</button>
<dialog id="${INJECT_HTML_REPLACE_DIALOG_ID}" class="${DIALOG_CLS}">
  <div class="${DIALOG_INNER_CLS}">
    <span class="${CLOSE_BUTTON_WRAPPER_CLS}">
      <button id="${INJECT_HTML_REPLACE_CLOSE_BUTTON_ID}">Close</button>
    </span>
    <textarea id="${INJECT_HTML_REPLACE_TEXTAREA_ID}" class="${TEXTAREA_CLS}"></textarea>
  </div>
</dialog>
`,
  type: "HTMLString",
}
