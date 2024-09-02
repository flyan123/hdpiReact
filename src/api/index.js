import axios from "../pages/utile/request.js";

export const $login=async (params)=>{
    let {data} = await axios.get('Admin/Login',{params})
}