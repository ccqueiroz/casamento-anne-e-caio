import { UserModel } from "../data/model/User";
import { api } from "../lib/clients/api";


const API_PATH = '/subscribe';

const subscribe = async (body: FormData) => {
    const { data } = await api.put<UserModel>(API_PATH, body);
    return data;
}

export const actionService = {
    subscribe
};