const form = document.getElementById('form');

form.addEventListener('submit', (Event) => {
  // Error Fields
  let errSName = document.getElementById('errSName');
  let errGName = document.getElementById('errGName');
  let errRes = document.getElementById('errRes');
  let errOccup = document.getElementById('errOccup');
  let errNat = document.getElementById('errNat');
  let errCat = document.getElementById('errCat');
  // InputFields
  let surname = document.register.surname;
  let givename = document.register.givename;
  let residence = document.register.residence;
  let occup = document.register.occup;
  let ntnlty = document.register.ntnlty;
  let cat = document.register.cat;

  // Regexp
  let letters = /^[A-Za-z]+$/;
  let num = /^[0-9]+$/;

  const errStyle = 'font-size:13px; color:red;';
  const bdrStyle = '2px solid red';

  // Surname Validation.
  if (surname.value.length == 0) {
    surname.focus();
    surname.style.border = bdrStyle;
    errSName.style = errStyle;
    errSName.innerHTML = 'Field must not be left empty.';
    Event.preventDefault();
  } else if (surname.value.length < 2 || surname.value.length > 15) {
    surname.focus();
    surname.style.border = bdrStyle;
    errSName.style = errStyle;
    errSName.innerHTML = `Surname must be between 1 and 16 characters.`;
  } else if (!surname.value.match(letters)) {
    surname.focus();
    surname.style.border = bdrStyle;
    errSName.style = errStyle;
    errSName.innerHTML = 'Surname must be made of strictly alphabet characters.';
  }

  // Given Name Validation
  if (givename.value.length == 0) {
    givename.focus();
    givename.style.border = bdrStyle;
    errGName.style = errStyle;
    errGName.innerHTML = 'Field must not be left empty.';
  } else if (givename.value.length < 2 || givename.value.length > 15) {
    givename.focus();
    givename.style.border = bdrStyle;
    errGName.style = errStyle;
    errGName.innerHTML = 'Given Name must be between 1 and 16 characters.';
  } else if (!givename.value.match(letters)) {
    givename.focus();
    givename.style.border = bdrStyle;
    errGName.style = errStyle;
    errGName.innerHTML = 'Given Name must be made of strictly alphabet characters.';
  }

  // Residence Validation
  if (residence.value.length == 0) {
    residence.focus();
    residence.style.border = bdrStyle;
    errRes.style = errStyle;
    errRes.innerHTML = 'Field must not be left empty.';
  } else if (residence.value.length < 2 || residence.value.length > 15) {
    residence.focus();
    residence.style.border = bdrStyle;
    errRes.style = errStyle;
    errRes.innerHTML = 'Residence must be between 1 and 16 characters.';
  } else if (!residence.value.match(letters)) {
    residence.focus();
    residence.style.border = bdrStyle;
    errRes.style = errStyle;
    errRes.innerHTML =
      'Residence must be made of strictly alphabet characters.';
  }

  // Occupation Validation
  if (occup.value.length == 0) {
    occup.focus();
    occup.style.border = bdrStyle;
    errOccup.style = errStyle;
    errOccup.innerHTML = 'Field must not be left empty.';
  } else if (occup.value.length < 6 || occup.value.length > 19) {
    occup.focus();
    occup.style.border = bdrStyle;
    errOccup.style = errStyle;
    errOccup.innerHTML = 'Occupation must be between 5 and 20 characters.';
  } else if (!occup.value.match(letters)) {
    occup.focus();
    occup.style.border = bdrStyle;
    errOccup.style = errStyle;
    errOccup.innerHTML =
      'Occupation must be made of strictly alphabet characters.';
  }

  // Nationality Validation
  if (ntnlty.value.length == 0) {
    ntnlty.focus();
    ntnlty.style.border = bdrStyle;
    errNat.style = errStyle;
    errNat.innerHTML = 'Field must not be left empty.';
  } else if (ntnlty.value.length < 6 || ntnlty.value.length > 19) {
    ntnlty.focus();
    ntnlty.style.border = bdrStyle;
    errNat.style = errStyle;
    errNat.innerHTML = 'Nationality must be between 5 and 20 characters.';
  } else if (!ntnlty.value.match(letters)) {
    ntnlty.focus();
    ntnlty.style.border = bdrStyle;
    errNat.style = errStyle;
    errNat.innerHTML =
      'Nationality must be made of strictly alphabet characters.';
  }

  //  Category Validation
  if (cat.value == '') {
    cat.focus();
    cat.style.border = bdrStyle;
    errCat.style = errStyle;
    errCat.innerHTML = 'Select Patient Category.';
  }

  Event.preventDefault();
  // Event.stopImmediatePropagation()
});