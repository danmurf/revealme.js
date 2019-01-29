window.onload = window.revealMe;

/**
 * Convert written out email address to properly formatted address
 * 
 * @param  string text Written out email address ("user at example hyphen domain dot com")
 * 
 * @return string      Properly formatted email address ("user@example-domain.com")
 */
window.getEmail = function(text) {

  return text.replace(/ at /g, "@")
             .replace(/ dot /g, ".")
             .replace(/ hyphen /g, "-");
}

/**
 * Obfuscate the middle portion of an email address
 * 
 * @param  string       email Properly formatted email address
 * 
 * @return string             Obfuscated email address
 */
window.obfuscateEmail = function(email) {

  //Calculate the obfuscation points
  var numLettersToObfuscate = Math.floor(email.length / 2);
  var startingPoint = Math.floor(numLettersToObfuscate / 2);

  //Return the obfuscated email address
  return email.substr(0, startingPoint) +
         '...' +
         email.substr(startingPoint+numLettersToObfuscate, email.length);
}

/**
 * Convert the obfuscated email address to a properly formatted email link
 * 
 * @param  object       link Instance of the link to convert
 * 
 * @return void
 */
window.createClickableEmailLink = function(link) {

  //Convert the contents to the proper email address
  link.innerText = window.getEmail(link.getAttribute('data-revealme'));

  //Add the email address href
  link.setAttribute('href', "mailto:"+getEmail(link.getAttribute('data-revealme')));

  link.removeAttribute('onclick');
  link.removeAttribute('data-revealme');
  event.preventDefault();
}

/**
 * Convert all written out email addresses to clickable, obfuscated email addresses
 * 
 * @return void
 */
window.revealMe = function() {
    var revealme = document.getElementsByClassName("revealme");
    for (i = 0; i < revealme.length; i++) {
      //Create a link and store the email address
      revealme[i].innerHTML = '<a href="#" data-revealme="'+revealme[i].innerText+'" onclick="window.createClickableEmailLink(this)">'+window.obfuscateEmail(window.getEmail(revealme[i].innerText))+' (click to reveal)</a>';
    }
}
