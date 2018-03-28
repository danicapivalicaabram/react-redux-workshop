import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound } from '../index';
import { Lesson1, Lesson2, Lesson3, Lesson4, Lesson5 } from '../../react';
import { Lesson6, Lesson7, Lesson8, Lesson9, Lesson10 } from '../../redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/react/lesson/1" component={Lesson1} />
          <Route path="/react/lesson/2" component={Lesson2} />
          <Route path="/react/lesson/3" component={Lesson3} />
          <Route path="/react/lesson/4" component={Lesson4} />
          <Route path="/react/lesson/5" component={Lesson5} />
          <Route path="/redux/lesson/6" component={Lesson6} />
          <Route path="/redux/lesson/7" component={Lesson7} />
          <Route path="/redux/lesson/8" component={Lesson8} />
          <Route path="/redux/lesson/9" component={Lesson9} />
          <Route path="/redux/lesson/10" component={Lesson10} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
