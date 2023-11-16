/**
 * Little Javascript snippet for running multiple languages in a single Jekyll blog
 * by Tim Franssen
 */

// What language are we currently in?
const postLanguage = document.querySelector('html').getAttribute('lang');
const currentLanguage = localStorage.getItem("language") || postLanguage;
let selectedLanguage = currentLanguage;

// Is the user requesting a different language?
const parameters = (new URL(document.location)).searchParams;
if ( parameters.has("language") ) {
  const requestedLanguage = parameters.get("language");
  if ( requestedLanguage != currentLanguage ) {
    localStorage.setItem("language", requestedLanguage);
    selectedLanguage = requestedLanguage;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Hide elements with the "wrong" language
  document.querySelectorAll(`[data-lang]`).forEach(item => {
    if ( item.attributes['data-lang']?.textContent != selectedLanguage )
      item.style.display = 'none';
  });

  // Remove class from body to stop hiding everything
  document.body.classList.remove('multilanguage');
});
