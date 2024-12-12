export type PokemonState = {
  cards: PokemonCard[]
  savedCards: string[]
  loading: boolean
  page: number
}

export type PokemonCard = {
  id: string
  name: string
  supertype: string
  subtypes: Array<string>
  level?: string
  hp: string
  types: Array<string>
  evolvesFrom?: string
  abilities?: Array<{
    name: string
    text: string
    type: string
  }>
  attacks?: Array<{
    cost: Array<string>
    name: string
    text: string
    damage: string
    convertedEnergyCost: number
  }>
  weaknesses?: Array<{
    type: string
    value: string
  }>
  resistances?: Array<{
    type: string
    value: string
  }>
  retreatCost?: Array<string>
  convertedRetreatCost?: number
  set: {
    id: string
    name: string
    series: string
    printedTotal: number
    total: number
    legalities: {
      unlimited: string
      expanded?: string
    }
    ptcgoCode?: string
    releaseDate: string
    updatedAt: string
    images: {
      symbol: string
      logo: string
    }
  }
  number: string
  artist: string
  rarity?: string
  flavorText?: string
  nationalPokedexNumbers: Array<number>
  legalities: {
    unlimited: string
    expanded?: string
  }
  images: {
    small: string
    large: string
  }
  tcgplayer?: {
    url: string
    updatedAt: string
    prices?: {
      holofoil?: {
        low: number
        mid: number
        high: number
        market: number
        directLow?: number
      }
      '1stEditionHolofoil'?: {
        low: number
        mid: number
        high: number
        market?: number
        directLow?: number
      }
      unlimitedHolofoil?: {
        low: number
        mid: number
        high: number
        market: number
        directLow?: number
      }
      normal?: {
        low: number
        mid: number
        high: number
        market?: number
        directLow?: number
      }
      reverseHolofoil?: {
        low: number
        mid: number
        high: number
        market: number
        directLow?: number
      }
    }
  }
  cardmarket?: {
    url: string
    updatedAt: string
    prices: {
      averageSellPrice: number
      lowPrice: number
      trendPrice: number
      germanProLow: number
      suggestedPrice: number
      reverseHoloSell: number
      reverseHoloLow: number
      reverseHoloTrend: number
      lowPriceExPlus: number
      avg1: number
      avg7: number
      avg30: number
      reverseHoloAvg1: number
      reverseHoloAvg7: number
      reverseHoloAvg30: number
    }
  }
  evolvesTo?: Array<string>
  rules?: Array<string>
  regulationMark?: string
}
