/**
 * Convert written out email address to properly formed address
 **/
function getEmail(text) {

  return text.replace(/ at /g, "@")
             .replace(/ dot /g, ".")
             .replace(/ hyphen /g, "-");
}

/**
 * Obfuscate the middle portion of an email address
 **/
function obfuscateEmail(email) {

  //Calculate the obfuscation points
  var numLettersToObfuscate = Math.floor(email.length / 2);
  var startingPoint = Math.floor(numLettersToObfuscate / 2);

  //Return the obfuscated email address
  return email.substr(0, startingPoint) +
         '...' +
         email.substr(startingPoint+numLettersToObfuscate, email.length);
}

function createClickableEmailLink(link) {

  //Convert the contents to the proper email address
  link.innerText = getEmail(link.getAttribute('data-revealme'));

  //Add the email address href
  link.setAttribute('href', "mailto:"+getEmail(link.getAttribute('data-revealme')));

  link.removeAttribute('onclick');
  link.removeAttribute('data-revealme');
  event.preventDefault();
}

var revealme = document.getElementsByClassName("revealme");

for (i = 0; i < revealme.length; i++) {

  //Create a link and store the email address
  revealme[i].innerHTML = '<a href="#" data-revealme="'+revealme[i].innerText+'" onclick="createClickableEmailLink(this)">'+obfuscateEmail(getEmail(revealme[i].innerText))+' (click to reveal)</a>';
}
