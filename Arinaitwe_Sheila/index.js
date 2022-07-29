const firstFocus =()=>{
    let sale = document.registration.surname.focus();
};
const valSur =() =>{
    let Sur=document.registration.surname;
    let checkerror = document.querySelector('.one');
    const surname = /^[a-zA-Z0-9]+$/;
    if(Sur.value.length<16 || !Sur.value.match(surname)){
        Sur.style.border ='2px solid red';
        checkerror.textContent = 'This field is required'
        return false;
}
else{
    Sur.style.border ='2px solid green '
    return true
}
}
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