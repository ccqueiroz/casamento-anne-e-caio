import { HandleMessageResponse } from "../data/model/Api/HandleMessageModel";
import { GuestsModel } from "../data/model/Guests";
import { api } from "../lib/clients/api";


const API_PATH = '/dashboard';

const guestsList = async () => {
    const { data } = await api.get<HandleMessageResponse<Array<GuestsModel>>>(`${API_PATH}/guest-list`);
    return data;
}

const createGuest = async (body: FormData) => {
    const { data } = await api.post<HandleMessageResponse>(`${API_PATH}/create-guest`, body);
    return data;
}

const updateGuest = async (body: FormData) => {
    const { data } = await api.put<HandleMessageResponse>(`${API_PATH}/update-guest`, body);
    return data;
}

export const actionDashboard = {
    guestsList,
    createGuest,
    updateGuest
};