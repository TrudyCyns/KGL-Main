// Initialising
let pdtNameField = document.querySelector("#pdt-name");
// let lNameField = document.querySelector("#lname_field");
// let telNoField = document.querySelector("#telnofield");
// let posField = document.querySelector("#pos_field");
// let brField = document.querySelector("#branchfield");

// Regexp
let letters = /^[A-Za-z]+$/;
let num = /^[0-9]+$/;
let alpnum = /^[a-zA-Z0-9]+$/;

// Create Element
let errDiv = document.createElement("p");

// Style Element
errDiv.style.color = "red";
errDiv.style.fontSize = "13px";
const bdrStyle = "2px solid red";

// Validating Produce Name
const pdtName = () => {
    let pdtName = document.register.prodname;
    if (pdtName.value.match(alpnum)) {
      return true;
    } else {
        pdtName.focus();
        pdtName.style.border = bdrStyle;
        errDiv.textContent = `Name must be made of alphanumeric characters.`;
        pdtNameField.appendChild(errDiv);
    }

    
}
