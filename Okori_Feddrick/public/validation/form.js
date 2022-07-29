//importing input fields 
let firstname = document.getElementById('first_name').value;
let lastname = document.getElementById('given_name').value;
let dob = document.getElementById('dob').value;
let residence = document.getElementById('residence').value;
let occupation = document.getElementById('occupation').value;
let nationality = document.getElementById('nationality').value;
let select = document.getElementById('form-select').value;

surnameVal = (firstField, errorname) => {
    if (firstField.value == 0) {
        errorname.innerHTML = 'This field is required';
        errorname.style.color = 'red';
        errorname.style.fontSize = '12px';
        return false;
    } else {
        errorname.innerHTML = '';
        return true;
    }
}
lastnameVal = (lastField, errorlast) => {
    if (lastField.value == 0) {
        errorlast.innerHTML = 'This field is required';
        errorlast.style.color = 'red';
        errorlast.style.fontSize = '12px';
        return false;
    } else {
        errorlast.innerHTML = '';
        return true;
    }
}
dateVal = (dateField, errordate) => {
    if (dateField.value == 0) {
        errordate.innerHTML = 'Select date of birth';
        errordate.style.color = 'red';
        errordate.style.fontSize = '12px';
        return false;
    } else {
        errordate.innerHTML = '';
        return true;
    };
};
residenceVal = (residenceField, errorresidence) => {
    if (residenceField.value == 0) {
        errorresidence.innerHTML = 'This field is required';
        errorresidence.style.color = 'red';
        errorresidence.style.fontSize = '12px';
        return false;
    } else {
        errorresidence.innerHTML = '';
        return true;
    }
}


occupationVal = (occupationField, errorroccupation) => {
    if (occupationField.value == 0) {
        errorroccupation.innerHTML = 'This field is required';
        errorroccupation.style.color = 'red';
        errorroccupation.style.fontSize = '12px';
        return false;
    } else {
        errorroccupation.innerHTML = '';
        return true;
    }

}

nationalVal = (nationalField, errornational) => {
    if (nationalField.value == 0) {
        errornational.innerHTML = 'This field is required';
        errornational.style.color = 'red';
        errornational.style.fontSize = '12px';
        return false;
    } else {
        errornational.innerHTML = '';
        return true;
    }
}

categoryVal = (categoryField, errorcategory) => {
    if (categoryField.value == 'default') {
        errorcategory.innerHTML = 'Select Patient Category';
        errorcategory.style.color = 'red';
        errorcategory.style.fontSize = '12px';
        return false;
    } else {
        errorcategory.innerHTML = '';
        return true;
    }
}


onSubmit = (errorname, errorlast, errordate, errorresidence, errorroccupation, errornational, errorcategory) => {
    if (firstname == 0 || lastname == 0 || dob == 0 || residence == 0 || occupation == 0 || nationality == 0 || errorcategory=='default'){
        errorname.innerHTML = 'This field is required';
        errorlast.innerHTML = 'This field is required';
        errordate.innerHTML = 'Select date of birth';
        errorresidence.innerHTML = 'This field is required';
        errorroccupation.innerHTML = 'This field is required';
        errornational.innerHTML = 'This field is required';
        errorcategory.innerHTML = 'Select Patient Category';

        return false;

    } else {
        errorname.innerHTML = '';
        errorlast.innerHTML = '';
        errordate.innerHTML = '';
        errorresidence.innerHTML = '';
        errorroccupation.innerHTML = '';
        errornational.innerHTML = '';
        errorcategory.innerHTML = 'Select Patient Category';

        return true;
    }
}
