import type { IToDo } from '@/types'
import { defineStore } from 'pinia'
import api from '@/api/localStorage'

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
        getData() {
            this.items = api.get('items') || []
            this.filter = api.get('filter') || 'all'
        },
        addItem(item: IToDo) {
            this.items.push(item)
            api.set('items', this.items)
        },
        editItem(data: Partial<IToDo>) {
            const item = this.items.find((item) => item.id === data.id)
            if (item) {
                for (const key in data) {
                    item[key] = data[key];
                }
                api.set('items', this.items)
            }
        },
        removeItem(id: number) {
            this.items = this.items.filter((item) => item.id !== id)
            api.set('items', this.items)
        },
        setCompleted(id: number, completed: boolean) {
            const item = this.items.find((item) => item.id === id)
            if (item) {
                item.completed = completed
                api.set('items', this.items)
            }
        },
        toggleItem(id: number) {
            this.setCompleted(id, !this.items.find((item) => item.id === id)?.completed)
        },
        setFilter(filter: string) {
            this.filter = filter
            api.set('filter', filter)
        }
    }
})
