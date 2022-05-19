import { GuestsModel } from '../../data/model/Guests';
import AppError from '../errors/typeErrors/AppError';
import { GuestsRepository } from '../repositories/guestsRepository';
import { HandleMessageResponse } from '../../data/model/Api/HandleMessageModel';
import { handleErrors } from '../errors/handleErrors';
import { DeleteFileService } from './DeleteFileService';

class DeleteGuestService {
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
            if (!guest.data) {
                throw new AppError("Convidado não localizado", 404);
            };
            const hasFile = guest?.data?.urlVaccineCard;
            if (hasFile) {
                await new DeleteFileService(hasFile?.split('s3.amazonaws.com/')[1]).execute();
            }
            const deleteGuest = await this.guestsRepository.queryDeleteGuest(this.guest?.phone);
            if (!deleteGuest.data) {
                throw new AppError("Falha ao deletar o convidado.", 500);
            };
            return this.handleMessage("Convidado removido da Lista de Casamento", deleteGuest?.data, 200);
        } catch (error) {
            const err = handleErrors(error);
            throw new AppError(err.message , err.statusCode);
        }
    }
}

export { DeleteGuestService };
