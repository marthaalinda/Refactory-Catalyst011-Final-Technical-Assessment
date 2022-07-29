const firstFocus = ()=>{
    document.covidForm.surname.focus();
    
}
// validate surname;
const validSname = ()=>{
    const surname = document.covidForm.surname;
    const err1 = document.getElementById('err1');
    const submitBtn = document.querySelector('#regbtn');
    const stringRegx = /^[a-zA-Z\-\']+$/;
    if(surname.value.length <=1 || surname.value.length >=16){
        surname.style.border = '2px solid red';
        err1.innerHTML = "This Field is Required"
        // submitBtn.disabled = true;
        return false;
    }else if(!surname.value.match(stringRegx)){
        surname.style.border = '2px solid red';
        err1.innerHTML = "Enter Valid name characters"
        // submitBtn.disabled = true;
        return false;
    }
    else{
        surname.style.border = '2px solid green';
        submitBtn.disabled = false;
    }
    return true;
}

// validate given name
const validGname = ()=>{
    const givenName = document.covidForm.givenName;
    const err2 = document.getElementById('err2');
    const stringRegx = /^[a-zA-Z\-\']+$/;
    if(givenName.value.length <=1 ||givenName.value.length >=16){
        givenName.style.border = '2px solid red'
        err2.innerHTML = 'This Field is required!'
        return false;
    }else if(!givenName.value.match(stringRegx)){
        givenName.style.border = '2px solid red'
        err2.innerHTML = 'Enter Valid name characters'
        return false;
    }
    else{
        givenName.style.border = '2px solid green'
        err2.innerHTML = ''
    }
    return true;
}

const validDOB= ()=>{
    const birthDayDate = document.covidForm.dob.value;
    const err10 = document.getElementById('err10');
   
    const ageInYears = moment().diff(new Date(birthDayDate), 'years');
    console.log(ageInYears);
    if(ageInYears <= 1){
        dob.style.border = '2px solid red'
        err10.innerHTML = 'Children are not allowed!'
        return false;
    }
    
    else{
        dob.style.border = '2px solid green'
        err10.innerHTML = ''
    }
    console.log(ageInYears);
    return true;
}
// place of residence
const validResidence = ()=>{
    const residence = document.covidForm.residence;
    const err3 = document.getElementById('err3');
    const stringRegx = /^[a-zA-Z\-\']+$/;
    if(residence.value.length <=1 || residence.value.length >=20){
        residence.style.border = '2px solid red'
        err3.innerHTML = 'This Field is Required!'
        return false;
    }else if(!residence.value.match(stringRegx)){
        residence.style.border = '2px solid red'
        err3.innerHTML = 'Please enter alphabet characters'
        return false;
    }
    else{
        residence.style.border = '2px solid green'
        err3.innerHTML = ''
    }
    return true;
}

// validate occumpation
const validOccupation = ()=>{
    const job = document.covidForm.job;
    const err4 = document.getElementById('err4');
    const stringRegx = /^[a-zA-Z\-\']+$/;
    if(job.value.length <5 || job.value.length >=50){
        job.style.border = '2px solid red'
        err4.innerHTML = 'This Field is Required!'
        return false;
    }
    else if(!job.value.match(stringRegx)){
        job.style.border = '2px solid red'
        err4.innerHTML = 'Please enter alphabet characters!'
        return false;
    }
    else{
        job.style.border = '2px solid green'
        err4.innerHTML = ''
    }
    return true;
}



// valid nationality

const validNationality = ()=>{
    const nationality = document.covidForm.nationality;
    const err5 = document.getElementById('err5');
    const stringRegx = /^[a-zA-Z\-\']+$/;
    if(nationality.value.length <=5||nationality.value.length >=20){
        nationality.style.border = '2px solid red'
        err5.innerHTML = 'This Field is Required'
        return false;
    }else if(!nationality.value.match(stringRegx)){
        nationality.style.border = '2px solid red'
        err5.innerHTML = 'Please enter alphabet characters!'
        return false;
    }
    else{
        nationality.style.border = '2px solid green'
        err5.innerHTML = ''
    }
    return true;
}

const validGender = ()=>{
    const gender = document.covidForm.gender;
    const err6 = document.getElementById('err6');
    if(!gender.checked.value == 'male' || !gender.checked.value == 'female'){
        err6.innerHTML = 'error';
        return false
    }else{
        err6.innerHTML = '';
    }
    return true;
}

const validCat = ()=>{
    const category = document.covidForm.category;
    const err7 = document.getElementById('err7');
    if(category.value == 'default'){
        category.style.border = '2px solid red'
        err7.innerHTML = 'Please select a category!';
        return false;
    }else{
        category.style.border = '2px solid green'
        err7.innerHTML = '';
    }
    return true;
}

const validInput = (e)=>{
   if(!validSname() ||
    !validGname() ||
    !validResidence() ||
    !validOccupation() ||
    !validNationality() ||
    !validCat()){
        return false;
    }else{
        
    }
    var myText = "Registered Successfully";
    alert (myText);
    return true
  

   
}
