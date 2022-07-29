const Validation = () => {  

  let Given = document.registration.givenname;
  let checkerror = document.querySelector(".two");
  const givename = /^[a-zA-Z0-9]+$/;
  if (Given.value.length < 3 || !Given.value.match(givename)) {
    Given.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Given.style.border = "2px solid green ";
  }

  // firstname

  let Surname = document.registration.surname;
  let checkerror1 = document.querySelector(".one");
  const surname = /^[a-zA-Z0-9]+$/;
  if (Surname.value.length < 3 || !Surname.value.match(surname)) {
    Surname.style.border = "2px solid red";
    checkerror1.textContent = "This field is required";
    checkerror1.style.color = "red";
    return false;
  } else {
    Surname.style.border = "2px solid green ";
  }

  // date

  let date = document.registration.date;
  let checkerror2 = document.querySelector(".three");
  if (date.value == "") {
    checkerror2.textContent = "Select date of Birth";
    checkerror2.style.color = "red";
    date.style.border = "2px Solid red";
    return false;
  } else {
    date.style.border = "2px solid green";
  }

  let Place = document.registration.place;
  let checkerror3 = document.querySelector(".four");
  const place = /^[a-zA-Z0-9]+$/;
  if (Place.value.length < 3 || !Place.value.match(place)) {
    Place.style.border = "2px solid red";
    checkerror3.textContent = "This field is required";
    checkerror3.style.color = "red";
    return false;
  } else {
    Place.style.border = "2px solid green ";
    
  }

  let Occupation = document.registration.occupation;
  let checkerror4 = document.querySelector(".five");
  const Occupants = /^[a-zA-Z0-9]+$/;
  if (Occupation.value.length < 3 || !Occupation.value.match(Occupants)) {
    Occupation.style.border = "2px solid red";
    checkerror4.textContent = "This field is required";
    checkerror4.style.color = "red";
    return false;
  } else {
    Occupation.style.border = "2px solid green ";
    
  }

  let Nation = document.registration.nationality;
  let checkerror5 = document.querySelector(".six");
  const Uganda = /^[a-zA-Z0-9]+$/;
  if (Nation.value.length < 3 || !Nation.value.match(Uganda)) {
    Nation.style.border = "2px solid red";
    checkerror5.textContent = "This field is required";
    checkerror5.style.color = "red";
    return false;
  } else {
    Nation.style.border = "2px solid green ";
    // return true;
  }

  let cat = document.registration.category;
  let checkerror6 = document.querySelector(".seven");
  if (cat.value == "") {
    checkerror6.textContent = "Select Patient category";
    checkerror6.style.color = "red";
    cat.style.border = "2px Solid red";
    return false;
  } else {
    cat.style.border = "2px solid green";
   
  }

  return true;
};

// secondname
const val2 = () => {
  let Given = document.registration.givenname;
  let checkerror = document.querySelector(".two");
  const givename = /^[a-zA-Z0-9]+$/;
  if (Given.value.length < 3 || !Given.value.match(givename)) {
    Given.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Given.style.border = "2px solid green ";
    return true;
  }
};
// firstname
const val1 = () => {
  let Surname = document.registration.surname;
  let checkerror = document.querySelector(".one");
  const surname = /^[a-zA-Z0-9]+$/;
  if (Surname.value.length < 3 || !Surname.value.match(surname)) {
    Surname.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Surname.style.border = "2px solid green ";
    return true;
  }
};

// date
const val3 = () => {
  let date = document.registration.date;
  let checkerror = document.querySelector(".three");
  if (date.value == "") {
    checkerror.textContent = "Select date of Birth";
    checkerror.style.color = "red";
    date.style.border = "2px Solid red";
    return false;
  } else {
    date.style.border = "2px solid green";
    return true;
  }
};

const val4 = () => {
  let Place = document.registration.place;
  let checkerror = document.querySelector(".four");
  const place = /^[a-zA-Z0-9]+$/;
  if (Place.value.length < 3 || !Place.value.match(place)) {
    Place.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Place.style.border = "2px solid green ";
    return true;
  }
};

const val5 = () => {
  let Occupation = document.registration.occupation;
  let checkerror = document.querySelector(".five");
  const Occupants = /^[a-zA-Z0-9]+$/;
  if (Occupation.value.length < 3 || !Occupation.value.match(Occupants)) {
    Occupation.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Occupation.style.border = "2px solid green ";
    return true;
  }
};

const val6 = () => {
  let Nation = document.registration.nationality;
  let checkerror = document.querySelector(".six");
  const Uganda = /^[a-zA-Z0-9]+$/;
  if (Nation.value.length < 3 || !Nation.value.match(Uganda)) {
    Nation.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Nation.style.border = "2px solid green ";
    return true;
  }
};

const val7 = () => {
  let cat = document.registration.category;
  let checkerror = document.querySelector(".seven");
  if (cat.value == "") {
    checkerror.textContent = "Select Patient category";
    checkerror.style.color = "red";
    cat.style.border = "2px Solid red";
    return false;
  } else {
    cat.style.border = "2px solid green";
    return true;
  }
};
