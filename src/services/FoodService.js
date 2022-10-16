import http from "../http-common";

class FoodService {
  getAll() {
    return http.get("/food/getAll");
  }

  // get(id) {
  //   return http.get(`/food/getOne/${id}`);
  // }

//   getDate(data) {
//     console.log(data)
//     return http.get(`/food/searchByDate`, {params: data});
//   }

  // getDates(startDate, endDate) {
  //   return http.get(`/food/getByDates/${startDate}-${endDate}`);
  // }

  create(data) {
    //console.log('create', data)
    return http.post("/food/post", data);
  }

  update(id, data) {
    //console.log(id, data)
    return http.put(`/food/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/food/delete/${id}`);
  }

  // deleteAll() {
  //   return http.delete(`/food`);
  // }

  // findByTitle(title) {
  //   return http.get(`/food?title=${title}`);
  // }
}

export default new FoodService();