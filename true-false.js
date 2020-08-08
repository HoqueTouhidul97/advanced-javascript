//false
// 0
// ""
// undefined
//NaN - not a number
// null these are always false condition

//truthy
// "0",   " " , [] ,{} , "false"
let name = null;
console.log(name);
if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}