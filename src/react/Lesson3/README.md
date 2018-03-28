### Lesson Three - Component state

Ok, so now that you've created your first components it's time to take it a step further.
After the amazing job you've done creating that lecture list, word around town spread and new business opportuinities arose.
You decided to take a part-time job as a web developer for a news agency that specializes in writting about movies.
The first task you were assinged to was to create a *movie board* where users could select those movies they liked. Luckily for you, it was an easy one.
 
#### Specification
A movie board should be a stylish board showing movie cards. One *MovieCard* should contain a picture of a movie, a headline and a description. The description should be toggleable - meaning there should be a button to hide/show it.
A user needs to be able to rate each movie with grades from one (1) to five (5). All movies rated four(4) or above should change backgound and text color to indicate that they are one of the user's favourite.

#### What will you need to accomplish this task

Since your employer wishes to have a stylish board, it is necessary you use CSS/SCSS now.
To import the local file, use:
```javascript
import './index.scss';
```
There are multiple ways you can style a component. You can use inline styles or classes, however there are differences when using them with *jsx* that you need to be aware of:
* When using **inline styles**, the styles property needs to recieve an object, not a string.
* If you wish to **add a class** to an element, you need to use the property className.

The following is an example of specifying style in jsx:
```javascript
import './index.scss';

class StylishComponent extends React.Component {

  render() {
    var styleObject = {
        margin: '10px',
    };
    return (
      <div style={{ height: '200px', maxWidth: '200px' }}>
          <h1 className={'title'}>Hello you</h1>
          <p style={styleObject}> I am a stylish paragraph </p>
      </div>);
  }
}
```

The next paragraph shows how to use and define the component's state. If you already know this, you can skip it.


##### Components and state

In addition to taking input data from the outside, a component can mantain an internal state data. This state can be accessed via `this.state`. We can set the initial values of the state in the `constructor` of our component.


```javascript
class HelloWorld extends React.Component {
  constructor(){
      super();
      this.state = { name: 'Jimmy' };
  }

  render() {
    return (
      <div>
          <h1>Hello {this.state.name}</h1>
      </div>);
  }
}
```
However, the above example is not quite what we had in mind. Now, all the *HelloWorld* components would have *Jimmy* hardcoded as their name. A better solution would be for us to have *Jimmy* as a default name in case the parent component didn't provide the *name* props.
```javascript
class HelloWorld extends React.Component {
  constructor(props){
      super(props);
      this.state = { name: props.name || 'Jimmy' };
  }

  render() {
    return (
      <div>
          <h1>Hello {this.state.name}</h1>
      </div>);
  }
}
```

##### Changing the state

So almost done. Imagine now, for some strange reason, we needed to have a `<button>` that needs to enable the user to change the provided name to *Earl*. We couldn't have just put *Earl* as the *name* props because we live in a universe where people are mostly named *Virginia*, so that's an obvious choice for the *name* props.(How unusual!)
Luckily for us, there is a solution provided in the React component API, and that solution is called **setState**.
<br/>
<br/>
**setState** is a component's function that we need to use in order to change the state (because we wish to keep it immutable).
This function recieves two arguments: new property values that need to be assigned to the state and a callback function that will be called after the state has been updated.
<br/><br/>
Enlightened with this new information, we would rewrite our *HelloWorld* component:
```javascript
class HelloWorld extends React.Component {
  constructor(props){
      super(props);
      this.state = { name: props.name || 'Jimmy' };
      // We are binding the context of 'this' to the function changeNameToEarl
      // This is so we can use 'this' keyword as a reference to the component
      // and not the function itself
      this.changeNameToEarl = this.changeNameToEarl.bind(this);
  }

  changeNameToEarl(){
      this.setState({name: 'Earl'}, console.log);
  }

  render() {
    return (
      <div>
          <h1>Hello {this.state.name}</h1>
          <button onClick={this.changeNameToEarl}> Well this is a pickle. My name is Earl. </button>
      </div>);
  }
}
```

**Note:** Because the update is asynchronous, if the next state depends on the previous state, do something like this:
```javascript
    this.setState((previousState, props) => ({
        value: previousState.value + props.value,
    }))
```


To checkout other binding approaches in React or other ways of handling passing functions check [here](https://reactjs.org/docs/faq-functions.html)


##### Conditional rendering and loops

Since *JSX* is a mix of JavaScript and HTML, you can use JavaScript for conditional rendering:
```javascript
  render(){
      return (
          <div>
            {
                this.props.isTrue &&
                <h1> It's true! </h1>
            }
            {
                !this.props.isTrue &&
                <h1> It's not true! </h1>
            }
          </div>
      );
  }
```

Also, you are able to use loops using the **map** function:
```javascript
  render(){
      return (
            <div>
            {
                myList.map((listElement, index) => (
                    <div key={index}> {listElement.name} - I'm no. {index} </div>
                ))
            }
          </div>
      );
  }
```
**Note:** The **key** property in the code above is important. Checkout what the [docs](https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components) have to say.