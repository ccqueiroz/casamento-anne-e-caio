import nextConnect from 'next-connect';
import { NextApiRequestModels, NextApiResponseModels } from '../../../../api/client/models/nextHTTPModels';
import { handleErrors } from '../../../../api/errors/handleErrors';
import corsMiddleware from '../../../../api/middlewares/corsMiddleware';
import parseMultiPartyForm from '../../../../api/middlewares/multipartyFormMiddleware';
import { ManageCsvDataService } from '../../../../api/services/manageCsvDataService';

const controllerUploadWeddingList = nextConnect();
controllerUploadWeddingList
    .use(corsMiddleware)
    .use(parseMultiPartyForm)
    .post(async (request: NextApiRequestModels, response: NextApiResponseModels) => {
    if (request.method === 'POST') {
        try {
            const { files } = request;
            const convertCSVTOJSON = await new ManageCsvDataService(files).execute();
            return response.status(200).json({data:'ok'});
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

export default controllerUploadWeddingList;
