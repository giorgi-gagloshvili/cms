export const dateFactory = (date) => {
  if (!date) {
    return
  }
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const dd = day < 10 ? "0" + day : day
  const mm = month < 10 ? "0" + month : month

  return `${dd}-${mm}-${year}`
}
