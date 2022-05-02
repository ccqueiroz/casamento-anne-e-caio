import { Expr, query as q } from 'faunadb';
import { fauna } from '../../../lib/clients/fauna';
import { GuestsFaunaDB, GuestsModel } from '../../../data/model/Guests';
import { ReturnFaunaDBInEXPR } from '../../../data/model/Api/FaunaDB';

class GuestsRepository {
    private readonly colletion = 'guests';

    public async queryGetAllGuests() {
        const guests = await fauna.query<Expr>(
            q.Map(
                q.Paginate(
                    q.Match(q.Index("get_all_guests"))
                ),
                q.Lambda("X", q.Get(q.Var("X")))
            )
        ).then((res) => res).catch(err => err);
        if (guests?.data) {
            return guests?.data?.map((guest: ReturnFaunaDBInEXPR) => guest?.data)
        }
        return [];
    }

    //getByPhone
    public async queryGetGuestByPhone(phone: string): Promise<GuestsFaunaDB> {
        const guest = await fauna.query<GuestsFaunaDB>(
            q.Get(q.Match(
                q.Index('guests_by_phone'), phone
            ))
        ).then((res: GuestsFaunaDB) => res).catch(err => err);
        
        return guest;
    }

    //create
    public async queryCreateGuest(dataBody: GuestsModel): Promise<GuestsFaunaDB> {
        const guest = await fauna.query<GuestsFaunaDB>(
            q.Create(q.Collection(this.colletion), {data: {...dataBody}})
        ).then((res: GuestsFaunaDB ) => res).catch(err => err);
        
        return guest;
    }

    //getRef 
    public async queryGetRefGuest(phone: string): Promise<GuestsFaunaDB> {
        const ref = await fauna.query<GuestsFaunaDB>(
            q.Select(
                'ref', q.Get(q.Match(q.Index('guests_by_phone'), phone))
            )
        ).then((res: GuestsFaunaDB ) => res).catch(err => err);
        
        return ref;
    }

    //update
    public async queryUpdateGuest(dataBody: GuestsModel, guest_ref_id: string): Promise<GuestsFaunaDB> {
        const guest = await fauna.query<GuestsFaunaDB>(
            q.Update(
                q.Ref(q.Collection(this.colletion), guest_ref_id),
                {
                    data: {...dataBody}
                }
            )
        ).then((res: GuestsFaunaDB ) => res).catch(err => err);
        
        return guest;
    }
}

export { GuestsRepository };