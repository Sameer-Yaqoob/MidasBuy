import { all } from "redux-saga/effects";
import { watchAuthSagas } from "./authSaga";
import {watchGamesSagas} from "./gamesSaga"
import {watchPromotionsSagas} from "./promotionsSaga"
import { watchProductsSagas } from "./productSaga";


export default function* rootSaga() {
    yield all([
        watchAuthSagas(),
        watchGamesSagas(),
        watchPromotionsSagas(),
        watchProductsSagas()
    ]);
}
