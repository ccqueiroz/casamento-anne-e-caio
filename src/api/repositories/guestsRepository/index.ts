import { Expr, query as q } from 'faunadb';
import { fauna } from '../../../lib/clients/fauna';
import { GuestsModel } from '../../../data/model/Guests';
import { ReturnFaunaDBInEXPR } from '../../../data/model/Api/FaunaDB';

class GuestsRepository {
    private readonly colletion = 'guests';

    public async queryGetAllGuests(size: number = 50) {
        const guests = await fauna.query<Expr>(
            q.Map(
                q.Paginate(
                    q.Match(q.Index("get_all_guests")),{ size }
                ),
                q.Lambda((x) => q.Get(x))
            )
        ).then((res) => res).catch(err => err);
        if (guests?.data) {
            return guests?.data?.map((guest: ReturnFaunaDBInEXPR<GuestsModel>) => guest?.data)
        }
        return [];
    }

    //getByPhone
    public async queryGetGuestByPhone(phone: string): Promise<ReturnFaunaDBInEXPR<GuestsModel>> {
        const guest = await fauna.query<ReturnFaunaDBInEXPR<GuestsModel>>(
            q.Get(q.Match(
                q.Index('guests_by_phone'), phone
            ))
        ).then((res: ReturnFaunaDBInEXPR<GuestsModel>) => res).catch(err => err);
        
        return guest;
    }

    //create
    public async queryCreateGuest(dataBody: GuestsModel): Promise<ReturnFaunaDBInEXPR<GuestsModel>> {
        const guest = await fauna.query<ReturnFaunaDBInEXPR<GuestsModel>>(
            q.Create(q.Collection(this.colletion), {data: {...dataBody}})
        ).then((res: ReturnFaunaDBInEXPR<GuestsModel> ) => res).catch(err => err);
        
        return guest;
    }

    //getRef 
    public async queryGetRefGuest(phone: string): Promise<ReturnFaunaDBInEXPR<GuestsModel>> {
        const ref = await fauna.query<ReturnFaunaDBInEXPR<GuestsModel>>(
            q.Select(
                'ref', q.Get(q.Match(q.Index('guests_by_phone'), phone))
            )
        ).then((res: ReturnFaunaDBInEXPR<GuestsModel> ) => res).catch(err => err);
        
        return ref;
    }

    //update
    public async queryUpdateGuest(dataBody: GuestsModel, guest_ref_id: string): Promise<ReturnFaunaDBInEXPR<GuestsModel>> {
        const guest = await fauna.query<ReturnFaunaDBInEXPR<GuestsModel>>(
            q.Update(
                q.Ref(q.Collection(this.colletion), guest_ref_id),
                {
                    data: {...dataBody}
                }
            )
        ).then((res: ReturnFaunaDBInEXPR<GuestsModel> ) => res).catch(err => err);
        
        return guest;
    }

    //delete
    public async queryDeleteGuest(phone: string) {
        const guest = await fauna.query<ReturnFaunaDBInEXPR<GuestsModel>>(
            q.Delete(
                q.Select('ref', q.Get(q.Match(q.Index('guests_by_phone'), phone)))
            )
        ).then((res: ReturnFaunaDBInEXPR<GuestsModel>) => res).catch(err => err);
        
        return guest;
    }
}

export { GuestsRepository };