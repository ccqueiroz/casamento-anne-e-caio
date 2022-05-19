import { HandleMessageResponse } from "../data/model/Api/HandleMessageModel";
import { api } from "../lib/clients/api";


const API_PATH = '/dashboard';

const guestsList = async () => {
    const { data } = await api.get<HandleMessageResponse>(`${API_PATH}/guest-list`);
    return data;
}

const createGuest = async (body: FormData) => {
    const { data } = await api.post<HandleMessageResponse>(`${API_PATH}/create-guest`, body);
    return data;
}

export const actionDashboard = {
    guestsList,
    createGuest
};