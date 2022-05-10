import { HandleMessageResponse } from "../model/Api/HandleMessageModel"
import { GuestsModel } from "../model/Guests"

export const handleMessage = <T = GuestsModel>(
    message: string,
    guest: T,
    code: number): HandleMessageResponse<T> => {
        return {
            message,
            guest,
            code
        }
}
