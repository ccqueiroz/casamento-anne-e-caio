import { NextApiRequestModels, NextApiResponseModels } from '../../../api/client/models/nextHTTPModels';
import { handleErrors } from '../../../api/errors/handleErrors';
import { GuestsRepository } from '../../../api/repositories/guestsRepository';
import nextConnect from 'next-connect';
import parseMultiPartyForm from '../../../api/middlewares/multipartyFormMiddleware';
import corsMiddleware from '../../../api/middlewares/corsMiddleware';
import { CreateGuestService } from '../../../api/services/CreateGuestService';

const controllerCreatedGuest = nextConnect();
controllerCreatedGuest
    .use(corsMiddleware)
    .use(parseMultiPartyForm)
    .post(async (request: NextApiRequestModels, response: NextApiResponseModels) => {
    if (request.method === 'POST') {
        try {
            const { name, phone } = request.body;
            const guestRepository = new GuestsRepository();
            const guestService = new CreateGuestService(guestRepository, { name, phone });
            const guestResponse = await guestService.execute();
            return response.status(guestResponse.code).json(guestResponse);
        } catch (error) {
            const err = handleErrors(error);
            console.error(err)
            return response.status(err.statusCode).json({ data: err.message });
        }
    } else {
        response.setHeader('allow', 'POST');
        response.status(405).end('Method not allowed');
    }
});


export const config = {
  api: {
    bodyParser: false,
  },
}

export default controllerCreatedGuest;
