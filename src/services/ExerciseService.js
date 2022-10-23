import http from "../http-common";

class ExerciseService {
  getAll(head) {
    return http.get("/exercise/getAll", head);
  }

  // get(id) {
  //   return http.get(`/exercise/getOne/${id}`);
  // }

  // getDate(data) {
  //   //console.log(data)
  //   return http.get(`/exercise/searchByDate`, {params: data});
  // }

  // getDates(startDate, endDate) {
  //   return http.get(`/exercise/getByDates/${startDate}-${endDate}`);
  // }

  create(data, head) {
    return http.post("/exercise/post", data, head);
  }

  update(id, data, head) {
    return http.put(`/exercise/update/${id}`, data, head);
  }

  delete(id, head) {
    return http.delete(`/exercise/delete/${id}`, head);
  }

  // deleteAll() {
  //   return http.delete(`/exercise`);
  // }

  // findByTitle(title) {
  //   return http.get(`/exercise?title=${title}`);
  // }
}

export default new ExerciseService();