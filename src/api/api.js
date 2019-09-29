//import axios from 'axios';
import axios from '../common/js/axiosUtils'

let base = '';

//登录
export const requestLogin = params => { return axios.post(`${base}/login`, params); };
