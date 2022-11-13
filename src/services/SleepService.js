import http from "../http-common";

class SleepService {
  getAll(head) {
    return http.get("/sleep/getAll", head);
  }

  create(data, head) {
    return http.post("/sleep/post", data, head);
  }

  update(id, data, head) {
    return http.patch(`/sleep/update/${id}`, data, head);
  }

  delete(id, head) {
    return http.delete(`/sleep/delete/${id}`, head);
  }

  deleteAllSleep(head) {
    return http.delete(`/sleep/deleteall`, head)
  }
}

export default new SleepService();