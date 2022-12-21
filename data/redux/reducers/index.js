import { combineReducers } from "redux"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducers
import authReducer from "./auth/authReducer";


const rootReducer = combineReducers({
    user: persistReducer({ key: "user", storage }, authReducer)
});
// export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
