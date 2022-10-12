import http from "../http-common";

class WaterService {
  getAll() {
    return http.get("/water/getAll");
  }

  get(id) {
    return http.get(`/water/getOne/${id}`);
  }

  getDate(dateString) {
    return http.get(`/water/searchByDate/${dateString}`);
  }

  getDates(startDate, endDate) {
    return http.get(`/water/getByDates/${startDate}-${endDate}`);
  }

  create(data) {
    //console.log('create', data)
    return http.post("/water/post", data);
  }

  update(id, data) {
    //console.log(id, data)
    return http.put(`/water/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/water/delete/${id}`);
  }

  // deleteAll() {
  //   return http.delete(`/water`);
  // }

  // findByTitle(title) {
  //   return http.get(`/water?title=${title}`);
  // }
}

export default new WaterService();