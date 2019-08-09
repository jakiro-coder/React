import { Component } from 'react';
import httpClient from '../StartProgramRequest';

class ProgramService extends Component {
  getPrograms() {
    return httpClient.get('/programs');
  }
}

export default new ProgramService();