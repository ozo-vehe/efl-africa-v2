import { defineStore } from 'pinia'

interface Container {
  id: number
  name: string
  description: string
  created_at: string
  updated_at: string
}

export const useContainerStore = defineStore('container', {
  state: () => ({
    containers: [] as Container[],
    container: {} as Container,
  }),
  actions: {
    async fetchContainers(bl_number: string) {
      console.log(bl_number)
    },
  },
})
