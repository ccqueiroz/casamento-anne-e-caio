export type ReturnFaunaDBInEXPR<T> = {
    ref: {
        id: string
    },
    ts: number,
    data: T
}