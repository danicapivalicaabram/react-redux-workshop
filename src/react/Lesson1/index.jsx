import React from 'react';
import { Link } from 'react-router-dom';
import { enableButtons, lockButtons, addMisteryLecturer } from './code';
import './index.scss';

export default class Lesson1 extends React.Component {
  render() {
    return (
      <div id="lesson1">
        <Link href="a" to="/"> Back to list</Link>
        <div className="list">
          <h1>Održana predavanja</h1>
          <div id="previousList">
            <div id="emanuel" className="card">
              <img src="https://eestec.hr/feredu/wp-content/uploads/sites/18/2017/12/Emanuel.png" alt="Emanuel" />
              <h4>Emanuel Loborec - Design talks</h4>
            </div>
            <div id="petar" className="card">
              <img src="https://eestec.hr/feredu/wp-content/uploads/sites/18/2018/01/feredu_predavac_petar_afric-1-e1515664870891.jpg" alt="Petar" />
              <h4>Petar Afrić - Programming talks</h4>
            </div>
            <div id="alen" className="card">
              <img src="https://eestec.hr/feredu/wp-content/uploads/sites/18/2018/02/feredu.jpg" alt="Alen" />
              <h4>Alen Hrga - Programming talks</h4>
            </div>
          </div>
        </div>
        <div className="list">
          <h1>Predavanja koja će se održati</h1>
          <div id="upcomingList">
            <div id="danica" className="card">
              <img src="https://eestec.hr/feredu/wp-content/uploads/sites/18/2018/03/danica.png" alt="Danica" />
              <h4>Danica Pivalica - Programming talks</h4>
            </div>
            <div id="david" className="card">
              <img src="https://eestec.hr/feredu/wp-content/uploads/sites/18/2018/03/david.png" alt="David" />
              <h4>David Abram - Programming talks</h4>
            </div>
          </div>
        </div>
        <div className="list">
          <button id="enable" onClick={enableButtons}>Omogući uređivanje</button>
          <button id="disable" className="active" onClick={lockButtons}>Onemogući uređivanje</button>
          <button onClick={addMisteryLecturer}>Dodaj tajnog predavača</button>
          <button className="disabled" id="previousListAdd">Dodaj u održana</button>
          <button className="disabled" id="upcomingListAdd">Dodaj u predavanja koja će se održati</button>
        </div>
      </div>
    );
  }
}
