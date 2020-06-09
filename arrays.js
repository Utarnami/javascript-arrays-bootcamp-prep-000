var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
 
function addElementToBeginningOfArray(chocolateBars, milkyWay){
  return [milkyWay,... chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, milkyWay){
  chocolateBars.unshift(milkyWay);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, milkyWay){
  return [...chocolateBars, milkyWay];
}

function destructivelyAddElementToEndOfArray(chocolateBars,milkyWay){
  chocolateBars.push(milkyWay);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars.shift()){
  return chocolateBars();
}