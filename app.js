var firstForm = document.getElementById("first_form");

firstForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var formData = new FormData(firstForm);
  var submitForm1 = document.getElementById("submit_form_1")
  var errorMsg = document.getElementById("error_msg")
  var hasError = false;

  var jsonObject = {};
  formData.forEach(function(value, key) {
    if (!isNaN(value) && value.trim() !== '' && key == 'surface') {
      jsonObject[key] = parseInt(value, 10);
      if (parseInt(value, 10) < 15) {
        submitForm1.style.backgroundColor = 'red';
        errorMsg.style.display = 'block'
        errorMsg.innerHTML = 'Erreur <br> surface'
        hasError = true
        return
      }
    } else {
      jsonObject[key] = value;
    }
  });

  if (hasError) {
    setTimeout(() => {
      submitForm1.style.backgroundColor = 'transparent';
      submitForm1.style.color = 'black';
      submitForm1.style.fontWeight = 'normal';
      errorMsg.style.display = 'none'
    }, 3000)
    return;
  }

  var jsonData = JSON.stringify(jsonObject);

  var url = 'https://adm-conciergerie.com/back/forms'
  // url = 'http://127.0.0.1:8080/forms'
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    submitForm1.style.color = 'white';
    submitForm1.style.fontWeight = 'bold';
    if (xhr.status === 201) {
      submitForm1.style.backgroundColor = 'green';
      setTimeout(() => {
        closeForm()
      }, 3000)
    } else {
      submitForm1.style.backgroundColor = 'red';
      errorMsg.style.display = 'block'
      errorMsg.innerHTML = 'Erreur <br> formulaire'
    }
    setTimeout(() => {
      submitForm1.style.backgroundColor = 'transparent';
      submitForm1.style.color = 'black';
      submitForm1.style.fontWeight = 'normal';
      errorMsg.style.display = 'none'
    }, 3000)
  };
  xhr.send(jsonData);
});

function toggleNavBar() {
  var nav = document.getElementById('nav')
  nav.classList.toggle('show')

  if (window.getComputedStyle(document.body).overflow !== "hidden" || window.getComputedStyle(document.documentElement).overflow !== "hidden") {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
    document.documentElement.style.overflow = "visible";
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
  document.documentElement.style.overflow = "visible"
}

function openForm() {
  toggleNavBar()

  var formDiv = document.getElementById('form-background')
  formDiv.classList.add('show')

  var menuButton = document.getElementById('menu-button')
  menuButton.style.cursor = 'auto';
  menuButton.ontouchstart = null

  document.body.style.overflow = "hidden"
  document.documentElement.style.overflow = "hidden"
}

function closeForm() {
  var formDiv = document.getElementById('form-background')
  formDiv.classList.remove('show')

  var menuButton = document.getElementById('menu-button')
  menuButton.style.cursor = 'pointer';
  menuButton.ontouchstart = toggleNavBar;

  document.body.style.overflow = "visible"
  document.documentElement.style.overflow = "visible"
}
