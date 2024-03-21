export default {
    get(key: string): any {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : null
    },
    set(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data))
    }
}
