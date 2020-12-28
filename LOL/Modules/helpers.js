function $g(selector) {
  if (selector.includes("#") && !selector.includes(" ")) {
    //回傳Element
    return document.querySelector(selector);
  }

  //回傳NodeList集合
  let nodeList=document.querySelectorAll(selector);

  return nodeList.length==1?nodeList[0]:nodeList;

  function $c(selector) {
    return document.createElement(selector);
  }
}

  function $log(value) {
    console.log(value);
  }

  function name(params) {
    
  }

  export{$g,displayName,$title,$ex,$log};
  