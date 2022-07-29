const Validation=()=>{
    let Sur=document.registration.surname;
    let checkerror = document.querySelector('.one');
    let Given=document.registration.given;
    let check = document.querySelector('.two');
    let ddate = document.registration.date;
    let checke = document.querySelector('.three');
    let Residence=document.registration.placeofresidence;
    let checker = document.querySelector('.four');
    let Occupation=document.registration.occupation;
    let checkerr = document.querySelector('.five');
    let Nation=document.registration.nationality;
    let checkerro = document.querySelector('.six');
    let cat = document.registration.category;
    let checked = document.querySelector('.seven');
    
        const surname = /^[a-zA-Z0-9]+$/;
        if(Sur.value.length <16 || !Sur.value.match(surname)){
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
        if(Given.value.length <16 || !Given.value.match(givename)){
            Given.style.border ='2px solid red';
            check .textContent = 'This field is required'
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
    if(Residence.value.length <20 || !Residence.value.match(place)){
        Residence.style.border ='2px solid red';
        checkerror.textContent = 'This field is required'
        return false;
    }
    else{
    Residence.style.border ='2px solid green '
    // return true
    }
    
    const Occupants= /^[a-zA-Z0-9]+$/;
    if(Occupation.value.length <50 || !Occupation.value.match(Occupants)){
        Occupation.style.border ='2px solid red';
        checkerror.textContent = 'This field is required'
        return false;
    }
    else{
    Occupation.style.border ='2px solid green '
    // return true
    };
    
    
    const Uganda = /^[a-zA-Z0-9]+$/;
    if(Nation.value.length <20 || !Nation.value.match(Uganda)){
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
    
    
    
   