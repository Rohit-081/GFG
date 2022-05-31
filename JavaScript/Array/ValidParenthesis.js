var isValid = function(s) {
  let arr = s.split("") // split the string
  if (arr.length <= 1) return false
  
  let stack = [];
  let obj = {
    "{": "}", 
    "[": "]", 
    "(": ")"
  }
  let keys = ["{", "[", "("]
  
  for (let i = 0; i< arr.length; i++){
    const elem = arr[i]
    
    if (keys.includes(elem)){
      stack.push(elem)
    } 
    else {
      if (obj[stack.pop()] !== elem) return false
    }
  }
return stack.length === 0
};


isValid("()[]{}");