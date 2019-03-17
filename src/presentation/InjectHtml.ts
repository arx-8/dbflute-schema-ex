import {
  INJECT_HTML_REPLACE_BUTTON_ID,
  INJECT_HTML_REPLACE_DIALOG_ID,
  INJECT_HTML_REPLACE_TEXTAREA_ID,
} from "../constant/Constants"
import { HTMLString } from "../type/UtilTypes"

/**
 * 各button
 */
export const showButtonHtml: HTMLString = {
  value: `
<button id="${INJECT_HTML_REPLACE_BUTTON_ID}">
  Show SQL
</button>
<dialog id="${INJECT_HTML_REPLACE_DIALOG_ID}">
  <textarea id="${INJECT_HTML_REPLACE_TEXTAREA_ID}"></textarea>
</dialog>
`,
  type: "HTMLString",
}
