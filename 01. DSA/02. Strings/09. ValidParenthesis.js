var isValid = function(s) {
  let arr = s.split("");
  console.log(arr);
  if (arr.length <= 1) return false
 
  let obj = {
    "{": "}", 
    "[": "]", 
    "(": ")"
  }
  let keys = ["{", "[", "("];
  let stack = [];
  
  for (let i = 0; i < arr.length; i++){
    const elem = arr[i]
    if (keys.includes(elem)){
      stack.push(elem)
    } 
    else {
      if (obj[stack.pop()] !== elem) return console.log(false);
    }
  }
return console.log(stack.length === 0);
};


isValid("()[]{}");