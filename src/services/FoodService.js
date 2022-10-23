import http from "../http-common";

class FoodService {
  getAll(head) {
    return http.get("/food/getAll", head);
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

  create(data, head) {
    return http.post("/food/post", data, head);
  }

  update(id, data, head) {
    return http.put(`/food/update/${id}`, data, head);
  }

  delete(id, head) {
    return http.delete(`/food/delete/${id}`, head);
  }

  // deleteAll() {
  //   return http.delete(`/food`);
  // }

  // findByTitle(title) {
  //   return http.get(`/food?title=${title}`);
  // }
}

export default new FoodService();