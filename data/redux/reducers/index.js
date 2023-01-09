import { combineReducers } from "redux"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


// Reducers
import authReducer from "./auth/authReducer";
import faqReducer from "./faq/faqReducer";


const rootReducer = combineReducers({
    user: persistReducer({ key: "user", storage }, authReducer),
    question: persistReducer({key:"question", storage}, faqReducer)
});
export default rootReducer;
