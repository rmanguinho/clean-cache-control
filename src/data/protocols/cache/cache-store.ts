export interface CacheStore {
  fetch: (key: string) => any
  delete: (key: string) => void
  insert: (key: string, value: any) => void
  replace: (key: string, value: any) => void
}
