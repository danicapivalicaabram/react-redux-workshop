### Lesson Four - Component lifecycle

This time we'll be building something simple to show the usage of methods of the component lifecycle.
The task this time is to build a *Stopwatch* component that will display time passed since starting it.
The stopwatch should immediately start (right after it is **mounted**) and should have one *stop* button and one *reset* button.
Also, it should display digits in the HH:SS:MM format, and change them only if the *stop* button wasn't clicked.
If the reset button was clicked - the component should  reset the time and stop the countdown.
The countdown shouldn't be active after the user leaves the page of the lesson.

#### What you'll need to accomplish this task

In previous lessons we've seen that all written components had one thing in common - the *render* function.
It was in it that we defined what should be shown on the user's screen. However, having only a description of what to render is not enough. This is where **component lifecycle methods** come in handy.
<br/>
The lifecycle methods are various methods of all components which are invoked at different stages a component goes through.
This process is something that all component's go through and is usually refered to as **component's lifecycle**.
Since these methods are designed into React, all of them are invoked in a predictable order. 

##### Phases of the component's lifecycle

Each component goes through four different phases:
1. **Initialization** - a phase that occurs when initial state and props are set for the component
2. **Mounting** - a phase that occurs when the React component is inserted into DOM
3. **Updation** - a phase that occurs on component's state and/or props update
4. **Unmounting** - a phase that occurs when the React component is removed from the DOM

Component's lifecycle methods are invoked at a specific time in each phase and their occurence can be seen in the following image, taken from [this](https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0) article:
![Image from a Medium article](https://cdn-images-1.medium.com/max/1000/1*sn-ftowp0_VVRbeUAFECMA.png)
<br/>

##### Component's lifecycle methods

Knowing when lifecycle methods occur can be useful in order to use them properly. The following table summarizes the key points about each one of them.

Method | Arguments | Retuns | Use cases
--------|----------|---------|---------------
**componentWillMount** | none | noting | Initializing states or props (though you should use the constructor for this).
**componentDidMount** | none | nothing | Initializing external libraries that need to have access to DOM (D3), triggering data load for components (e.g. using [axios](https://github.com/axios/axios)) **Do not change state here**
**shouldComponentUpdate**| nextProps, nextState | Boolean | When you **_really_** need to decide for yourself if the component should render again. Use with caution (i.e. React is usually smarter :smile:) **Do not change state here**
**componentWillUpdate** | nextProps, nextState | nothing | When there is a need for some calculation and perparation before rendering some item. **Do not change state here**
**componentDidUpdate** |  previousProps, previousState | nothing | When in need to interact with the updated DOM or preform any post-render action. Usually something related to external libraries. **Do not change state here**
**componentWillReceiveProps** | nextProps | nothing | **THE** place to sync state with the new props.
**componentWillUnmount** | none | nothing | All cleanups related to the component. 


For more detailed info checkout these:
* [ReactJs Component Lifecycle Methods - a deep dive](https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0)
* [React components lifecycle](https://medium.com/react-ecosystem/react-components-lifecycle-ce09239010df)