import http from "../http-common";

class ExerciseService {
  getAll() {
    return http.get("/exercise/getAll");
  }

  // get(id) {
  //   return http.get(`/exercise/getOne/${id}`);
  // }

  getDate(data) {
    console.log(data)
    return http.get(`/exercise/searchByDate`, {params: data});
  }

  // getDates(startDate, endDate) {
  //   return http.get(`/exercise/getByDates/${startDate}-${endDate}`);
  // }

  create(data) {
    console.log('create', data)
    return http.post("/exercise/post", data);
  }

  update(id, data) {
    console.log(id, data)
    return http.put(`/exercise/update/${id}`, data);
  }

  // delete(id) {
  //   return http.delete(`/exercise/delete/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/exercise`);
  // }

  // findByTitle(title) {
  //   return http.get(`/exercise?title=${title}`);
  // }
}

export default new ExerciseService();