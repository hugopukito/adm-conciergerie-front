var firstForm = document.getElementById("firstForm");

firstForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var formData = new FormData(firstForm);
  console.log(formData)

  // fetch(form.action, {
  //   method: 'POST',
  //   body: formData
  // })
  // .then(response => response.text())
  // .then(data => {
  //   console.log(data);
  //   // Process the response data as needed
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });
});

var hideBellowNav = false

function toggleNavBar() {
  var bellowNav = document.getElementById('bellow-nav')
  if (hideBellowNav) {
    bellowNav.style.display = 'block'
    hideBellowNav = false
  } else {
    bellowNav.style.display = 'none'
    hideBellowNav = true
  }

  var nav = document.getElementById('nav')
  nav.classList.toggle('show')
}

function scrollToDiv(id) {

  var navList = document.getElementById('nav-list')
  navList.style.transition = 'opacity 0ms, transform 0ms'

  var bellowNav = document.getElementById('bellow-nav')
  bellowNav.style.display = 'block'
  hideBellowNav = false

  var targetDiv = document.getElementById(id)
  targetDiv.scrollIntoView()

  var nav = document.getElementById('nav')
  nav.classList.toggle('show')
  setTimeout(() => {
    navList.style.transition = 'opacity 300ms, transform 300ms'
  }, 500)
}

function openForm() {
  var nav = document.getElementById('nav')
  nav.classList.toggle('show')

  var formDiv = document.getElementById('container-form')
  formDiv.classList.add('show')

  var menuButton = document.getElementById('menu-button')
  menuButton.style.cursor = 'auto';
  menuButton.ontouchstart = null

  var bellowNav = document.getElementById('bellow-nav')
  bellowNav.style.display = 'none'
}

function closeForm() {
  var formDiv = document.getElementById('container-form')
  formDiv.classList.remove('show')

  var menuButton = document.getElementById('menu-button')
  menuButton.style.cursor = 'pointer';
  menuButton.ontouchstart = toggleNavBar;

  var bellowNav = document.getElementById('bellow-nav')
  bellowNav.style.display = 'block'
  hideBellowNav = false
}
