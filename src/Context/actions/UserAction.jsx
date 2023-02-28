import { REMOVEUSERDETAILS, USERDETAILS } from "./ActionsType"


export const UserAction = (payload)=>{
    return {
        type: USERDETAILS,
        payload
    }
}

export const RemoveUserAction = ()=>{
    return {
        type:REMOVEUSERDETAILS
    }
}