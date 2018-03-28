import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';
// import { lecturerData } from './data'; -> you'll need this

class Lesson2 extends React.Component {
  render() {
    return (
      <div>
        <Link href="a" to="/"> Back to list</Link>
        <List />
        <List />
      </div>
    );
  }
}

export default Lesson2;
