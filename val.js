// Initialising
// Produce form
let pdtNameField = document.querySelector("#pdt-name");
let byrNameField = document.querySelector("#dlr-name");
let pdTypeField = document.querySelector("#pd-type");
let pdTimeField = document.querySelector("#pd-time");
let dlrTypeField = document.querySelector("#dlr-type");
// Sales form
let spdtNameField = document.querySelector("#spdt-name");
let sbyrNameField = document.querySelector("#byr-name");
let agtNameField = document.querySelector("#agt-name");
// Credit Sales form
let cbyrNameField = document.querySelector("#byr-name");
let ninField = document.querySelector("#ni-num");
let locField = document.querySelector("#loc-field");
// let pdTypeField = document.querySelector("#pd-type");
// let pdTimeField = document.querySelector("#pd-time");
// let dlrTypeField = document.querySelector("#dlr-type");
// let posField = document.querySelector("#pos_field");
// let brField = document.querySelector("#branchfield");

// Regexp
let letters = /^[A-Za-z]+$/;
let num = /^[0-9]+$/;
let alpnum = /^[a-zA-Z0-9]+$/;
let ninExp = /^[A-Z0-9]+$/;

// Create Element
let errDiv = document.createElement("p");

// Style Element
errDiv.style.color = "red";
errDiv.style.fontSize = "13px";
const bdrStyle = "2px solid red";

// Validating Produce Name
const pdtVal = () => {
  let pdtName = document.produce.prodname;
  if (pdtName.value.match(alpnum)) {
    return true;
  } else {
    pdtName.focus();
    pdtName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of alphanumeric characters.`;
    pdtNameField.appendChild(errDiv);
  }
};

// Validating dropdowns
// Product Type
const timeVal = () => {
  let time = document.produce.prodtime;
  if (time.value == "") {
    time.focus();
    time.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    pdTimeField.appendChild(errDiv);
    return false;
  }
  return true;
};
// Product Type
const typeVal = () => {
  let type = document.produce.prodtype;
  if (type.value == "") {
    type.focus();
    type.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    pdTypeField.appendChild(errDiv);
    return false;
  }
  return true;
};
// Dealer Type
const dlrTypeVal = () => {
  let type = document.produce.dlrtype;
  if (type.value == "") {
    type.focus();
    type.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    dlrTypeField.appendChild(errDiv);
    return false;
  }
  return true;
};

// Validating Dealer's Name
const dlrVal = (min) => {
  let byrName = document.produce.dlrname;
  if (byrName.value.match(alpnum) && byrName.value.length > 2) {
    return true;
  } else {
    byrName.focus();
    byrName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
    byrNameField.appendChild(errDiv);
    return false;
  }
};

// Sales Form Validation
// Validating Produce Name
const spdtVal = () => {
  let pdtName = document.sales.prodname;
  if (pdtName.value.match(alpnum)) {
    return true;
  } else {
    pdtName.focus();
    pdtName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of alphanumeric characters.`;
    spdtNameField.appendChild(errDiv);
  }
};
// Buyer's Name
const byrVal = (min) => {
  let byrName = document.sales.byrname;
  if (byrName.value.match(alpnum) && byrName.value.length > 2) {
    return true;
  } else {
    byrName.focus();
    byrName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
    sbyrNameField.appendChild(errDiv);
    return false;
  }
};
// Agent's Name
const agtVal = (min) => {
  let agtName = document.sales.agtname;
  if (agtName.value.match(alpnum) && agtName.value.length > 2) {
    return true;
  } else {
    agtName.focus();
    agtName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
    agtNameField.appendChild(errDiv);
    return false;
  }
};

// Credit Sales Form Validation
// Buyer's Name
const cbyrVal = (min) => {
  let byrName = document.csales.byrname;
  if (byrName.value.match(alpnum) && byrName.value.length > 2) {
    return true;
  } else {
    byrName.focus();
    byrName.style.border = bdrStyle;
    errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
    cbyrNameField.appendChild(errDiv);
    return false;
  }
};
// NIN Validation
const ninVal = () => {
    let nin = document.csales.nin;
    if (nin.value.match(ninExp) && nin.value.length === 14) {
      return true;
    } else {
      nin.focus();
      nin.style.border = bdrStyle;
      errDiv.textContent = `NIN is of 14 characters (numbers and capital letters).`;
      ninField.appendChild(errDiv);
      return false;
    }
}
// Location Validation
const locVal = (min) => {
  let location = document.csales.location;
  if (location.value.match(alpnum) && location.value.length > 2) {
    return true;
  } else {
    location.focus();
    location.style.border = bdrStyle;
    errDiv.textContent = `Location must be made of more than ${min} alphanumeric characters.`;
    locField.appendChild(errDiv);
    return false;
  }
};
