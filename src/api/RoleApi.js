import axios from "../pages/utile/request.js";

// 角色列表
export const $list = async()=>{
    let {data}=await axios.get('Role/List')
    return data
}