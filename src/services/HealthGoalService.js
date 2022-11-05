import http from "../http-common";

class HealthGoalService {
  getAll(head) {
    return http.get("/healthgoal/getAll", head);
  }

  searchByDate(date, head) {
    return http.get(`/healthgoal/searchByDate`, {params: date, ...head});
  }

  create(data, head) {
    return http.post("/healthgoal/post", data, head);
  }

  update(id, data, head) {
    return http.patch(`/healthgoal/update/${id}`, data, head);
  }

  delete(id, head) {
    return http.delete(`/healthgoal/delete/${id}`, head);
  }

  deleteAllHealthGoals(head) {
    return http.delete(`/healthgoal/deleteall`, head)
  }
}

export default new HealthGoalService();