import { GuestsModel } from "../data/model/Guests";
import { api } from "../lib/clients/api";


const API_PATH = '/subscribe';

const subscribe = async (body: FormData) => {
    const { data } = await api.put<GuestsModel>(API_PATH, body);
    return data;
}

export const actionService = {
    subscribe
};