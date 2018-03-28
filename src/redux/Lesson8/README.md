### Lesson Eight - Redux - Reducers

Ok, we are still building our shopping application. In the previous lesson we've created our actions. Now we need something to act uppon those actions, i.e. change the state according to them. We need **reducers**. For this lesson we will write a simple shopping cart reducer.

#### What do you need to know?

From the [Redux page](https://redux.js.org) we can see that:
> Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe the fact that something happened, but don't describe how the application's state changes.

Basically, **reducers** are functions that take the current state and action and return a *new state*. There is an emphasis on the *new* because Redux state is immutable. This means that we do not change the object directly, we simply return a new object that has the desired values. We can do this by using [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign). <br/>

Here is an example reducer function using the `Object.assign` function:
```javascript
    /* In this example we have a state object defined like so */
    let state = {
        numberOfApples: 5,
        /* Other apple unrelated data */
    };

    function myReducer(state, action){
        switch(action.type){
            case 'BUY_APPLE':{
                let newNumber = state.numberOfApples + 1;
                return Object.assign({}, state, { numberOfApples: newNumber });
            }
            case 'EAT_APPLE':{
                let newNumber = state.numberOfApples -1;
                return Object.assign({}, state, { numberOfApples: newNumber });
            }
            default: return state;
        }
    }
```

One thing that is important to see from the previous example is that the reducer **must always return a state, even if it's the old one**. 
<br/>

##### Managing more complex situations

Sometimes our app will need to handle multiple models that don't relate to each other. When that's the case, it's best to separate those parts of code by creating multiple reducers. In that way, each reducer will be responsible for a part of the store, i.e. will have it's own independant state.

The Redux library has a way for us to achieve this - using the `combineReducers` method. It's job is to combine multiple reducers into one reducing function that can be used in the application. 

But how to access each _independant_ state you ask? Simple! You provide a **key** for each reducer function, and then you can access that reducer's state via that key. For an example:
```javascript
    var rootReducer = combineReducers({
        key1: superReducer,
        key2: someOtherReducer,
    })
    ...
    // Later in your app, you can use:
    state.key1; // this will be the independant state defined for that reducer.
```

This can be seen in the `/src/reducers.js` file of this project.

**Note:** Since you may have an action that triggers changes in multiple independant state, it's probably a good idea to manipulate data in *actionCreators*. This way, you have a single place for the same data changes - thus fewer code to check should anything go wrong.