export const getStringDate = (date: Date, s = '-'): string => {
  return `${date.getFullYear()}${s}${date.getMonth() + 1}${s}${date.getDate()}`
}
