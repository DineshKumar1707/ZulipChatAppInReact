import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/users";
const USER_MSG_API_BASE_URL = "http://localhost:8080/messages";

class UserSerivce {

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    getUsersMsg(userMail) {
        return axios.get(USER_MSG_API_BASE_URL+ '/' + userMail);
    }

}

export default new UserSerivce()