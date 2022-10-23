import http from "../http-common";

class UserService {
  getUser(user) {
    return http.get(`/user/${user.username}`, {
      headers: { "x-auth-token": user.token,
      "content-type": "application/json"}
    });
  }

  login(credentials) {
    return http.post('/user/login', credentials)
  }

  create(data) {
    return http.post("/user/register", data);
  }

}

export default new UserService();