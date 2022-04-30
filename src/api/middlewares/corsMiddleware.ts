import { NextApiRequestModels, NextApiResponseModels } from '../client/models/nextHTTPModels';
import NextCors from 'nextjs-cors';

export default async function corsMiddleware(request: NextApiRequestModels, response: NextApiResponseModels, next: any) {
   await NextCors(request, response, {
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: 'https://casamentoanneecaio.com',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });
    next();
} 