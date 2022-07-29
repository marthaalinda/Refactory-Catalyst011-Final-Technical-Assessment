function firstFocus() {
  const uid = document.registration.userId.focus();
  return true;
}

const userfirst = (min, max) => {
  let uid = document.registration.firstname;
  let uidlen = uid.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    uid.focus();
    uid.style.border = "5px solid red";
    return true;
  }
};

const userlast = (min, max) => {
  let password = document.registration.lastname;
  let lastLen = password.value.length;
  if (lastLen == 0 || lastLen < min || lastLen >= max) {
    password.focus();
    password.style.border = "5px solid red";
    return true;
  }
};
const userres = (min, max) => {
  let password = document.registration.placeofresidence;
  let lastLen = password.value.length;
  if (lastLen == 0 || lastLen < min || lastLen >= max) {
    password.focus();
    password.style.border = "5px solid red";
    return true;
  }
};
const userocc = (min, max) => {
  let password = document.registration.occupation;
  let lastLen = password.value.length;
  if (lastLen == 0 || lastLen < min || lastLen >= max) {
    password.focus();
    password.style.border = "5px solid red";
    return true;
  }
};
const usernat = (min, max) => {
  let password = document.registration.nationality;
  let lastLen = password.value.length;
  if (lastLen == 0 || lastLen < min || lastLen >= max) {
    password.focus();
    password.style.border = "5px solid red";
    return true;
  }
};

