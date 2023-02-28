import { REMOVEUSERDETAILS, USERDETAILS } from "../actions/ActionsType";

const initailState = {
    data: null
}


const UserReducer = (state = initailState, action) => {
    switch (action) {
        case USERDETAILS:
            return { ...state, data: action.payload }
        case REMOVEUSERDETAILS:
            return { ...state, data: null }
        default:
            return state;
    }
}


export default UserReducer;