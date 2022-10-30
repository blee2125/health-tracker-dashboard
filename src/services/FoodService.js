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

  searchByDate(date, head) {
    return http.get(`/food/searchByDate`, {params: date, ...head});
  }

  getFoodToday(date, head) {
    return http.get(`/food/getFoodToday`, {params: date, ...head});
  }

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
}

export default new FoodService();