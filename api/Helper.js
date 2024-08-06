export const createElement = (tag, innerHTML = "", attributes = {}) => {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML;
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
};

export const getValue = (id) => {
  return document.getElementById(id).value;
};
 export const getele=(id)=>{
  return document.getElementById(id);
 }