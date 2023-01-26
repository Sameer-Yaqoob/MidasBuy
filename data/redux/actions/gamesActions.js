
import { GET_GAMES,SET_GAMES } from "../../constatants";
export const getGamesRequest = () => ({
    type: GET_GAMES,
});

export const setGamesRequest = (payload) => ({
    type: SET_GAMES,
    payload
});