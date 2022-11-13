import http from "../http-common";

class HeartRateService {
  getAll(head) {
    return http.get("/heartrate/getAll", head);
  }

  searchByDate(date, head) {
    return http.get(`/heartrate/searchByDate`, {params: date, ...head});
  }

  create(data, head) {
    return http.post("/heartrate/post", data, head);
  }

  update(id, data, head) {
    return http.patch(`/heartrate/update/${id}`, data, head);
  }

  delete(id, head) {
    return http.delete(`/heartrate/delete/${id}`, head);
  }

  deleteAllBloodPressure(head) {
    return http.delete(`/heartrate/deleteall`, head)
  }
}

export default new HeartRateService();