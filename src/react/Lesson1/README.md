### Lesson One - DOM manipulation using plain JavaScript

You are a developer managing the FEREdu site (how exciting!), and your job is to handle all
changes to the schedule. You have designed the page in a way that it has multiple lists containing
information about lectures - one containing all held lectures and one containing upcoming lectures.
Since you got tired of fixing HTML's, you decided you should give JavaScript a try.
There is a file named code.js and you've written most of it. It just needs a little more JS magic.

##### The HTML structure can be found here 
<details> <summary> Show structure</summary><p>
```html
    <div>
        <div className="list">
          <h1>Održana predavanja</h1>
          <div id="previousList">
            <div id="emanuel" className="card">
              <img src="https://eestec.hr/feredu/wp-content/uploads/sites/18/2017/12/Emanuel.png" alt="Emanuel" />
              <h4>Emanuel Loborec - Design talks</h4>
            </div>
            <!-- Other children go here -->
          </div>
        </div>
        <div className="list">
          <h1>Predavanja koja će se održati</h1>
          <div id="upcomingList">
             <!-- Children structured as above go here -->
          </div>
        </div>
        <div className="list">
          <!-- Control buttons -->
          <button id="enable" onClick="enableButtons">Omogući uređivanje</button>
          <button className="active" onClick="lockButtons">Onemogući uređivanje</button>
          <button onClick={addMisteryLecturer}>Dodaj tajnog predavača</button>          
          <button id="disable" className="disabled" id="previousListAdd"> Dodaj u održana</button>
          <button className="disabled" id="upcomingListAdd">Dodaj u predavanja koja će se održati</button>
        </div>
      </div>
  ```
  This is the same as expected in the file.
  </p>
</details>
<br/>
<br/>
Your job is to write the _prevousListAddFunction()_ and _addMisteryLecturer()_ functions.


##### Function _prevousListAddFunction_
The _prevousListAddFunction()_ should add the first element from the _upcomingList_ and place it
as the last element of the _prevousList_. 
<details> <summary> Show hints </summary>
  You are going to need this *_document.getElementById('prevousList')_* to select the prevousList.
  This is a DOM API function that retrieves the node which has the specified id.
  <br/>
  The function *_parentElement.appendChild(someElement)_* can be used to append a child
  at the end of a parent element. It should be of use to you.

</details>

<br/>
<br/>
##### Function _addMisteryLecturer_
The _addMisteryLecturer()_ should create an card element with simmilar structure as the existing ones and
plase it as the last child of the _upcomingList_.
<details> <summary> Show hints </summary> <p>
  You are going to need this *_document.createElement('div')_* create a div element.
  Checkout [this](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) for more info.
</p>
</details>