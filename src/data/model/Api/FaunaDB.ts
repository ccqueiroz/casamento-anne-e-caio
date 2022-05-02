import { Expr } from 'faunadb';
import { GuestsModel } from './../Guests/index';
export type ReturnFaunaDBInEXPR = {
    ref: Expr,
    ts: number,
    data: GuestsModel
}