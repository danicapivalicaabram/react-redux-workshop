import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1> React Redux workshop </h1>
        <p>
        Hello and welcome to the React/Redux workshop.
        This workshop is part of <a href="http://eestec.hr/feredu/"> FEREdu talks</a> series of programming and design talks.
        Lessons from one to ten are designed to give you a short introduction into the world of React and Redux web applications.
        Hopefully someday the design of this page will get better. Happy programming!
        </p>
        <br />
        <br />
        <h4>Contents:</h4>
        <div className="menu">
          <Link href="a" to="/react/lesson/1"> Lesson One - DOM manipulation using plain JavaScript </Link>
          <Link href="a" to="/react/lesson/2"> Lesson Two - First React Component </Link>
          <Link href="a" to="/react/lesson/3"> Lesson Three - Component state </Link>
          <Link href="a" to="/react/lesson/4"> Lesson Four - Component lifecycle </Link>
          <Link href="a" to="/react/lesson/5"> Lesson Five - Creating a quiz </Link>

          <Link href="a" to="/redux/lesson/6"> Lesson Six - Flux </Link>
          <Link href="a" to="/redux/lesson/7"> Lesson Seven - Redux - Actions and action creators </Link>
          <Link href="a" to="/redux/lesson/8"> Lesson Eight - Redux - Reducers </Link>
          <Link href="a" to="/redux/lesson/9"> Lesson Nine - Container components </Link>
          <Link href="a" to="/redux/lesson/10"> Lesson Ten - Let's wrap it up </Link>
        </div>
        
      </div>
    );
  }
}
