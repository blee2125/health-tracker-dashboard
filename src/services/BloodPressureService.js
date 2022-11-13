import http from "../http-common";

class BloodPressureService {
  getAll(head) {
    return http.get("/bloodpressure/getAll", head);
  }

  searchByDate(date, head) {
    return http.get(`/bloodpressure/searchByDate`, {params: date, ...head});
  }

  create(data, head) {
    return http.post("/bloodpressure/post", data, head);
  }

  update(id, data, head) {
    return http.patch(`/bloodpressure/update/${id}`, data, head);
  }

  delete(id, head) {
    return http.delete(`/bloodpressure/delete/${id}`, head);
  }

  deleteAllBloodPressure(head) {
    return http.delete(`/bloodpressure/deleteall`, head)
  }
}

export default new BloodPressureService();