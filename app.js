var firstForm = document.getElementById("first_form");
var secondForm = document.getElementById("second_form");

firstForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var formData = new FormData(firstForm);

  var jsonObject = {};
  formData.forEach(function(value, key) {
    if (!isNaN(value) && value.trim() !== '') {
      jsonObject[key] = parseInt(value, 10);
    } else {
      jsonObject[key] = value;
    }
  });
  var jsonData = JSON.stringify(jsonObject);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://151.80.155.148/back/forms', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.status === 201) {
      console.log('Data sent successfully!');
    } else {
      console.error('Failed to send data.');
    }
  };
  xhr.send(jsonData);
});

secondForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var formData = new FormData(secondForm);
  console.log(formData)
});

function toggleNavBar() {
  var nav = document.getElementById('nav')
  nav.classList.toggle('show')

  if (window.getComputedStyle(document.body).overflow != "hidden") {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "visible"
  }
}

function scrollToDiv(id) {
  var navList = document.getElementById('nav-list')
  navList.style.transition = 'opacity 0ms, transform 0ms'

  var targetDiv = document.getElementById(id)
  targetDiv.scrollIntoView()

  var nav = document.getElementById('nav')
  nav.classList.toggle('show')
  setTimeout(() => {
    navList.style.transition = 'opacity 300ms, transform 300ms'
  }, 500)
  document.body.style.overflow = "visible"
}

function openForm() {
  toggleNavBar()

  var formDiv = document.getElementById('form-background')
  formDiv.classList.add('show')

  var menuButton = document.getElementById('menu-button')
  menuButton.style.cursor = 'auto';
  menuButton.ontouchstart = null

  document.body.style.overflow = "hidden"
}

function closeForm() {
  var formDiv = document.getElementById('form-background')
  formDiv.classList.remove('show')

  var menuButton = document.getElementById('menu-button')
  menuButton.style.cursor = 'pointer';
  menuButton.ontouchstart = toggleNavBar;

  document.body.style.overflow = "visible"
}

var firstFormActive = true
var secondFormActive = false

function showFirstForm() {
  var firstForm = document.getElementById('first_form')
  var secondForm = document.getElementById('second_form')
  if (!firstFormActive) {
    firstForm.classList.add('show')
    firstFormActive = true
  }
  secondForm.classList.remove('show')
  secondFormActive = false
}

function showSecondForm() {
  var firstForm = document.getElementById('first_form')
  var secondForm = document.getElementById('second_form')
  if (!secondFormActive) {
    secondForm.classList.add('show')
    secondFormActive = true
  }
  firstForm.classList.remove('show')
  firstFormActive = false
}