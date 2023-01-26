
import { GET_PROMOTIONS,SET_PROMOTIONS } from "../../constatants";

export const getPromotionsRequest = () => ({
    type: GET_PROMOTIONS,
});

export const setPromotionsRequest = (payload) => ({
    type: SET_PROMOTIONS,
    payload
});