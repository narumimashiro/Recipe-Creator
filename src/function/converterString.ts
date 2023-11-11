/**
 * 改行文字を置換
 */

export const converterNewLine = (text: string) => {
  return text.replace(/(\r\n|\n|\r)/g, '%%')
}

export const converterUrlEncode = (text: string) => {
  return text.replace(/%%/g, '\n')
}