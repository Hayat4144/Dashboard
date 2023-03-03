import { CREATEADDRESS } from "./ActionsType"


export const AddressAction = (payload) => {
    return {
        type: CREATEADDRESS,
        payload
    }
}