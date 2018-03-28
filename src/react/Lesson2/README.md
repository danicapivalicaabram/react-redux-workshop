### Lesson Two - First React Component

So you've decided it's time to rewrite your code using React.js. The first thing on your list is creating a component that will represent one card. If you know all about components go right ahead to the [task specification](#specification)

#### So what's a component anyway?

If you look at the [Facebook React documentation](https://reactjs.org/docs/components-and-props.html) you will see that:

> Components let you split the UI into independent,
> reusable pieces, and think about each piece in isolation.

The code below is an example of a simple component written in ES6.

```javascript
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
          <h1>Hello World!</h1>
      </div>);
  }
}
```
The component above is used to define a title with the content *Hello world!*. The XML-like sintax used is called **JSX**. This kind of writting is purely optional and you can write React in pure JavaScript.

<details><summary>Have a look at the same example without JSX.</summary><p>
```javascript
class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Hello World!"
      )
    );
  }
}
```
Kind of reminds us of the DOM manipulation, wouldn't you say?
If you wish to explore the magical world of transpilation, go and have fun [here](https://babeljs.io/repl/).
</p></details>

<br/>
##### Why are components a great concept to have when building UI?
 What's so great about components is that we can reuse them throughout our code, and if we're using JSX syntax - like we would a HTML tag:
```html
<HelloWorld />
```

Components help us describe what should appear on the screen.
This is why we call React **declarative** - the developer of the application is only concerned with _declaring_ what should be shown on the screen and it's React's job to use DOM manipulation in order to show that to the user.

React encourages reusing encapsulated pieces of code (caugh *components*) to build rich and complex UIs. This is why we think of it as **component-based**.

##### Component props

The *HelloWorld* component whilst useful for educational purposes is pretty much useless in the real world. In most cases, you have pieces of code which can be reused for displaying structurally same, but *different* data.
In other words, you'd probably wish to display "Hello, *some name*". That's where **props** come in. <br/>
**Props** *(short for properties)* are arbitrary inputs to a React component. They are set by the parent component and allow us to customize our component. Props can be accessed via `this.props`.
For example, this is one way of changing our *HelloWorld* component from above so it uses props:

```javascript
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
          <h1>Hello {this.props.name}</h1>
      </div>);
  }
}
```

The parent component that uses this component would now have to specify a name like so:
```html
<HelloWorld name={"Josh"}/>
<HelloWorld name="Josh the second"/>
```

You can pass any type of data as *props*, just remember, they are read-only.**A component must never modify it's own props.** 
<details><summary>Why?</summary><p>
Because props are a *mechanism to propagate values/data to child components*. The React philosophy is that props should be immutable and top-down. An immutable object is an object that **cannot be changed once is created**. This means that everytime you wish to change the object, you create a new *version* of that object with new changes.
For an example:

```javascript
    var data = { fruit: 'Banana', shop: 'Fruit shop' };
    data = changeToPear(data);
    ...
    function changeToPear(data){
        // I treat data as immutable, so I instead of doing
        // data.fruit = "Pear";
        // I do the following
        return { fruit: 'Pear', shop: data.shop }; // returns a new "version" of the object
    }
```
</p></details>


### Specification
Your job is to create a reusable List component. The *List* component should consist of a *Title* component and a *LecturerCard* component. It should recieve props about the title content and an array of data to be displayed in the *LecturerCard*'s.
The *LecturerCard* should be able to display a picture, title and a lecture description.