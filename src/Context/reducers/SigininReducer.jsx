import { LOGOUT, SIGNIN } from "../actions/ActionsType";

const initialstate = {
    IsLogdin: false,
}

const SigninReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SIGNIN:
            return { ...state, IsLogdin: true };
        case LOGOUT:
            return { ...state, IsLogdin: false };
        default:
            return state;
    }
}

export default SigninReducer;