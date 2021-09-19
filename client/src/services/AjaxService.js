import axios from 'axios';


export default class AjaxService {

    static async get(urlpath, params) {
        return axios({
            method: 'get',
            url: process.env.REACT_APP_SERVER_URL + urlpath,
            params,
        }).then((res) => {
            return res;
        });
    }
    static async post(urlpath, data) {

        return axios({
            url: process.env.REACT_APP_SERVER_URL + urlpath,
            method: 'post',
            // config,
            data,
        }).then((response) => {
            return response;
        });
    }
}