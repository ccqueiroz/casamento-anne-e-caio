import { UserModel } from "../User";

export type HandleMessageResponse = {
    message: string,
    guest: UserModel,
    code: number
}