const form = () =>{
  const surname = document.reg.surname
  const givenname = document.reg.givenname
  const dob = document.reg.dob
  const residence = document.reg.residence
  const occupation = document.reg.occupation
  const nationality = document.reg.nationality

  if(surname.value == ""){
      surname.style.border = "1px solid red"
      surnameErr.textContent="This field is required"
      surnameErr.style = "color:red"
      return false
    }else{
      surname.style.border="1px solid green"
    }
  if(givenname.value == ""){
      givenname.style.border = "1px solid red"
      givennameErr.textContent="This field is required"
      givennameErr.style = "color:red"
      return false
    }else{
      gname.style.border="1px solid green"
  }
  if(dob.value == ""){
      dob.style.border = "1px solid red"
      dobErr.textContent="This field is required"
      dobErr.style = "color:red"
      return false
    }else{
      dob.style.border="1px solid green"
  }
  if(residence.value == ""){
      residence.style.border = "1px solid red"
      residenceErr.textContent="This field is required"
      residenceErr.style = "color:red"
      return false
    }else{
      residence.style.border="1px solid green"
  } 
  if(occupation.value == ""){
      occupation.style.border = "1px solid red"
      occupationErr.textContent="This field is required"
      occupationErr.style = "color:red"
      return false
    }else{
      occupation.style.border="1px solid green"
  }
  if(nationality.value == ""){
      nationality.style.border = "1px solid red"
      nationalityErr.textContent="This field is required"
      nationalityErr.style = "color:red"
      return false
    }else{
      nationality.style.border="1px solid green"
  }
}