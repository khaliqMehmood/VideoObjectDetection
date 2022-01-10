import axios from "axios";

const UrlService = {
    postUrl: (url, payload) => {
        return axios.post(url, payload);
    },
    postVideo: (url, payload) => {
        return axios.get(url, payload);
    },
    getVideo: (url, payload) => {
        return axios.get(url, payload);
    },
}