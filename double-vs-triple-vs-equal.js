// == will not check the type such as first = 2 and second ='2' here first==second will be true although second type is string.but if we compare first === second it will become false as we know === checks type
const first = 2;
const second =3;
if(first == second){
    console.log("condition is true");
} 
else{
    console.log("condition is false");
}