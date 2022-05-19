import { NextApiRequestModels, NextApiResponseModels } from '../../../api/client/models/nextHTTPModels';
import { handleErrors } from '../../../api/errors/handleErrors';
import { GuestsRepository } from '../../../api/repositories/guestsRepository';
import nextConnect from 'next-connect';
import parseMultiPartyForm from '../../../api/middlewares/multipartyFormMiddleware';
import corsMiddleware from '../../../api/middlewares/corsMiddleware';
import { UpdateGuestService } from '../../../api/services/UpdateGuestService';

const controllerUpdateGuest = nextConnect();
controllerUpdateGuest
    .use(corsMiddleware)
    .use(parseMultiPartyForm)
    .put(async (request: NextApiRequestModels, response: NextApiResponseModels) => {
    if (request.method === 'PUT') {
        try {
            const { email, presenceAtTheEvent, phone } = request.body;
            const { files } = request;
            const guestRepository = new GuestsRepository();
            const guestService = new UpdateGuestService(guestRepository, { email, presenceAtTheEvent, phone }, files);
            const guestResponse = await guestService.execute();
            return response.status(guestResponse.code).json(guestResponse);
        } catch (error) {
            const err = handleErrors(error);
            console.error(err)
            return response.status(err.statusCode).json({ data: err.message });
        }
    } else {
        response.setHeader('allow', 'PUT');
        response.status(405).end('Method not allowed');
    }
});


export const config = {
  api: {
    bodyParser: false,
  },
}

export default controllerUpdateGuest;
