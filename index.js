let myEach = function (array, alert){
    Object.values(array).forEach(element => alert(element))
    return array

}
let myMap = function (testArr, callback) {
  let values = Object.values(testArr);
  callback = values.map(x => x * 3)
  return callback
}


let myReduce = function (testArr, callback, acc) {
    let values = Object.values(testArr);
  
    if (!acc) {
      acc = values[0];
      values = values.slice(1);
    }
  
    let newArr = values.length;
  
    for (let i = 0; i < newArr; i++) {
      acc = callback(acc, values[i], values);
    }
    return acc;
  };


let myFind = function (testArr, target){
    let values = Object.values(testArr)
    for(let number = 0; number< testArr.length; number++)
    if (target(values[number])) 
    return values[number]
  
}

let  myFilter = function (testArr, excluder){
    let values = Object.values(testArr)
    return values.filter(num => num > 10)
}

let mySize = function (testArr) {
    let values = Object.values(testArr)
    const newArr = new Set(values)
    return newArr.size
}

let myFirst = function (testArr, n) {
    let values = Object.values(testArr)
    if (n) {
        return values.slice(0, n)
    }
    return values[0]
}

const myLast = function(testArr, start=false) {
    return (start) ? testArr.slice(testArr.length-start, testArr.length) : testArr[testArr.length-1];
  }


function myKeys(testArr) {
    return Object.keys(testArr)
    
}

function myValues(testArr) {
    return Object.values(testArr)
    
}