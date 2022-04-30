import { NextApiRequestModels, NextApiResponseModels } from '../client/models/nextHTTPModels';
import NextCors from 'nextjs-cors';

export default async function corsMiddleware(request: NextApiRequestModels, response: NextApiResponseModels, next: any) {
   await NextCors(request, response, {
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });
    next();
} 

// export default function initMiddleware(middleware: any) {
//   return (request: NextApiRequestModels, response: NextApiResponseModels) =>
//     new Promise((resolve, reject) => {
//       middleware(request, response, (result:any) => {
//         if (result instanceof Error) {
//           return reject(result)
//         }
//         return resolve(result)
//       })
//     })
// }