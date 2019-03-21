import { APP_NAME } from "../constant/Constants"

export const debugLog = (text: string): void => {
  // eslint-disable-next-line no-console
  console.log(`${APP_NAME} debug log: ${text}`)
}
