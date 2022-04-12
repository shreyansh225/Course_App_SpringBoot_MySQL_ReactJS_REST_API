import axios from "axios";

// we are using port number 9090 coz we have used the same port number in the Spring boot application too; if need be we can change it 

const base_url = "http://localhost:9090"; // a base url so that we can use it anywhere in the application

// axios.defaults.baseURL = "http://localhost:9090";
//   axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
//   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default base_url;