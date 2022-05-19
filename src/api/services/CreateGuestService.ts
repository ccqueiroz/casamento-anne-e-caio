import { GuestsModel } from '../../data/model/Guests';
import AppError from '../errors/typeErrors/AppError';
import { GuestsRepository } from '../repositories/guestsRepository';
import { HandleMessageResponse } from '../../data/model/Api/HandleMessageModel';
import { handleErrors } from '../errors/handleErrors';

class CreateGuestService {
    constructor(
        private guestsRepository: GuestsRepository,
        private guest: GuestsModel,
    ) { }
    
    private handleMessage(message: string, guest: GuestsModel, code: number): HandleMessageResponse {
        return {
            message,
            guest,
            code
        }
    }

    public async execute(): Promise<HandleMessageResponse> {
        try {
            const guest = await this.guestsRepository.queryGetGuestByPhone(this.guest.phone);
            if (guest.data) {
                throw new AppError("Convidado já possui registro", 404);
            };
            const createdGuest = await this.guestsRepository.queryCreateGuest(this.guest);
            if (!createdGuest.data) {
                throw new AppError("Falha ao atualizar informações do convidado.", 500);
            };
            return this.handleMessage("Atualização realizada com sucesso.", createdGuest?.data, 200);
        } catch (error) {
            const err = handleErrors(error);
            throw new AppError(err.message , err.statusCode);
        }
    }
}

export { CreateGuestService };
