const Validation=()=>{
    let Sur=document.registration.surname;
    let checkerror = document.querySelector('.one');
let Given=document.registration.given;
    // let check = document.querySelector('.two');
    let ddate = document.registration.date;
// let checke = document.querySelector('.three');
let Residence=document.registration.placeofresidence;
// let checker = document.querySelector('.four');
let Occupation=document.registration.occupation;
// let checkerr = document.querySelector('.five');
let Nation=document.registration.nationality;
// let checkerro = document.querySelector('.six');
let cat = document.registration.category;
// let checked = document.querySelector('.seven');

    const surname = /^[a-zA-Z0-9]+$/;
    if(Sur.value.length <3 || !Sur.value.match(surname)){
        Sur.style.border ='2px solid red';
        checkerror.textContent = 'This field is required'
        return false;
}
else{
    Sur.style.border ='2px solid green '
    // return true
}

// givename

    const givename = /^[a-zA-Z0-9]+$/;
    if(Given.value.length <3 || !Given.value.match(givename)){
        Given.style.border ='2px solid red';
        checkerror.textContent = 'This field is required'
        return false;
}
else{
    Given.style.border ='2px solid green '
    // return true
}


if(
    ddate.value == ''

){checkerror.textContent = 'This field is required'
    ddate.style.border ='2px Solid red'
    return false;
}
else {
    ddate.style.border ='2px solid green'
    // return true;
}


const place = /^[a-zA-Z0-9]+$/;
if(Residence.value.length <3 || !Residence.value.match(place)){
    Residence.style.border ='2px solid red';
    checkerror.textContent = 'This field is required'
    return false;
}
else{
Residence.style.border ='2px solid green '
// return true
}

const Occupants= /^[a-zA-Z0-9]+$/;
if(Occupation.value.length <3 || !Occupation.value.match(Occupants)){
    Occupation.style.border ='2px solid red';
    checkerror.textContent = 'This field is required'
    return false;
}
else{
Occupation.style.border ='2px solid green '
// return true
};


const Uganda = /^[a-zA-Z0-9]+$/;
if(Nation.value.length <3 || !Nation.value.match(Uganda)){
    Nation.style.border ='2px solid red';
    checkerror.textContent = 'This field is required'
    return false;
}
else{
Nation.style.border ='2px solid green '
// return true
}


if(
    cat.value == ''

){checkerror.textContent = 'This field is required'
    cat.style.border ='2px Solid red'
    return false;
}
else {
    cat.style.border ='2px solid green'
    // return true;
}




return true;
}



// onblur
const firstFocus =()=>{
    let sale = document.registration.surname.focus();
};

const valSur =() =>{
    let Sur=document.registration.surname;
    let checkerror = document.querySelector('.one');
    const surname = /^[a-zA-Z0-9]+$/;
    if(Sur.value.length <3 || !Sur.value.match(surname)){
        Sur.style.border ='2px solid red';
        checkerror.textContent = 'This field is required'
        return false;
}
else{
    Sur.style.border ='2px solid green '
    return true
}
}

// Givenname
const valGi =() =>{
    let Given=document.registration.given;
    let checkerror = document.querySelector('.two');
    const givename = /^[a-zA-Z0-9]+$/;
    if(Given.value.length <3 || !Given.value.match(givename)){
        Given.style.border ='2px solid red';
        checkerror.textContent = 'This field is required'
        return false;
}
else{
    Given.style.border ='2px solid green '
    return true
}
};
// date
const valDate = () =>{
    let ddate = document.registration.date;
    let checkerror = document.querySelector('.three');
    if(
        ddate.value == ''

    ){checkerror.textContent = 'This field is required'
        ddate.style.border ='2px Solid red'
        return false;
    }
    else {
        ddate.style.border ='2px solid green'
        return true;
    }
    
};

const valPlace =() =>{
    let Residence=document.registration.placeofresidence;
    let checkerror = document.querySelector('.four');
    const place = /^[a-zA-Z0-9]+$/;
    if(Residence.value.length <3 || !Residence.value.match(place)){
        Residence.style.border ='2px solid red';
        checkerror.textContent = 'This field is required'
        return false;
}
else{
    Residence.style.border ='2px solid green '
    return true
}
};


const valOccupation =() =>{
    let Occupation=document.registration.occupation;
    let checkerror = document.querySelector('.five');
    const Occupants= /^[a-zA-Z0-9]+$/;
    if(Occupation.value.length <3 || !Occupation.value.match(Occupants)){
        Occupation.style.border ='2px solid red';
        checkerror.textContent = 'This field is required'
        return false;
}
else{
    Occupation.style.border ='2px solid green '
    return true
}
};


const valNation =() =>{
    let Nation=document.registration.nationality;
    let checkerror = document.querySelector('.six');
    const Uganda = /^[a-zA-Z0-9]+$/;
    if(Nation.value.length <3 || !Nation.value.match(Uganda)){
        Nation.style.border ='2px solid red';
        checkerror.textContent = 'This field is required'
        return false;
}
else{
    Nation.style.border ='2px solid green '
    return true
}
};


const valCat = () =>{
    let cat = document.registration.category;
    let checkerror = document.querySelector('.seven');
    if(
        cat.value == ''

    ){checkerror.textContent = 'This field is required'
        cat.style.border ='2px Solid red'
        return false;
    }
    else {
        cat.style.border ='2px solid green'
        return true;
    }
    
};




























 // const valNin =() =>{
    //     const nin = document.registration.nationalid;
    //     const ninValid = /^[a-zA-Z0-9]+$/;
    //     if(nin.value.match(ninValid) && nin.value.length == 14){
    //         nin.style.border ='2px solid white';
    //         return true; 
    //     }
    //     else{
    //         nin.style.border='2px solid red';
    //         return false;
    //     }
    // };
