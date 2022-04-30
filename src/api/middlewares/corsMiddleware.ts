import { NextApiRequestModels, NextApiResponseModels } from '../client/models/nextHTTPModels';

export default async function corsMiddleware(request: NextApiRequestModels, response: NextApiResponseModels, next: any) {
    response.setHeader('Access-Control-Allow-Credentials', "true");
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, PUT, GET');
    response.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    if (request.method === 'OPTIONS') {
       return response.status(200).end();
    }
    next();
} 