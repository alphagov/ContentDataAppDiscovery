/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

const btn = document.getElementById('hide-this');

btn.addEventListener('click', () => {
  const box = document.getElementById('hide-help-us');

  box.style.display = 'none';

});
