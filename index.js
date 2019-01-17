'use strict';
/* global $ */

const shopping_list = [];
function addNew(userTextElement) {
  shopping_list.push(
    newFunction());
  
  function newFunction() {
    return ('<li><span class="shopping-item">' + (userTextElement) + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
  }
}
$(function () {
  $('#shopping-list-entry').submit(event => {
    event.preventDefault();
    const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
    $('.shopping-item').text($(userTextElement).val());
    return addNew();
  });
});