// Initialising...
let fstName = document.register.firstname;
let pos = document.register.position;
let fNameField = document.querySelector("#fname_field");
let lNameField = document.querySelector("#lname_field");
let telNoField = document.querySelector("#telnofield");
let posField = document.querySelector("#pos_field");
let brField = document.querySelector("#branchfield");

// Regexp
let letters = /^[A-Za-z]+$/;
let rent = /^[0-9]+$/;
let alpnum = /^[0-9a-zA-Z.,]+$/;

// Create Element
let errDiv = document.createElement("p");

// Style Element
errDiv.style.color = "red";
errDiv.style.fontSize = "13px";
const bdrStyle = "2px solid red";

// Focusing on first field.
const firstFocus = () => {
  fstName.focus();
  return true;
};

// Validating First Name field.
const fNameVal = (min, max) => {
  let fNameLen = fstName.value.length;

  if (fNameLen == 0) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errDiv.textContent = "Field must not be left empty.";
    fNameField.appendChild(errDiv);
  } else if (fNameLen < min || fNameLen > max) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be between ${min} and ${max} characters.`;
    fNameField.appendChild(errDiv);
  } else if (!fstName.value.match(letters)) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of strictly alphabet characters.`;
    fNameField.appendChild(errDiv);
  }
  return false;
};

// Validating Last Name field.
const lNameVal = (min, max) => {
  let lstName = document.register.lastname;
  let lNameLen = fstName.value.length;
  let letters = /^[A-Za-z]+$/;

  if (lNameLen == 0) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errDiv.textContent = "Field must not be left empty.";
    lNameField.appendChild(errDiv);
  } else if (lNameLen < min || lNameLen > max) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be between ${min} and ${max} characters.`;
    lNameField.appendChild(errDiv);
  } else if (!lstName.value.match(letters)) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of strictly alphabet characters.`;
    lNameField.appendChild(errDiv);
  }
  return false;
};

// Validating Contact field.
const telNoVal = () => {
  let tel = document.register.telnum;
  let num = /^[0-9]+$/;
  let teLen = tel.value.length;

  if (teLen == 10 && tel.value.match(num)) {
    return true;
  } else {
    tel.style.border = bdrStyle;
    tel.focus();
    errDiv.textContent = `Tel. No. must be 10 numbers. Format: 0701234567`;
    telNoField.appendChild(errDiv);
    return false;
  }
};

// Validating Position field.
const posVal = () => {
  let pos = document.register.position;
  if (pos.value == "default") {
    pos.focus();
    pos.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    posField.appendChild(errDiv);
    return false;
  }
  return true;
};

// Validating Branch field.
const brVal = () => {
  let br = document.register.branch;
  if (pos.value == "default") {
    pos.focus();
    pos.style.border = bdrStyle;
    errDiv.textContent = "You must choose an option.";
    posField.appendChild(errDiv);
    return false;
  } else if (pos.value == "mgr" && br.value == "default") {
    br.focus();
    br.style.border = bdrStyle;
    errDiv.textContent = "Managers must choose a branch.";
    brField.appendChild(errDiv);
    return false;
  }
  return true;
};


