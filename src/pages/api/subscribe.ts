import { NextApiRequestModels, NextApiResponseModels } from '../../api/client/models/nextHTTPModels';
import { handleErrors } from '../../api/errors/handleErrors';
import { GuestsRepository } from '../../api/repositories/guestsRepository';
import { SubscribeService } from '../../api/services/SubscribeService';
import nextConnect from 'next-connect';
import parseMultiPartyForm from '../../api/middlewares/multipartyFormMiddleware';

const controllerSubscrible = nextConnect();

controllerSubscrible
    .use(parseMultiPartyForm)
    .put(async (request: NextApiRequestModels, response: NextApiResponseModels) => {
    if (request.method === 'PUT') {
        try {
            const { email, presenceAtTheEvent, phone } = request.body;
            const { files } = request;
            const guestRepository = new GuestsRepository();
            const guestService = new SubscribeService(guestRepository, { email, presenceAtTheEvent, phone }, files);
            const guestResponse = await guestService.execute();
            return response.status(guestResponse.code).json(guestResponse);
        } catch (error) {
            const err = handleErrors(error);
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

export default controllerSubscrible;
