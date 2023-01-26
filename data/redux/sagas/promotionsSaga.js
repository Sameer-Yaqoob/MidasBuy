
import { toast } from "react-toastify";
import { all, takeLatest, put, call } from "redux-saga/effects";
import {setPromotionsRequest } from "../actions";
import { PromotionsModel } from "../../models";
import {GET_PROMOTIONS} from '../../constatants'

//
//GAMES
//

function* watchGetPromotionsRequest(){
    try {
		const res = yield call(
			PromotionsModel.getPromotions
		);
		if (res.message !== 'success') {
			toast.error(res.message);
			return;
		}  
        yield put(setPromotionsRequest(res.data));
	} catch (e) {
		toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
	}
}

export function* watchPromotionsSagas() {
	yield all([
		takeLatest(GET_PROMOTIONS, watchGetPromotionsRequest),
       
	]);
}
