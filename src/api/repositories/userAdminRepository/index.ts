import { query as q } from 'faunadb';
import { fauna } from '../../../lib/clients/fauna';
import { UserAdmin } from '../../../data/model/UserAdmin';
import { ReturnFaunaDBInEXPR } from '../../../data/model/Api/FaunaDB';

class UserAdminRepository {

    private readonly colletion = 'users_admin';

    public async get_by_email(email: string): Promise<ReturnFaunaDBInEXPR<UserAdmin>> {
        const user = await fauna.query<ReturnFaunaDBInEXPR<UserAdmin>>(
            q.Get(
                q.Match(q.Index('get_user_by_email'), email)
            )
        ).then((res: ReturnFaunaDBInEXPR<UserAdmin>) => res).catch(err => err);
        
        return user;
    }
}

export { UserAdminRepository }