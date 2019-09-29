//import axios from 'axios';
import axios from '../common/js/axiosUtils'

let base = '';

//商户登录
export const requestLogin = params => { return axios.post(`${base}/account/login`, params); };
//商户退出登录
export const requestLogout = params => { return axios.get(`${base}/account/logout?token=${params.token}`); };
//商户修改密码
export const modifyPwd = params => { return axios.post(`${base}/account/update?token=${localStorage.getItem('token')}`, params); };
//更新商户信息
export const updateUserInfo = params => { return axios.post(`${base}/enterprise/update?token=${localStorage.getItem('token')}`, params); };
//更新商户信息
export const uploadLogo = params => { return axios.post(`${base}/enterprise/upload?token=${localStorage.getItem('token')}`, params); };
//获取商户信息
export const getEnterpriseInfo = params => { return axios.post(`${base}/enterprise/detail?token=${localStorage.getItem('token')}`, params); };


//申请模板 无id代表新建 有id代表草稿提交模板 或者 修改不通过模板
export const registerTemplate = params => { return axios.post(`${base}/template/register?token=${localStorage.getItem('token')}`, params); };
//模板列表
export const getTemplateListPage = params => { return axios.post(`${base}/template/list?token=${localStorage.getItem('token')}`, params); };
//模板详情
export const getTemplateDetail = params => { return axios.post(`${base}/template/detail?token=${localStorage.getItem('token')}`, params); };
//删除模板
export const removeTemplate = params => { return axios.post(`${base}/template/delete`, params); };
//修改模板  未通过状态 提交后为待审批
export const changeTemplate = params => { return axios.post(`${base}/template/register?token=${localStorage.getItem('token')}`, params); };
//新建或者编辑模板  草稿状态 看是否传了templateId
export const editTemplate = params => { return axios.post(`${base}/template/saveDraft?token=${localStorage.getItem('token')}`, params); };
//删除草稿模板
export const removeDraft = params => { return axios.post(`${base}/template/deleteDraft?token=${localStorage.getItem('token')}`, params); };



//短信模板审批
export const reviewTemplate = params => { return axios.post(`${base}/template/review?token=${localStorage.getItem('token')}`, params); };
//短信模板更新
export const updateTemplate = params => { return axios.post(`${base}/template/update?token=${localStorage.getItem('token')}`, params); };
//商户注册
export const registerEnterprise = params => { return axios.post(`${base}/account/register`, params); };
//商户列表
export const getEnterpriseList = params => { return axios.post(`${base}/enterprise/list?token=${localStorage.getItem('token')}`, params); };
//商户详情
export const getEnterpriseDetail = params => { return axios.post(`${base}/enterprise/detail?token=${localStorage.getItem('token')}`, params); };
//编辑商户信息
export const updateEnterprise = params => { return axios.post(`${base}/enterprise/update?token=${localStorage.getItem('token')}`, params); };
//审批商户申请
export const reviewEnterprise = params => { return axios.post(`${base}/enterprise/review?token=${localStorage.getItem('token')}`, params); };

//查询所有省份
export const searchProvinces = params => { return axios.get(`${base}/account/getProviceList?random=${new Date().getTime()}`, params); };
//查询省份下城市
export const searchCitys = params => { return axios.get(`${base}/account/getCityList?random=${new Date().getTime()}`, params); };
//查询城市下区县
export const searchCountys = params => { return axios.get(`${base}/location/searchCountys/${params.cityId}?random=${new Date().getTime()}`, params); };
//查询所有行业
export const searchIndustrys = params => { return axios.get(`${base}/account/getIndustryList?random=${new Date().getTime()}`, params); };
//获取手机验证码
export const getForecode = params => { return axios.post(`${base}/account/getForecode?mobile=${params.mobile}`, {}); };
