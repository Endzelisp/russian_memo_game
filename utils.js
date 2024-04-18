/**
 * querySelector wrapper function
 * 
 * @param {string} selector 
 * @returns {HTMLElement}
 */

export function getElement(selector) {
  return document.querySelector(selector);
}

/**
 * return a random number between zero and a max number
 * not inclusive
 * @param {number} maxNumber 
 * @returns {number}
 */
export function getRandomNum(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}