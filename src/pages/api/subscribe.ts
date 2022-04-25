import {NextApiRequest , NextApiResponse} from 'next';
import { handleErrors } from '../../api/errors/handleErrors';
import { GuestsRepository } from '../../api/repositories/guestsRepository';

const controllerSubscrible =  async (request: NextApiRequest, response: NextApiResponse) =>  {
    if(request.method === 'PUT'){
        try{
            const { session:{ user } } = request.body;
            const customerRepository = new GuestsRepository();
            
            
            return response.status(200).json({});
        }catch(error){
            const err = handleErrors(error);
            return response.status(error.statusCode ?? 500).json({data: err.description ?? err.message});
        }
    }else{
        response.setHeader('allow', 'PUT');
        response.status(405).end('Method not allowed');
    }
}

export default controllerSubscrible;