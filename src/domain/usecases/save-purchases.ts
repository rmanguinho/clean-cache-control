export interface SavePurchases {
  save: (purchases: Array<SavePurchases.Params>) => Promise<void>
}

namespace SavePurchases {
  export type Params = {
    id: string
    date: Date
    value: number
  }
}
