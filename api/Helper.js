export const createEle = (tag, innerHTML = "", attributes = {}) => {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML;
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
};

export const getVal = (id) => {
  return document.getElementById(id).value;
};
 export const getele=(id)=>{
  return document.getElementById(id);
 }
 export const createTag=(tagname,value)=>{
  let tag=document.createElement(tagname)
  tagname=="img" ? tag.src=value :tag.innerHTML=value
  return tag
}