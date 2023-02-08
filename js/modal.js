
let first = document.querySelector("#first");
let last = document.querySelector("#last");
let email = document.querySelector("#email");
let birthdate = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");
let location1 = document.querySelector("#location1");
let location2 = document.querySelector("#location2");
let location3 = document.querySelector("#location3");
let location4 = document.querySelector("#location4");
let location5 = document.querySelector("#location5");
let location6 = document.querySelector("#location6");
let checkbox1 = document.querySelector("#checkbox1");
let checkbox2 = document.querySelector("#checkbox2");
let locations = document.getElementsByName("location");


let ValPrenom = document.querySelector("#ValPrenom");
let ValNom = document.querySelector("#ValNom");
let ValMail = document.querySelector("#ValMail");
let ValBirth = document.querySelector("#ValBirth");
let ValQte = document.querySelector("#ValQte");
let ValCheck = document.querySelector("#ValCheck");
let ValCond = document.querySelector("#ValCond");
let bouton = document.querySelector("#myBtn");
let background = document.querySelector(".bground");
let form = document.querySelector("#form");

let reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;





function radio() {

  ValCheck.innerText = "";
  if (location1.checked !== false || location2.checked !== false || location3.checked !== false || location4.checked !== false || location5.checked !== false || location6.checked !== false) {
    return true;
  } else {
    ValCheck.innerText = "Vous devez choisir une option.";
    return false;
  }
}

function nom() {
  if (last.value == "") {
    ValNom.innerText = "Veuillez entrer le nom";
    return false;
  } else if (last.value.length < 2) {
    ValNom.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    last.focus();
      return false;
    } else {
      ValNom.innerText = "";
      return true;
    };
}

function prenom() {
  if (first.value == "") {
  ValPrenom.innerText = "Veuillez entrer le prenom";
  return false;
  } else if (first.value.length < 2) {
    ValPrenom.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prenom.";
    first.focus();
    return false;
  } else {
    ValPrenom.innerText = "";
    return true;
  };
}

// function mail() {
//   if (email.value.indexOf("@", 0) < 0) {
//     ValMail.innerText = "L'adresse email doit contenir un @.";
//     email.focus();
//     return false;
//   } else if (email.value.indexOf(".", 0) < 0) {
//     ValMail.innerText = "L'adresse email doit contenir un . suivis de l'extension";
//     email.focus();
//     return false;
//   } else {
//     ValMail.innerText = "";
//     return true;
//   }
// }


function mail() {

  if (reg.test(email.value) == false) {
    ValMail.innerText = "L'adresse email doit contenir un @ et un point suivis de l'extention.";
    email.focus();
    return false; 
  } else {
    ValMail.innerText = "";
    return true;
  }
}



function date() {
  if (birthdate.value == "") {
    ValBirth.innerText = "Vous devez entrer votre date de naissance.";
    ValBirth.focus();
    return false;
  } else {
    let entrer = Date.parse(birthdate.value); //date entrer timestamp transform
    let main = new (Date);//date de maintenant pas en timestamp
    let timestampMain = Date.parse(main); //timestamp transform
    let future = new Date("Thu Jan 1 1970 00:00:39 GMT+0100 (West Africa Standard Time)");
    let timestampPasse = Date.parse(future);
    if (entrer > timestampMain) {
      ValBirth.innerText = "vous ne pouvez pas selectionner une date du future!";
      birthdate.focus();
      return false;
    } else if (timestampPasse > entrer) {
      ValBirth.innerText = "la date doit etre supérieur a 1970!";
      birthdate.focus();
      return false;
    } else {
      ValBirth.innerText = "";
      return true;
    }
  }
}

function qte() {
  if (quantity.value.trim() == "") {
    ValQte.innerText = "la quantité ne doit pas être vide";
    quantity.focus();
    return false;
  } else if (quantity.value < 1 && quantity.value > 100) {
    ValQte.innerText = "la quantité doit être comprise entre 0 et 99";
    quantity.focus();
    return false;
  } else if (quantity.value > 0 && quantity.value < 100) {
    ValQte.innerText = "";
    return true;
  }
}

function checkbox() {
  if (!checkbox1.checked) {
    console.log(checkbox1.value);
    ValCond.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
    checkbox1.focus();
    return false;
  } else if (checkbox1.checked) {
    ValCond.innerText = "";
    return true;
  };
}


form.addEventListener('submit',function(e){
  e.preventDefault();
  nom();
  prenom();
  mail();
  date();
  qte();
  radio();
  checkbox();
})


//function validate() {
  // nom();
  // prenom();
  // mail();
  // date();
  // qte();
  // radio();
  // checkbox();

  // if (nom() == true && prenom() == true && mail() == true && date() == true && qte() == true && radio() == true && checkbox() == true) {
  //   return true;
  // } else {
  //   return false;
  // };

//}




function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


function close() {

  modalbg.style.display = "none";
  return true;
}


let modal = document.querySelector("#myModal");
let btn = document.querySelector("#myBtn");
let span = document.querySelector(".close");

btn.onclick = function () {
 if (nom() == true && prenom() == true && mail() == true && date() == true && qte() == true && radio() == true && checkbox() == true) {
    modal.style.display = "block";
  } 
}

span.onclick = function () {
  modal.style.display = "none";
}

function cl() {
  modal.style.display = "none";
}