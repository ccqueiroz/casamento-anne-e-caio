import { Expr } from 'faunadb';
export type ReturnFaunaDBInEXPR<T> = {
    ref: Expr,
    ts: number,
    data: T
}