const validation = () => {  


  
  // firstname

  let Surname = document.registration.surname;
  let checkerror1 = document.querySelector(".one");
  const surname = /^[a-zA-Z0-9]+$/;
  if (Surname.value.length < 1 || !Surname.value.match(surname) || Surname.value.length > 16) {
    Surname.style.border = "2px solid red";
    checkerror1.textContent = "This field is required";
    checkerror1.style.color = "red";
    return false;
  } else {
    Surname.style.border = "2px solid green ";
    checkerror1.textContent = "";
  }

  //given name
  let Given = document.registration.givenname;
  let checkerror = document.querySelector(".two");
  const givename = /^[a-zA-Z0-9]+$/;
  if (Given.value.length < 1 || !Given.value.match(givename) || Given.value.length > 16) {
    Given.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Given.style.border = "2px solid green ";
    checkerror.textContent = "";
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
    checkerror2.textContent = "";
  }

  let Place = document.registration.place;
  let checkerror3 = document.querySelector(".four");
  const place = /^[a-zA-Z0-9]+$/;
  if (Place.value.length < 1 || !Place.value.match(place) || Place.value.length > 20) {
    Place.style.border = "2px solid red";
    checkerror3.textContent = "This field is required";
    checkerror3.style.color = "red";
    return false;
  } else {
    Place.style.border = "2px solid green ";
    checkerror3.textContent = "";
    
  }

  let Occupation = document.registration.occupation;
  let checkerror4 = document.querySelector(".five");
  const Occupants = /^[a-zA-Z0-9]+$/;
  if (Occupation.value.length < 5 || !Occupation.value.match(Occupants) || Occupation.value.length > 50) {
    Occupation.style.border = "2px solid red";
    checkerror4.textContent = "This field is required";
    checkerror4.style.color = "red";
    return false;
  } else {
    Occupation.style.border = "2px solid green ";
    checkerror4.textContent = "";
  }

  let Nation = document.registration.nationality;
  let checkerror5 = document.querySelector(".six");
  const Uganda = /^[a-zA-Z0-9]+$/;
  if (Nation.value.length < 5 || !Nation.value.match(Uganda) || Nation.value.length > 20 ) {
    Nation.style.border = "2px solid red";
    checkerror5.textContent = "This field is required";
    checkerror5.style.color = "red";
    return false;
  } else {
    Nation.style.border = "2px solid green ";
    checkerror5.textContent = "";
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
    checkerror6.textContent = ""; 
  }

  return true;
};

// secondname
const val2 = () => {
  let Given = document.registration.givenname;
  let checkerror = document.querySelector(".two");
  const givename = /^[a-zA-Z0-9]+$/;
  if (Given.value.length < 1 || !Given.value.match(givename) || Given.value.length > 16) {
    Given.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Given.style.border = "2px solid green ";
    checkerror.textContent = "";
    // return true;
  }
};
// firstname
const val1 = () => {
  let Surname = document.registration.surname;
  let checkerror = document.querySelector(".one");
  const surname = /^[a-zA-Z0-9]+$/;
  if (Surname.value.length < 1 || !Surname.value.match(surname) || Surname.value.length > 16) {
    Surname.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Surname.style.border = "2px solid green ";
    checkerror.textContent = "";
    // return true;
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
    checkerror.textContent = "";
    // return true;
  }
};
//
const val4 = () => {
  let Place = document.registration.place;
  let checkerror = document.querySelector(".four");
  const place = /^[a-zA-Z0-9]+$/;
  if (Place.value.length < 1 || !Place.value.match(place) || Place.value.length > 20) {
    Place.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Place.style.border = "2px solid green ";
    checkerror.textContent = "";
    // return true;
  }
};
//
const val5 = () => {
  let Occupation = document.registration.occupation;
  let checkerror = document.querySelector(".five");
  const Occupants = /^[a-zA-Z0-9]+$/;
  if (Occupation.value.length < 5 || !Occupation.value.match(Occupants) || Occupation.value.length > 50) {
    Occupation.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Occupation.style.border = "2px solid green ";
    checkerror.textContent = "";
    // return true;
  }
};
//
const val6 = () => {
  let Nation = document.registration.nationality;
  let checkerror = document.querySelector(".six");
  const Uganda = /^[a-zA-Z0-9]+$/;
  if (Nation.value.length < 5 || !Nation.value.match(Uganda) || Nation.value.length > 20) {
    Nation.style.border = "2px solid red";
    checkerror.textContent = "This field is required";
    checkerror.style.color = "red";
    return false;
  } else {
    Nation.style.border = "2px solid green ";
    checkerror.textContent = "";
    // return true;
  }
};
//
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
    checkerror.textContent = "";
    //  return true;
  }
};
