### Lesson Nine - Container components

In the previous lessons we've defined actions, their creators and reducers with their store. Almost all flux concepts are covered. What we still need to do is connect these structures with our React components so we can present the state and allow our user to change it via UI.

#### What do you need to know?

Now that we've covered writing some Redux concepts it's time to put it all together with **containers**.
**Containers** are special types of components. So far we've worked with *presentational* components.
To summarize the differences, here's the table from the [Redux documentation](https://redux.js.org/basics/usage-with-react#presentational-and-container-components):


 &nbsp; | Presentational components | Container components
-----|------|-------
Purpose| How things look | How things work
Aware of Redux| No | Yes
How it reads store data| Gets it via props | **Is subscribed to state changes**
How it changes store data | Invokes functions passed via props | **Dispatches Redux actions**

It sounds complicated, but writing *container* components is a lot like writing *'basic' presentation* components.
To define a *container* component you need to do the following:
1. Write a function that **selects** data from the state.
2. Write a function that **dispatches** functions, i.e. dispatches action creators.
3. Connect all of this using the built-in **connect** function from Redux.

Here is an example:
```javascript
import React from 'react';
import { customAction } from './actions'; // this is the actionCreator that I wish to dispatch
import { connect } from 'react-redux';

class Container extends React.Component {
  render() {
    return (
      <div>
        <PresentationalComponent 
            number={this.props.appleNumber}
            whatToDoOnClick={this.props.callFunction}
        />
      </div>
    );
  }
}
// This function sets the property appleNumber in the props of the Container component.
const mapStateToProps = (state) => {
  appleNumber: state.key1.numberOfApples,
};

// this function sets the property callFunction in the props of the Container component.
const mapDispatchToProps = (dispatch) => {
   callFunction: () => dispatch(customAction()),
};

// This connect function is responsible for providing the state and dispatch params
// to mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Container);

```

As you can see, all we did was write two additional functions and let **Redux** work it's magic.