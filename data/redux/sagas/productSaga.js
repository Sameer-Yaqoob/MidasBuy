
import { toast } from "react-toastify";
import { all, takeLatest, put, call } from "redux-saga/effects";
import {setProductRequest } from "../actions";
import { PromotionsModel } from "../../models";
import {GET_PRODUCTS} from '../../constatants'
import ProductModel from "../../models/ProductModel";

//
//GAMES
//

function* watchGetProductsRequest(){
    try {
		const res = yield call(
			ProductModel.getProduct
		);
		if (res.message !== 'success') {
			toast.error(res.message);
			return;
		}  
        yield put(setProductRequest(res.data));
	} catch (e) {
		toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
	}
}

export function* watchProductsSagas() {
	yield all([
		takeLatest(GET_PRODUCTS, watchGetProductsRequest),
       
	]);
}
