import { connection } from './mysql_connection';
import * as React from 'react';
import { Component } from 'react-simplified';

class LoginService extends Component {
  getBrukernavnOgPassord(success) {
    connection.query('select brukernavn, passord, rolle from Ansatte', (error, results) => {
      if (error) return console.error(error);
      success(results);
    });
  }
}

export let loginService = new LoginService();

/* class StudentService {
  getStudents(success) {
    connection.query('select * from Students', (error, results) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getStudent(id, success) {
    connection.query('select * from Students where id=?', [id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }
} */
