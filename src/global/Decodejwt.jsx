import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { SIGNIN, USERDETAILS } from "../Context/actions/ActionsType";
import { toastifyoption } from "./Notification";




const Decodejwt = (message, dispatch, navigate, searchParams) => {
    const jwt_token = Cookies.get(`${import.meta.env.DEV ? 'token_dev' : 'jwt_token'}`);
    if (!jwt_token) return toast.error('Token is invalid', toastifyoption);
    const decode_token = jwtDecode(jwt_token);
    console.log(decode_token)
    if (decode_token) {
        dispatch({ type: SIGNIN })
        dispatch({ type: USERDETAILS, payload: decode_token })
        toast.success(message, toastifyoption)
        searchParams.get("next")
            ? navigate(searchParams.get("next"))
            : navigate("/");
        return;
    }
    toast.error(decode_token.message, toastifyoption)

}

export default Decodejwt;