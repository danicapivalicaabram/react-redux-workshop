/* eslint-disable */

function prevousListAddFunction(){
 /* Insert code here */
}

function upcomingListAddFunction(){
  /* Insert code here */
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
  /* Add code here */
}