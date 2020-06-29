export interface CacheStore {
  delete: (key: string) => void
  insert: (key: string, value: any) => void
  replace: (key: string, value: any) => void
}
