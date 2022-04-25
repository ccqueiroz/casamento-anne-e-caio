import { FileWithPreview } from "../Files";

export interface UserModel {
    name?: string,
    email?: string,
    phone?: string,
    presenceAtTheEvent?: string
    vaccineCard?: FileWithPreview
}