import API from './api.services';
import {URL_BASE} from './urls';

export const register = async (param) => {
  try{
    return await API.post(`${URL_BASE}/register`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}
