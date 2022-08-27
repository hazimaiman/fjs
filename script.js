//1)scope

// var b = " can i access this? ";
// function bb(){
//     b= "hello";
// }

//2)root scope (window)
var fun = 5;

function funFunction(){
    //child scope
    var fun = "helloooo";
    console.log (fun);
}
function funerFunction(){
    //child scope
    var fun = "byee";
    console.log (fun);
}
function funestFunction(){
    //child scope
     fun = "hahhhhh";
    console.log (fun);
}
console.log(fun);
funFunction();
funerFunction();
funestFunction();