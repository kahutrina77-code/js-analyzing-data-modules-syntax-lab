require('datejs'); //from instructions

function combineUsers(...args) {

  //initialize the return object
  const combinedObject = {
  users: []
};
//step3: loop through the args
for (const arr of args){
  //merge arrays using spread operator
combinedObject.users = [...combinedObject.users, ...arr];
}
//step5:get todays date
combinedObject.merge_date = new Date().toString("M/d/yyyy");

//return the object
return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};