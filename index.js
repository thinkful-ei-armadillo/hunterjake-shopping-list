'use strict';
/* global $*/

// Get our general clone of item;
let standardItem = entry => {
  $('.shopping-list').append(` 
    <li>
      <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
          <span class="button-label">check</span>
          </button>
            <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
};

// grab user inputted text on add or "return"
function getInput(){
  return $('#shopping-list-entry').val();
}
//check or uncheck items on the list by using "check button"

//remove items permanently from list by hittin "delete"

function main() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const userInput = getInput();
    standardItem(userInput);
  });
}

$(main);