
import { GET_PRODUCTS,SET_PRODUCTS } from "../../constatants";

export const getProductRequest = () => ({
    type: GET_PRODUCTS,
});

export const setProductRequest = (payload) => ({
    type: SET_PRODUCTS,
    payload
});