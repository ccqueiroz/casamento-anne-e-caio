import { GuestsModel } from "../Guests";
import { UserAdmin } from "../UserAdmin";

export type SessionProps<T = GuestsModel> = {
    user: UserAdmin,
    expires: string,
    data: T
}
