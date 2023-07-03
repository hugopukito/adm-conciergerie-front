
function toggleNavBar() {
  var nav = document.getElementById('nav')
  nav.classList.toggle('show')
  document.body.classList.toggle('hide-scrollbar');
}

function openForm() {
  toggleNavBar()
  var form = document.getElementById('container-form')
  form.classList.add('show')
  document.body.classList.add('hide-scrollbar');

  var menuButton = document.getElementById('menu-button')
  menuButton.style.cursor = 'auto';
  menuButton.onclick = null;
}

function closeForm() {
  var form = document.getElementById('container-form')
  form.classList.remove('show')
  document.body.classList.remove('hide-scrollbar');

  var menuButton = document.getElementById('menu-button')
  menuButton.style.cursor = 'pointer';
  menuButton.onclick = toggleNavBar;
}