import axios from 'axios'
import config  from "@/config";

const $http = axios.create({
    baseURL: config.apiURL,
    timeout: 10000
});

export default {
    getRegions() {
        return $http.get('/Regiones')
    },
    getCities(identifier) {
        return $http.get(`/Ciudades/Region/${identifier}`);
    },
    saveLead(data) {
        return $http.post("/saveLeads", data)
    },
    sendLead(data) {
        return $http.post("/EnvioCorreoGlobal", data)
    },
    createLead(lead){
        return axios.all([this.saveLead(lead.metadata), this.sendLead(lead)])
    }
}