/**
 * Little Javascript snippet for running multiple languages in a single Jekyll blog
 * by Tim Franssen
 */

// What language are we currently in?
const currentLanguage = localStorage.getItem("language") || "en";
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

// Only show the elements with `data-lang={selectedLanguage}`, hide the others
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(`[data-lang]`).forEach(item => {
    item.style.display =
      item.attributes['data-lang']?.textContent == selectedLanguage
      ? 'block'
      : 'none';
  });
});
