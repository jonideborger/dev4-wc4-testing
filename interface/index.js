"use strict";
import { photoStore, currencies } from '../logic/index.js';
import { photos } from '../logic/data.js';

window.onload = function () {
  //fill content
  fillContent();

  document.getElementsByTagName("input").forEach(radioButton => {
    radioButton.addEventListener("click", function(e) {
      console.log(e);
      setUserInput(e.target.name, e.target.value);
    });
  })

};

function fillContent() {
  let content = document.getElementById("content_section");
  let htmlString = "";
  photoStore.photos.forEach(photo => {
    htmlString += `
    <article>
      <img src="${photo.source}" alt="ALT">
      <div class="article_content_wrapper">
        <div>
          <h3>${photo.title}</h3>
          <h4>${photo.photographer}</h4>
        </div>
        <div class="price">${photo.priceInEeuro}</div>
      </div>
    </article>
    `
  })

  content.innerHTML = htmlString;
}

function setUserInput(key, value) {
  photoStore.userInput[key] = value;
}
/*
De HTML om een foto product te tonen
alles in hoofdletters moet vervangen worden door dynamische inhoud. 
`
  <article>
    <img src="IMAGE_SOURCE" alt="ALT">
    <div class="article_content_wrapper">
      <div>
        <h3>TITLE</h3>
        <h4>PHOTOGRAPHER</h4>
      </div>
      <div class="price">PRICE</div>
    </div>
  </article>
`
*/

console.log(photoStore);