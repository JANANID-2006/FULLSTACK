function hello(){
    console.log("Hello js");
}
hello();
function add(a,b){
    console.log(a+b);
}
add(1,2);
function displayAnotherFunction(func){
          func(1,2);
}
displayAnotherFunction(add);
let varFunc=add;
varFunc(1,4);
//anonymous function inside a variable
let newFuncVar = function(){
    console.log("Variable function");
};
newFuncVar();
let arrowFuncVar = () => {
    console.log("Arrow Functions");
};
arrowFuncVar();