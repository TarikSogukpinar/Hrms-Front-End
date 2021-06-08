import axios from "axios";

export default class EmployeeService {
  urlAdress = "http://localhost:8080/api/employee/getAllEmployee";
  getEmployee() {
    return axios.get(this.urlAdress);
  }
}
