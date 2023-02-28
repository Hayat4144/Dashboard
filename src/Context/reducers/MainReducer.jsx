import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import SigninReducer from "./SigininReducer";
import UserReducer from "./UserReducer";


const MainReducer = combineReducers({
    Signin: SigninReducer,
    User:UserReducer,
})

const persistConfig = {
    key: 'Dashboard',
    storage,
};


const PersistReducer = persistReducer(persistConfig, MainReducer);
export default PersistReducer;