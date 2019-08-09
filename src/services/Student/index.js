import { Component } from 'react';
import httpClient from '../StartRequest';

class StudentService extends Component {
  getSchedule() {
    return httpClient.get('/schedule');
  }
  getStudents() {
    return httpClient.get('/students');
  }
  postStudent(student) {
    return httpClient.post('/students', student);
  }
  getStudentsByQuery(query) {
    return httpClient.get(`/students${query}`);
  }
  getCIExtensions() {
    return httpClient.get('/IdExtensions');
  }
  patchStudent(id, student) {
    return httpClient.patch(`/students(${id})`, student);
  }
}

export default new StudentService();