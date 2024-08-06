import BASE_URL from "./baseurl";
import { commonRequest } from "./commmonReq";


//get all users
export const getUsers=async()=>{
    return commonRequest('GET',`${BASE_URL}/api/users/getAllUsers`)
}

//add user
export const addNewUser = async (formData) => {
    return commonRequest('POST', `${BASE_URL}/api/users/addUser`, formData, true);
};