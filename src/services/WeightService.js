import http from "../http-common";

class WeightService {
    create(data, head) {
        return http.post("/weight/post", data, head);
    }

    getCurrentWeight(head) {
        return http.get(`/weight/getcurrentweight`, head)
    }

    
}

export default new WeightService();