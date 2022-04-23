import {NextApiRequest , NextApiResponse} from 'next';

const controllerSubscrible =  async (request: NextApiRequest, response: NextApiResponse) =>  {

    // if(request.method === 'POST'){
    //     try{
    //         const {session:{user}} = request.body;
    //         const customerRepository = new CustomerRepository();
    //         const stripeCustomer = await new CreateOrListCustomers(
    //             stripe,
    //             user,
    //             customerRepository
    //         ).execute();
    //         const stripeCheckoutSession = await stripe.checkout.sessions.create({
    //             customer: stripeCustomer.id,
    //             payment_method_types: ['card'],
    //             billing_address_collection: 'required',
    //             line_items: [{
    //                 price: process.env.STRIPE_PRICE_API_KEY,
    //                 quantity:1
    //             }],
    //             mode: 'subscription',
    //             allow_promotion_codes: true,
    //             success_url:process.env.STRIPE_SUCCESS_URL,
    //             cancel_url: process.env.STRIPE_CANCEL_URL
    //         });
    //         return response.status(200).json({sessionId: stripeCheckoutSession.id});
    //     }catch(error){
    //         const err = handleErrors(error);
    //         return response.status(error.statusCode ?? 500).json({data: err.description ?? err.message});
    //     }
    // }else{
    //     response.setHeader('allow', 'POST');
    //     response.status(405).end('Method not allowed');
    // }
}

export default controllerSubscrible;