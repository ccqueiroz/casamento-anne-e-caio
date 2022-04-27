import { GuestsModel } from "../Guests";

export type GuestResponseModal = {
    statusCode?: number;
    message?: string;
    guest?: GuestsModel
}