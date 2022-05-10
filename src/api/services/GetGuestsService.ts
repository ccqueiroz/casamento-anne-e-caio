import { HandleMessageResponse } from "../../data/model/Api/HandleMessageModel";
import { GuestsModel } from "../../data/model/Guests";
import { handleMessage } from "../../data/utils/handleMessageResponse";
import { handleErrors } from "../errors/handleErrors";
import AppError from "../errors/typeErrors/AppError";
import { GuestsRepository } from "../repositories/guestsRepository"

class GetGuestsService {
    
    constructor(private guestsRepository: GuestsRepository, private id?: string | undefined) {}
    private handleMessage = handleMessage
    
    public async execute(): Promise<HandleMessageResponse<Array<GuestsModel>>> {
        if (!this.id) {
            try {
                const guests = await this.guestsRepository.queryGetAllGuests(300);
                return this.handleMessage<Array<GuestsModel>>("Atualização realizada com sucesso.", guests, 200);
            } catch (error) {
                const err = handleErrors(error);
                throw new AppError(err.message , err.statusCode);
            }
        } else {
            return this.handleMessage<Array<GuestsModel>>("Atualização realizada com sucesso.", [], 200);
        }
    }
}

export { GetGuestsService }