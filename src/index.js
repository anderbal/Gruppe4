import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { loginService } from './services';

import createHashHistory from 'history/createHashHistory';
const history = createHashHistory(); // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class Login extends Component {
  brukernavnOgPassord = [];

  brukernavn = '';
  passord = '';

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Et brukernavn" onChange={e => (this.brukernavn = event.target.value)} />
          <input type="password" placeholder="*******" onChange={e => (this.passord = event.target.value)} />
          <button type="button" onClick={this.login}>
            Logg inn
          </button>
        </form>
      </div>
    );
  }

  mounted() {
    loginService.getBrukernavnOgPassord(brukernavnOgPassord => {
      this.brukernavnOgPassord = brukernavnOgPassord;
    });
  }

  login() {
    for (let i = 0; i < this.brukernavnOgPassord.length; i++) {
      if (this.brukernavn == this.brukernavnOgPassord[i].brukernavn) {
        if (this.passord == this.brukernavnOgPassord[i].passord) {
          console.log(this.brukernavn + ' er innlogget!');
        }
      }
    }
  }
}

class AdminStartside extends Component {
  // Usikker på denne. Eventuell info daglig leder og sekretær skal se. Samt funksjoner.
}

class SalgStartside extends Component {
  // Oversikt over aktive? bestillinger
}

class Bestilling extends Component {}

class Ordrebekreftelse extends Component {
  // En oversikt over hvilke valg man har valgt i bestillingen
}

class EndreBestilling extends Component {
  // Tar utgangspunkt i listen på startsiden. Kommer til siden som tilhører hver Bestilling
}

class LagerStartside extends Component {
  // Ha en oversikt over ting på langer (hva må repareres osv)
}

class LeggTilSykkel extends Component {}

class LeggTilUtstyr extends Component {}

/* class StudentList extends Component {
  students = [];

  render() {
    return (
      <ul>
        {this.students.map(student => (
          <li key={student.id}>
            <NavLink to={'/students/' + student.id + '/edit'}>{student.name}</NavLink>
          </li>
        ))}
      </ul>
    );
  }

  mounted() {
    studentService.getStudents(students => {
      this.students = students;
    });
  }
} */

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={Login} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
