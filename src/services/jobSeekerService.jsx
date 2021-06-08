import axios from "axios";
export default class JobSeekerService {
   urlAdress = "http://localhost:8080/api/jobSeekers/getAllSeeker"
  getSeeker() {
    return axios.get(this.urlAdress);
  }
}
