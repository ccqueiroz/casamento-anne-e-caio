import { FileWithPreview } from "../Files";

export interface GuestsModel {
    id?: string,
    name?: string,
    email: string,
    phone: string,
    presenceAtTheEvent: string
    vaccineCard?: FileWithPreview
    urlVaccineCard?: string
}

export type GuestsFaunaDB = {
    ref: {
        id: string,
    };
    ts: number | string;
    data: GuestsModel
}