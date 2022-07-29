
const firstFocus = ()=>{
    let Sur = document.indexform.surname.focus()
};

const valsurName = (inputField, info1) => {
    let Surname = document.registrationform.surname;
    let sur =  /^[a-zA-Z ]*$/;
    if (inputField.value.length <= 16 || !inputField.value.match(sur)){
        info1.innerHTML = "This field is required";
        info1.style.border = "2px solid red";
        info1.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    }
   
    

};
const valname = (inputField, info2) => {
    let Name = document.indexform.name;
    let Given =  /^[a-zA-Z ]*$/;
    if (inputField.value.length <= 16 || !inputField.value.match(Given)){
        info2.innerHTML = "This field is required";
        info2.style.border = "2px solid red";
        info2.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    }
   
    

};

const valResidence = (inputField, info3) => {
    let Residence = document.indexform.residence;
    let res =  /^[a-zA-Z ]*$/;
    if (inputField.value.length <= 20 || !inputField.value.match(res)){
        info3.innerHTML = "This field is required";
        info3.style.border = "2px solid red";
        info3.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    }
   
    

};
const valOccupation = (inputField, info3) => {
    let Occupation = document.indexform.occupation;
    let occ =  /^[a-zA-Z ]*$/;
    if (inputField.value.length <= 20 || !inputField.value.match(occ)){
        info3.innerHTML = "This field is required";
        info3.style.fontSize = "12px";
        info3.style,border = '2px solid red'

        return false;  
    }
    else {
       inputField.style.border = "2px solid lightblue";
        return true;
    }
   
    

};

const valNationality = (inputField, info5) => {
    let Nationality = document.indexform.nationality;
    let occ =  /^[a-zA-Z ]*$/;
    if (inputField.value.length <= 20 || !inputField.value.match(occ)){
        info5.innerHTML = "This field is required";
        info5.style.fontSize = "12px";
        info5.style.border = '2px solid red'

        return false;  
    }
    else {
    inputField.style.border = "2px solid lightblue";
        return true;
    }
   
    

};

const valGender = (inputField, info6) => {
    let Gender = document.indexform.gender;
        if (inputField.value == "Select"){
        info6.innerHTML = "This field is required";
        info6.style.border = " 2px solid red";
        info6.style.fontSize = "12px"; 
        return false;
        
    }
    else{
        inputField.style.border = "2px solid lightblue";
        return true;  
    }
};

const valCategory = (inputField, info7) => {
    let Gender = document.indexform.gender;
        if (inputField.value == "Select"){
        info7.innerHTML = "This field is required";
        info7.style.border = "2px solid red";
        info7.style.fontSize = "12px"; 
        return false;
        
    }
    else{
        inputField.style.border = "2px solid lightblue";
        return true;  
    }
};