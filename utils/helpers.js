export const MEMOCARD_KEY = 'MEMOCARD::DB'

export const uuid = () => {
  return Math.random().toString(36).substr(-8)
}
