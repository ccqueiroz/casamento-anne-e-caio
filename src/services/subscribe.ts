import { HandleMessageResponse } from "../data/model/Api/HandleMessageModel";
import { api } from "../lib/clients/api";


const API_PATH = '/subscribe';

const subscribe = async (body: FormData) => {
    const { data } = await api.put<HandleMessageResponse>(API_PATH, body);
    return data;
}

export const actionService = {
    subscribe
};