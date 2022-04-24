import { Client } from 'faunadb';

export const fauna = new Client({
    secret: String(process.env.FAUNA_ADMIN_KEY),
    domain: "db.fauna.com",
});