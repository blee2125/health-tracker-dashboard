import http from "../http-common";

class WeightService {
    create(data, head) {
        return http.post("/weight/post", data, head);
    }

    getCurrentWeight(head) {
        return http.get(`/weight/getcurrentweight`, head)
    }

    getWeightLast30Days(head) {
        return http.get(`/weight/getLast30Days`, head)
    }

    deleteAllWeight(head) {
        return http.delete(`/weight/deleteall`, head)
    }
}

export default new WeightService();