export interface CacheStore {
  fetch: (key: string) => void
  delete: (key: string) => void
  insert: (key: string, value: any) => void
  replace: (key: string, value: any) => void
}
