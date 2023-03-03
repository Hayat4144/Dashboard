import { CREATEADDRESS, REMOVEADDRESS } from "../actions/ActionsType";

const initialstate = {
    seller_address: []
}

const address_reducer = (state = initialstate, action) => {
    switch (action.type) {
        case CREATEADDRESS:
            return {
                ...state, seller_address: action.payload
            }
        case REMOVEADDRESS:
            return { ...state, seller_address: [] }
        default:
            return state;
    }
}

export default address_reducer;