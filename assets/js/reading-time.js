/**
 * Little Javascript snippet for calculating the reading time of an article
 * by Tim Franssen
 */

const wordsPerMinute = 200;

window.addEventListener('DOMContentLoaded', () => {
  const indicator = document.getElementById("reading-time");
  if ( !indicator ) return;
  const text = document.querySelector('section.page').innerText;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  indicator.innerText = minutes;
});
