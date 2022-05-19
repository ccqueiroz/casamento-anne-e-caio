import nextConnect from "next-connect";
import { NextApiRequestModels, NextApiResponseModels } from "../../../api/client/models/nextHTTPModels";
import { handleErrors } from "../../../api/errors/handleErrors";
import corsMiddleware from "../../../api/middlewares/corsMiddleware";
import { GuestsRepository } from "../../../api/repositories/guestsRepository";
import { GetGuestsService } from "../../../api/services/GetGuestsService";

const controllGuestList = nextConnect();
controllGuestList
    .use(corsMiddleware)
    .get(async (request: NextApiRequestModels, response: NextApiResponseModels) => {
        if (request.method === 'GET') {
            try {
                const guestRepository = new GuestsRepository();
                const guestsService = await (new GetGuestsService(guestRepository).execute());
                return response.status(guestsService?.code).json(guestsService);
            } catch (error) {
                const err = handleErrors(error);
                console.error(err)
                return response.status(err.statusCode).json({ data: err.message });
            }
        } else {
            response.setHeader('allow', 'PUT');
            response.status(405).end('Method not allowed');
        }
    })

export default controllGuestList;