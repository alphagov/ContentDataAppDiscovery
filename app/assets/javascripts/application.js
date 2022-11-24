/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

//Hide the help us panel on click
const btn = document.getElementById('hide-this');

btn.addEventListener('click', () => {
  const box = document.getElementById('hide-help-us');
  box.style.display = 'none';
});

//Multi search filter search and hide values that do not match the search term
function documentType() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('document-type-input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("document-type-list");
  li = ul.getElementsByTagName("div");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("label")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function organisationType() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('organisation-input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("organisation-list");
  li = ul.getElementsByTagName("div");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("label")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
