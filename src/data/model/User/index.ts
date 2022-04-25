import { FileWithPreview } from "../Files";

export interface UserModel {
    id?: string,
    name?: string,
    email?: string,
    phone?: string,
    presenceAtTheEvent?: string
    vaccineCard?: FileWithPreview
}

export type GuestsFaunaDB = {
    ref: {
        id: string,
    };
    ts: number | string;
    data: UserModel
}