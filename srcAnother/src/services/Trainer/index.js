import httpClient from '../StartRequest';

class TrainerService {

  async postTrainer(trainer) {
    return await httpClient.post('/trainers', trainer);
  }

  async getTrainers() {
    return await httpClient.get('/trainers');
  }

  async getCIExtensions() {
    return await httpClient.get('/extensions');
  }

  async getBanks() {
    return await httpClient.get('/banks');
  }

  getTrainersByQuery(query) {
    return httpClient.get(`/trainers${query}`);
  }

  patchTrainer(trainer) {
    return httpClient.patch(`/trainers/${trainer.trainerId}`, trainer);
  }
}

export default new TrainerService()