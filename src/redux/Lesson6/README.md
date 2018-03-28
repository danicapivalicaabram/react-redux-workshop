### Lesson Six - Flux

Since the first JavaScript libraries and frameworks, there has been a major shift in what is expected of a web application. Today's modern single-page web applications have a lot on their plate - from managing active routes, fetching and caching data, optimizing performance, rendering complex UIs and *so much more*.

One approach in tackling state management issues was the MCV pattern. However, this pattern can create it's own problems in front-end development and is not very friendly when comming up with new features.
The developers at Facebook had an issue using MVC in their application. 

The main problem was the bidirectional communication between views and models. This communication created a path for one change to loop back and have multiple effects across the application. To takle this problem, **flux** was created.

#### Flux
Flux is an application architecture for building client-side web applications. The most important thing about it is that it utilizes an **_unidirectional data flow_**.

![Flux image](http://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png) *Image taken from [here](http://facebook.github.io/flux/docs/in-depth-overview.html#content)*

The diagram above shows key concepts in such an architecture:
* **Actions** - simple JavaScript actions which hold information about what is going on in the system
* **ActionCreators** - helper JavaScript functions that create *action* objects
* **Store** - an object containing the state of the application
* **View** - presentational layer of the application (i.e. what is rendered - our *React components*)
* **Dispatcher** - central object for managing data flow. All information goes through him.

One of the reasons this is such a popular architecture nowadays is 'cause it gives us a pretty elegant (_IMHO_) way of thinking about state changes that eradicates the complexity that can arise when building large applications.

More info about flux (and an awesome video explaining key points!) can be found [here](http://facebook.github.io/flux/docs/in-depth-overview.html#content).
