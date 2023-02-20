import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { SIGNIN } from "../Context/actions/ActionsType";
import { toastifyoption } from "./Notification";
import { useSearchParams } from "react-router-dom";



const Decodejwt = (message) => {
    const dispatch = useDispatch();
const navigate = useNavigate();
const searchParams = useSearchParams(); 
    const jwt_token = Cookies.get('jwt_token');
    if (jwt_token) return toast.error('Token is invalid', toastifyoption) ;
    const decode_token = jwtDecode(jwt_token) ;
    if(decode_token){
        dispatch({type:SIGNIN})
        toast.success(message,toastifyoption)
        searchParams.get("next")
        ? navigate(searchParams.get("next"))
        : navigate("/");
        return;
    }
    toast.error(message,toastifyoption)

}

export default Decodejwt ;