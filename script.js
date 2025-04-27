
document.getElementById("demo").innerHTML="hello this is nifla"
function myfunction(){

    document.getElementById("helo").innerHTML="hello world";

}


function nifla(p1,p2){

    return p1*p2
    
}

document.getElementById("nif").innerHTML=nifla(5,100);
document.getElementById("col").style.color="red";

// document.write("<br>this is new world<br>");
// 
// document.write(" <br>")
// document.write(6+3)

window.alert("this is ok")

function code(){

    let x=2;
    var y=3;
    document.getElementById("hi").innerHTML=x;

}




let x=5;
let y=7;

let total=x+y;

document.getElementById("total1").innerHTML=("total is "+total)

var num1=5;
num1++;
console.log(num1);

var num1=7;
num1--;
console.log(num1);



// javascript data types

// in built data types--array ,object,date,user defined data types




// object 


const Name={firstName:"nIFLA", lastName:"Nijam"};
console.log(Name)

console.log(JSON.stringify(Name));



//array object
const name1=["nifla", "nijam","ikkiri"];

console.log(name1[2])


const name3= {}

name3.firstname="nifla"
name3.lastname="nijam"

name3.fullname=firstName+lastName;

console.log(firstName)
console.lastName(lastname)

console.log(fullname)


//array object methods
// 
// 
const car ={

    color:"yellow",
    Age: 15,
    detail: function(){

        return this.color + " " +this.Age
    }

}


console.log(car.detail)







