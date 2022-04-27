import { GuestsModel } from '../../data/model/Guests';
import AppError from '../errors/typeErrors/AppError';
import { GuestsRepository } from '../repositories/guestsRepository';
import UploadFileService from './UploadFileService';
import { Files } from "formidable";
import { HandleMessageResponse } from '../../data/model/Api/HandleMessageModel';

class SubscribeService {
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
            const guest = await this.guestsRepository.queryGetGuests(this.guest.phone);
            if (!guest.data) {
                throw new AppError("Convidado não localizado", 404);
            };
            if (guest?.data?.presenceAtTheEvent) {
                return this.handleMessage("Convidado já confirmou sua participação.", guest.data, 208);
            }
            const fileName = Object.keys(this.file).toString();
            const uploadFileService = new UploadFileService(this.file, fileName);
            const path = await uploadFileService.execute();
            this.guest.urlVaccineCard = path;
            const updateGuest = await this.guestsRepository.queryUpdateGuest(this.guest, guest.ref.id);
            if (!updateGuest.data) {
                throw new AppError("Falha ao atualizar informações do convidado.", 500);
            };
            return this.handleMessage("Atualização realizada com sucesso.", updateGuest?.data, 200);
        } catch (error) {
            const err: AppError = error;
            throw new AppError(err?.message , err?.statusCode);
        }
    }
}

export { SubscribeService };
