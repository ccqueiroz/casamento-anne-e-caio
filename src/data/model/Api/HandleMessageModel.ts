import { GuestsModel } from "../Guests";

export type HandleMessageResponse = {
    message: string,
    guest: GuestsModel,
    code: number
}