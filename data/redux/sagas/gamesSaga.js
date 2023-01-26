
import { toast } from "react-toastify";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { setGamesRequest } from "../actions";
import { GameModel } from "../../models";
import {GET_GAMES} from '../../constatants'

//
//GAMES
//

function* watchGetGamesRequest(){
    try {
		const res = yield call(
			GameModel.getGames
		);
		if (res.message !== 'success') {
			toast.error(res.message);
			return;
		}  
        yield put(setGamesRequest(res.data));
	} catch (e) {
		toast('Server side error, kindly check your internet', { hideProgressBar: true, autoClose: 1000, type: 'error', position:'top-center',className:"toast-message" })
	}
}

export function* watchGamesSagas() {
	yield all([
		takeLatest(GET_GAMES, watchGetGamesRequest),
       
	]);
}
