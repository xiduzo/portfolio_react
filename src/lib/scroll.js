// Scroll control functions. Taken from https://stackoverflow.com/a/4770179.
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
const preventDefault = e => {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
};
const preventDefaultForScrollKeys = e => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
};
export const disableScroll = () => {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
};
export const enableScroll = () => {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
};
