/* eslint-disable */

function prevousListAddFunction(){
  var upcomingList = document.getElementById('upcomingList');
  var firstChild = upcomingList.children[0];
  if (firstChild) {
    var prevousList = document.getElementById('previousList');
    prevousList.appendChild(firstChild);
  }
}

function upcomingListAddFunction(){
  var prevousList = document.getElementById('previousList');
  var lastChild = prevousList.lastChild;
  if (lastChild){
    var upcomingList = document.getElementById('upcomingList');
    upcomingList.insertBefore(lastChild, upcomingList.firstChild);
  }
}

export function enableButtons() {
  document.getElementById('enable').className = "active";
  document.getElementById('disable').className = "";
  document.getElementById('previousListAdd').className = "";
  document.getElementById('upcomingListAdd').className = "";


  document.getElementById('previousListAdd').addEventListener('click', prevousListAddFunction);
  document.getElementById('upcomingListAdd').addEventListener('click', upcomingListAddFunction);
}


export function lockButtons(){
  document.getElementById('enable').className = "";
  document.getElementById('disable').className = "active";
  document.getElementById('previousListAdd').className = "disabled";
  document.getElementById('upcomingListAdd').className = "disabled";

  document.getElementById('previousListAdd').removeEventListener('click', prevousListAddFunction);
  document.getElementById('upcomingListAdd').removeEventListener('click', upcomingListAddFunction);
}


export function addMisteryLecturer(){
  var upcomingList = document.getElementById('upcomingList');
  
  var misteryCard = document.createElement('div');
  misteryCard.className="card";
  var misteryImage = document.createElement('img');
  misteryImage.alt = "Tajni predavač";
  misteryImage.style.minHeight = "370px";
  misteryCard.appendChild(misteryImage);

  var misteryTitle = document.createElement('h3');
  misteryTitle.textContent = 'Nije poznato tko je';
  misteryCard.appendChild(misteryTitle);

  upcomingList.appendChild(misteryCard);

}