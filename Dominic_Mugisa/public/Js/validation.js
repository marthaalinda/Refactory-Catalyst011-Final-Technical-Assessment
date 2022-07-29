  const patientSurname = () =>{
    let surname = document.registration.surname;
    let nameLen = surname.value.length;
    if (nameLen == 0 || nameLen < 1 || nameLen > 16){
      surname.focus();
      surname.style.border = "2px solid red";
      // alert('');
    }
    let letters = /^[A-Za-z]+$/;
    if (surname.value.match(letters)) {
      return true;
    } else {
      surname.focus();
      surname.style.border = "2px solid red";
      // alert('');
    }
  };
  const patientGivenname = () =>{
    let givenname = document.registration.givenname;
    let nameLen = givenname.value.length;
    if (nameLen == 0 || nameLen < 1 || nameLen > 16){
      givenname.focus();
      givenname.style.border = "2px solid red";
      // alert('');
    }
    let letters = /^[A-Za-z]+$/;
    if (givenname.value.match(letters)) {
      return true;
    } else {
      givenname.focus();
      givenname.style.border = "2px solid red";
      // alert('');
    }
  };
//   const dateOfBirth = () =>{
//     let dob = document.registration.dob;
//     let dobVal = dob.value;
//     if (dobVal == 0 || nameLen < 10 || nameLen > 25){
//       dob.focus();
//       dob.style.border = "2px solid red";
//       // alert('');
//     }
//   };
  const placeOFResidence = () =>{
    let residence = document.registration.residence;
    let nameLen = residence.value.length;
    if (nameLen == 0 || nameLen < 1 || nameLen > 20){
      residence.focus();
      residence.style.border = "2px solid red";
      // alert('');
    }
    let letters = /^[A-Za-z]+$/;
    if (residence.value.match(letters)) {
      return true;
    } else {
      residence.focus();
      residence.style.border = "2px solid red";
      // alert('');
    }
  };
  const patientOccupation = () =>{
    let occupation = document.registration.occupation;
    let nameLen = occupation.value.length;
    if (nameLen == 0 || nameLen < 5 || nameLen > 50){
      occupation.focus();
      occupation.style.border = "2px solid red";
      // alert('');
    }
    let letters = /^[A-Za-z]+$/;
    if (occupation.value.match(letters)) {
      return true;
    } else {
      occupation.focus();
      occupation.style.border = "2px solid red";
      // alert('');
    }
  };
  const patientNationality = () =>{
    let nationality = document.registration.nationality;
    let nameLen = nationality.value.length;
    if (nameLen == 0 || nameLen < 5 || nameLen > 20){
      nationality.focus();
      nationality.style.border = "2px solid red";
      // alert('');
    }
    let letters = /^[A-Za-z]+$/;
    if (nationality.value.match(letters)) {
      return true;
    } else {
      nationality.focus();
      nationality.style.border = "2px solid red";
      // alert('');
    }
  };
  const patientGender = () =>{
    let genderMale = document.registration.gendermale;
    let genderValMale = genderMale.value;
    let genderFemale = document.registration.gendermale;
    let genderValFemale = genderFemale.value;
    if (genderValMale != 'Male' && genderValFemale != 'Female'){
      genderMale.focus();
      genderMale.style.border = "2px solid red";
      genderFemale.focus();
      genderFemale.style.border = "2px solid red";
      // alert('');
    }
  };
  const patientCategory = () =>{
    let category = document.registration.category;
    let categoryVal = category.value;
    if (categoryVal != 'Returnee' && categoryVal != 'Contact' && categoryVal != 'Alert' && categoryVal != 'Volunteer'){
      category.focus();
      category.style.border = "2px solid red";
      // alert('');
    }
  };