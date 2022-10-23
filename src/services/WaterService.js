import http from "../http-common";

class WaterService {
  // getAll() {
  //   return http.get("/water/getAll");
  // }

  // get(id) {
  //   return http.get(`/water/getOne/${id}`);
  // }

  getDate(data, head) {
    return http.get(`/water/searchByDate`, {params: data, ...head})
  }

  // getDates(startDate, endDate) {
  //   return http.get(`/water/getByDates/${startDate}-${endDate}`);
  // }

  create(data, head) {
    return http.post("/water/post", data, head);
  }

  update(id, data, head) {
    return http.put(`/water/update/${id}`, data, head);
  }

  // delete(id) {
  //   return http.delete(`/water/delete/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/water`);
  // }

  // findByTitle(title) {
  //   return http.get(`/water?title=${title}`);
  // }
}

export default new WaterService();