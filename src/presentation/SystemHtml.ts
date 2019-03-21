import {
  CLOSE_BUTTON_CLS,
  COPY_BUTTON_CLS,
  DIALOG_BUTTONS_WRAPPER_CLS,
  DIALOG_CLS,
  DIALOG_INNER_CLS,
  SHOW_BUTTON_CLS,
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
  margin-left: 16px;
  padding: 0px 8px 8px 8px;
  border: 0;
  border-radius: 0.6rem;
  box-shadow: 0 0 1em black;
}
.${DIALOG_INNER_CLS} {
  display: flex;
  flex-direction: column;
}
.${TEXTAREA_CLS} {
  width: 400px;
  height: 300px;
}
#${SYSTEM_STATUS_ID} {
  display: none;
}
.${DIALOG_BUTTONS_WRAPPER_CLS} {
  text-align: right;
  padding-bottom: 4px;
}
.${SHOW_BUTTON_CLS},
.${COPY_BUTTON_CLS},
.${CLOSE_BUTTON_CLS} {
  border-radius: 3px;
  border: 1px solid #bbb;
  box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
  cursor: pointer;
  overflow: visible;
  padding: 4px 8px;
  background-color: #cefff1;
}
.${CLOSE_BUTTON_CLS} {
  background-color: #ffc2c6;
}
</style>

<div id="${SYSTEM_STATUS_ID}">
  INJECTED
<div>
  `,
  type: "HTMLString",
}
