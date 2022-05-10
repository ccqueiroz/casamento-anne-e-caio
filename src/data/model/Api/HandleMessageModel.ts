import { GuestsModel } from "../Guests";

export type HandleMessageResponse<T = GuestsModel> = {
    message: string,
    guest: T,
    code: number
}