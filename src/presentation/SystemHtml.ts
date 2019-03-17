import {
  DIALOG_CLS,
  SYSTEM_STATUS_ID,
  TEXTAREA_CLS,
} from "../constant/Constants"
import { HTMLString } from "../type/UtilTypes"

/**
 * 1度だけ注入するhtml
 * このアプリを管理するための値やcss
 */
export const systemHtml: HTMLString = {
  value: `
<style>
.${DIALOG_CLS} {
  padding: 8px;
  border: 0;
  border-radius: 0.6rem;
  box-shadow: 0 0 1em black;
}
.${TEXTAREA_CLS} {
  width: 400px;
  height: 300px;
}
#${SYSTEM_STATUS_ID} {
  display: none;
}
</style>

<div id="${SYSTEM_STATUS_ID}">
  INJECTED
<div>
  `,
  type: "HTMLString",
}
