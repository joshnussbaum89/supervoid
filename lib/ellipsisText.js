/**
 * Returns truncated version of text with ellipsis appended
 * @param {string} text ex/ "Text to be truncated"
 * @param {number} maxLength Max length of string
 * @returns "Text to be truncted..."
 */
export function ellipsisText(text, maxLength) {
  const subText = text.substring(0, maxLength)
  const lastChar = subText[maxLength - 1]
  return lastChar !== ' '
    ? `${subText}...`
    : `${subText.substring(0, maxLength - 1)}...`
}
