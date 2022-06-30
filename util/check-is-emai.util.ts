export const checkIsEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}
