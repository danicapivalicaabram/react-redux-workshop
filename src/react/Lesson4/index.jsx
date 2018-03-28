import React from 'react';
import { Link } from 'react-router-dom';
import Stopwatch from './Stopwatch';
import './index.scss';

class Lesson4 extends React.Component {
  render() {
    return (
      <div>
        <Link href="a" to="/"> Back to list</Link>
        <Stopwatch />
      </div>
    );
  }
}

export default Lesson4;
