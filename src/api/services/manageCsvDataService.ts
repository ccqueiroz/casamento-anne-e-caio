import { Files } from "formidable";
import {  DataGuests } from "../../data/model/Api/ConvertCSVToJSONModel";
import { GuestsModel } from "../../data/model/Guests";
import { handleErrors } from "../errors/handleErrors";
import AppError from "../errors/typeErrors/AppError";
import { GuestsRepository } from "../repositories/guestsRepository";
import { ConvertCSVToJSONService } from "./ConvertCSVToJSONService";

class ManageCsvDataService {

    constructor(private file: Files, private guestsRepository: GuestsRepository) { };

    public async execute() {
        try {
            const fileName = Object.keys(this.file).toString();
            const guestsPhones = (await this.guestsRepository.queryGetAllGuests())?.map((guest: GuestsModel) => guest.phone);
            const convertCSVToJSON: Array<GuestsModel> = await new ConvertCSVToJSONService<DataGuests>(this.file, fileName).execute();
            if (convertCSVToJSON.length === 0) {
                return [];
            }
            for (let i = 0; i < convertCSVToJSON.length; i++){
                const guestAlreadyExist = guestsPhones?.find(
                    (phone: string) => phone === convertCSVToJSON[i].phone
                )
                if (guestAlreadyExist) {
                    break;
                }
                await this.guestsRepository.queryCreateGuest(convertCSVToJSON[i]);
            }
            return convertCSVToJSON;

        } catch (error) {
            const err = handleErrors(error);
            throw new AppError(err.message , err.statusCode);
        }
    }
}

export { ManageCsvDataService }