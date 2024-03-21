import type { IToDo } from '@/types'
import { defineStore } from 'pinia'

interface IState {
    items: IToDo[]
    filter: string
}

export const useItemsStore = defineStore('myStore', {
    state: () =>
        ({
            items: [],
            filter: 'all'
        }) as IState,
    actions: {
        addItem(item: IToDo) {
            this.items.push(item)
        },
        removeItem(id: number) {
            this.items = this.items.filter((item) => item.id !== id)
        },
        toggleItem(id: number) {
            const item = this.items.find((item) => item.id === id)
            if (item) {
                item.completed = !item.completed
            }
        },
        setFilter(filter: string) {
            this.filter = filter
        }
    }
})
