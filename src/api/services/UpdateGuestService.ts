import { GuestsModel } from '../../data/model/Guests';
import AppError from '../errors/typeErrors/AppError';
import { GuestsRepository } from '../repositories/guestsRepository';
import UploadFileService from './UploadFileService';
import { Files } from "formidable";
import { HandleMessageResponse } from '../../data/model/Api/HandleMessageModel';
import { handleErrors } from '../errors/handleErrors';
import { DeleteFileService } from './DeleteFileService';

class UpdateGuestService {
    constructor(
        private guestsRepository: GuestsRepository,
        private guest: GuestsModel,
        private file: Files
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
            if (this.guest.presenceAtTheEvent === 'N') {
                const hasFiles = guest?.data?.urlVaccineCard;
                if (hasFiles) {
                    await new DeleteFileService(hasFiles?.split('s3.amazonaws.com/')[1]).execute();
                }
                this.guest.urlVaccineCard = '';
                const updateGuest = await this.guestsRepository.queryUpdateGuest(this.guest, guest.ref.id);
                return this.handleMessage("Atualização realizada com sucesso.", updateGuest?.data, 200);
            }
            const fileName = Object.keys(this.file).toString();
            if (Object.keys(this.file).length > 0) {
                const uploadFileService = new UploadFileService(this.file, fileName);
                const path = await uploadFileService.execute();
                this.guest.urlVaccineCard = path;
            }
            const updateGuest = await this.guestsRepository.queryUpdateGuest(this.guest, guest.ref.id);
            if (!updateGuest.data) {
                throw new AppError("Falha ao atualizar informações do convidado.", 500);
            };
            return this.handleMessage("Atualização realizada com sucesso.", updateGuest?.data, 200);
        } catch (error) {
            const err = handleErrors(error);
            throw new AppError(err.message , err.statusCode);
        }
    }
}

export { UpdateGuestService };
