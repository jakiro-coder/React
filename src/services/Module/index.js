import httpClient from '../ModuleRequest';

class ModuleService {
  studentweekschedule(query) {
    return httpClient.get(`/studentweekschedule${query}`);
  }

  getProfileInformationByQuery(query) {
    return httpClient.get(`/modulestudentdetails${query}`);
  }
}

export default new ModuleService()