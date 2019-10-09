
export function $(selector, parent) {
  return (parent ? parent : document).querySelector(selector);
}


export function $$(selector, parent) {
  return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
}
