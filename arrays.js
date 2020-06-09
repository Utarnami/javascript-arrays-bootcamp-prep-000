var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
 
function addElementToBeginningOfArray(chocolateBars, milkyWay){
  return [milkyWay,... chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, milkyWay){
  return chocolateBars.unshift(milkyWay)
}