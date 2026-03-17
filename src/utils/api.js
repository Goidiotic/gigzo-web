import axios from "../Axios";

export const fetchWalletBalance = async ()=>{
    try{
        const response = await axios.get('/getWalletBalance');
        //Return =>Balance
        return response.data.balance;

    }catch(error){
        throw new Error(error.response?.data?.message || 'Error fetching wallet balance');
    }
}

export const fetchUID = async ()=>{
    try{

        const response = await axios.get('/getUID');

        return response.data.uid;

    }catch(err){
        throw new Error(err.response?.data?.message || 'Error fetching UID');
    }
}