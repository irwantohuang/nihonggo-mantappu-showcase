export interface Data {
    name: String,
    age: number
}

export const initData = (): Data => {
    return {
        name: '',
        age: 0,
    }
}