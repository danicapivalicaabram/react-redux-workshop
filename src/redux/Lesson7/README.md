### Lesson Seven - Redux - Actions and action creators

So the movie news agency was a bust, who cares! You already got your new job. I'm telling you, online shops are the next big thing! So here's what you have to do:

#### Specification
Create a simple online shop that will allow users to add and remove items from the shopping cart. Easy!
First start by writting **Redux** actions and their creators!


#### What do you need to know?

Redux is an library that implements the flux architecture. It doesn't need to be used with React, you can use it to manage state in other libraries/frameworks as well. That being said, it's a powerful (IMHO) combination with React.
Let's see how `actions` and `action creators` look in Redux!
<br/>

Like mentioned before, an action is a simple object that holds information what's going on in the application. Redux actions are also plain JavaScript objects. They have a property type indicating what type of action it is. This is important because depending on which type it is - we'll know what to do in the application. It can also hold additional information, the following is an example of a simple action:
```javascript
    let addCard = {
        type: 'ADD_CARD',
        name: 'Mistery lecturer',
        url: '',
        /* Any piece of data I need really */
    }
```
In our first examples we've had cards that held information about FEREdu Talks lecturers. The action above is an action that represents triggering a process of adding a card. Since we potentially need to have multiple cards added, we would wish to create a *factory* of some sorts for this type of action. That's exactly what our **action creators** are for.
Let's see an action creator that creates actions of type `ADD_CARD`.
```javascript
    
    function createAddCardAction(lecturerName, lecturerImageUrl){
        type: 'ADD_CARD',
        name: lecturerName,
        url: lecturerImageUrl,
        /* Any piece of data I need really */
    };
    ...

    var mistery = createAddCardAction('Mistery lecturer', '');
    var other = createAddCardAction('Other lecturer', 'other-image.jpg');
```

Now, if you're interested in how to define *human-friendly* actions, checkout [this](https://github.com/redux-utilities/flux-standard-action).