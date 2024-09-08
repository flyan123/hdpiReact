import axios from "../pages/utile/request.js";
import md5 from "md5";

export const $login=async (params)=>{
    params.loginPwd=md5(md5(params.loginPwd).split('').reverse().join(''))
    let {data} = await axios.get('Admin/Login',{params})
    if(data.success){
        sessionStorage.setItem('token',data.token)

    }
    return data
}