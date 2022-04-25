import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { GuestsFaunaDB, UserModel } from '../../../data/model/User';

class GuestsRepository {
    private readonly colletion = 'guests';

    //get
    public async queryGetGuests(phone: string): Promise<GuestsFaunaDB> {
        const guest = await fauna.query<GuestsFaunaDB>(
            q.Get(q.Match(
                q.Index('guests_by_phone'), phone
            ))
        ).then((res: GuestsFaunaDB) => res).catch(err => err);
        
        return guest;
    }

    //create
    public async queryCreateGuest(dataBody: UserModel): Promise<GuestsFaunaDB> {
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
    public async queryUpdateGuest(dataBody: UserModel, guest_ref_id: string): Promise<GuestsFaunaDB> {
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