import React from 'react';
import { Link } from 'react-router-dom';
import Container from './container';
import './index.scss';

class Lesson9 extends React.Component {
  render() {
    return (
      <div>
        <Link href="a" to="/"> Back to list</Link>
        <Container />
      </div>
    );
  }
}

export default Lesson9;
