import http from "../http-common";

class SettingsService {
    get(head) {
        return http.get("/settings/get", head)
    }

    update(data, head) {
        return http.patch("/settings/update", data, head);
    }

    delete(head) {
        return http.delete("/settings/delete", head)
    }
}

export default new SettingsService();