import http from "../http-common";

class ExerciseService {
  getAll(head) {
    return http.get("/exercise/getAll", head);
  }

  searchByDate(date, head) {
    return http.get(`/exercise/searchByDate`, {params: date, ...head});
  }

  getExerciseToday(date, head) {
    return http.get(`/exercise/getExerciseToday`, {params: date, ...head});
  }

  create(data, head) {
    return http.post("/exercise/post", data, head);
  }

  update(id, data, head) {
    return http.put(`/exercise/update/${id}`, data, head);
  }

  delete(id, head) {
    return http.delete(`/exercise/delete/${id}`, head);
  }

  deleteAllExercise(head) {
    return http.delete(`/exercise/deleteall`, head)
  }
}

export default new ExerciseService();