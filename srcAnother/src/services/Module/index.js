import httpClient from '../ModuleRequest';

class ModuleService {
  getModulesByTrainer(id) {
    return httpClient.get(`/ModuleTrainerSubjectDetails(${id})`)
  }

  trainerWeekSchedule(query) {
    return httpClient.get(`/trainerweekschedule${query}`);
  }
}

export default new ModuleService()