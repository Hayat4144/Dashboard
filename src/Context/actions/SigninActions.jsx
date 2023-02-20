import { LOGOUT, SIGNIN } from "./ActionsType"

export const SigninAction = () => {
    return {
        type: SIGNIN
    }
}

export const LogoutAction = ()=>{
    return {
        type:LOGOUT
    }
}