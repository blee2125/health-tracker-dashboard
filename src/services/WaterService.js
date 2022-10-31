import http from "../http-common";

class WaterService {
  getDate(data, head) {
    return http.get(`/water/searchByDate`, {params: data, ...head})
  }

  getSevenDays(head) {
    return http.get(`/water/getSevenDays?7+days+GMT`, head);
  }

  create(data, head) {
    return http.post("/water/post", data, head);
  }

  update(id, data, head) {
    return http.put(`/water/update/${id}`, data, head);
  }

  deleteAllWater(head) {
    return http.delete(`/water/deleteall`, head)
  }
}

export default new WaterService();