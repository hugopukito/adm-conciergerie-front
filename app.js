
function toggleNavBar() {
  var element = document.getElementById('nav')
  element.classList.toggle('show')
  document.body.classList.toggle('hide-scrollbar');
}

function clickedNavBar() {
  var element = document.getElementById('nav')
  element.classList.toggle('show')
  document.body.classList.remove('hide-scrollbar');
}