import axios from "../pages/utile/request.js";

export const $login=(params)=>{
    axios.get('Admin/Login',{params})
}