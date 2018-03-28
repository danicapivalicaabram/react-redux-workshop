import React from 'react';
import { Link } from 'react-router-dom';
import Board from './Board';
import { movieData } from './data';
import './index.scss';

class Lesson3 extends React.Component {
  render() {
    return (
      <div>
        <Link href="a" to="/"> Back to list</Link>
        <Board data={movieData} />
      </div>
    );
  }
}

export default Lesson3;
