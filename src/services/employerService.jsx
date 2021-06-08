import axios from "axios";
export default class EmployerService {
   urlAdress = "http://localhost:8080/api/employers/getAllEmployers"
  getEmployer() {
    return axios.get(this.urlAdress);
  }
}
