import http from "../http-common";

class UserService {
  get(username, auth) {
    return http.get(`/user/${username}`, auth);
  }

  login(credentials) {
    return http.post('/user/login', credentials)
  }

  create(data) {
    return http.post("/user/register", data);
  }

}

export default new UserService();