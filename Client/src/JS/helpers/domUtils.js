/* eslint-disable no-undef */

export function $(selector, parent) {
  return (parent ? parent : document).querySelector(selector);
}


export function $$(selector, parent) {
  return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
}

export function isInViewport(elem) {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.isInViewport = isInViewport;

export function handleScroll(handler) {
  if (handler && {}.toString.call(handler) === "[object Function]") {
    window.addEventListener("scroll", handler);
  }
}

export function stopHandleScroll(handler) {
  window.removeEventListener("scroll", handler);
}
