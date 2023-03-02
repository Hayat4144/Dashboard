import { REMOVEUSERDETAILS, USERDETAILS } from "../actions/ActionsType";

const initailState = {
    data: []
}


const UserReducer = (state = initailState, action) => {
    switch (action.type) {
        case USERDETAILS:
            return { ...state, data: action.payload }
        case REMOVEUSERDETAILS:
            return { ...state, data: [] }
        default:
            return state;
    }
}


export default UserReducer;