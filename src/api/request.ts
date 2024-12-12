import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2/',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})

export function getRequest<T>(endpoint: string, params?: Record<string, any>) {
  return async (): Promise<T | null> => {
    try {
      const response = await api.get<T>(endpoint, { params })
      return response.data
    } catch (error: any) {
      console.error(`GET request to ${endpoint} failed:`, error.message)
      throw error
    }
  }
}
