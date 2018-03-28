import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Lesson6 extends React.Component {
  render() {
    return (
      <div>
        <Link href="a" to="/"> Back to list</Link>
        Time to create your actionCreators.
        Write your functions in actionCreators.js file.
      </div>
    );
  }
}

export default Lesson6;
