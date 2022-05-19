import { NextApiRequestModels, NextApiResponseModels } from '../../../api/client/models/nextHTTPModels';
import { handleErrors } from '../../../api/errors/handleErrors';
import { GuestsRepository } from '../../../api/repositories/guestsRepository';
import nextConnect from 'next-connect';
import corsMiddleware from '../../../api/middlewares/corsMiddleware';
import { DeleteGuestService } from '../../../api/services/DeleteGuestService';

const controllerDeleteGuest = nextConnect();
controllerDeleteGuest
    .use(corsMiddleware)
    .delete(async (request: NextApiRequestModels, response: NextApiResponseModels) => {
    if (request.method === 'DELETE') {
        try {
            const { phone } = request.query;
            const guestRepository = new GuestsRepository();
            const guestService = new DeleteGuestService(guestRepository, { phone: String(phone) });
            const guestResponse = await guestService.execute();
            return response.status(guestResponse.code).json(guestResponse);
        } catch (error) {
            const err = handleErrors(error);
            console.error(err)
            return response.status(err.statusCode).json({ data: err.message });
        }
    } else {
        response.setHeader('allow', 'DELETE');
        response.status(405).end('Method not allowed');
    }
});

export default controllerDeleteGuest;
