import http from "../http-common";

class FoodService {
  getAll(head) {
    return http.get("/food/getAll", head);
  }

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

  deleteAllFood(head) {
    return http.delete(`/food/deleteall`, head)
  }
}

export default new FoodService();