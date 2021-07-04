import http from "../http-common";
import { ITutorialData } from "../types"

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id: string) {
    return http.get(`/tutorials/${id}`);
  }

  create(data: ITutorialData) {
    return http.post("/tutorials", data);
  }

  update(data: ITutorialData, id?: number | null) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id?: number | null) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title: string) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();