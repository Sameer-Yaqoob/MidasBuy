import { combineReducers } from "redux"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


// Reducers
import authReducer from "./auth/authReducer";
import faqReducer from "./faq/faqReducer";
import gamesReducer from "./games/gameReducer";
import productReducer from "./products/productReducer";
import promotionsReducer from "./promotions/promotionsReducer";


const rootReducer = combineReducers({
    user: persistReducer({ key: "user", storage }, authReducer),
    question: persistReducer({key:"question", storage}, faqReducer),
    games: persistReducer({key:"games", storage}, gamesReducer),
    promotions: persistReducer({key:"promotions", storage}, promotionsReducer),
    products: persistReducer({key:"products", storage}, productReducer)
});
export default rootReducer;
