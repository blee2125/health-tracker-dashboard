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

  editPassword({data}, head) {
    return http.put("/user/changepassword", data, head);
  }

  addHeight({data}, head) {
    return http.patch("/user/addheight", data, head);
  }

  addBirthday({data}, head) {
    return http.patch("/user/addbirthday", data, head);
  }

  deleteUser(head) {
    return http.delete("/user/delete", head);
  }
}

export default new UserService();