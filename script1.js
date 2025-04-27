function mul(p1,p2){

    return p1*p2;
}


var result=mul(2,4);
document.getElementById("demo").innerHTML=result;

function add(){
        
    let x=5;
    x +=5
    document.getElementById("demo1").innerHTML=("Addition of x is "+ x);
}

add();


//Object methods 

const car ={

    color:"yelow",
    age:13,
    details:function(){

        return this.color + "  " + this.age;
    }
}

console.log(car.details())
// document.getElementById("demo2").innerHTML=car.details()

const mango={


    color:"yellow",
    village:"vavuniya"
}


let text = " "

for( let x in mango){

    text += mango[x] +" "
}
//document.getElementById("demo2").innerHTML=text;



const phone={

    type:"hand",
    brand:"iphone",
    price:1234567,
    series:"11 series"

}

console.log(JSON.stringify(phone))


let details_phone =" "

for( var x in phone){

    details_phone += phone[x] + " "
}

//document.getElementById("demo2").innerHTML=details_phone;
// some time we need to create many object so

 function village(NAME,AREA){
    

    this.name=NAME
    this.area=AREA


 }

const ikkiri = new village("ikkiri",34,"nila")

document.getElementById("demo2").innerHTML=ikkiri.name + " "+ ikkiri.area;


// Constructor function for Person objects




let full_name="nifla"

let length=full_name.length

console.log(length)


var vi="hehllo"


document.getElementById("demo3").innerHTML=vi.charAt(2);

var text3 = "HELLO WORLD";
document.getElementById("demo3").innerHTML = text3.charAt(1);


var shoe="nika"

console.log(shoe.at(0))

document.getElementById("demo2").innerHTML = shoe.charAt(0);




var nephew="aadhil"

console.log(nephew.at(0))

document.getElementById("demo2").innerHTML=nephew.charAt(3)

var arr ="nifla"

let find=arr.indexOf("fl")
document.getElementById("demo3").innerHTML =find
 
var country="I love Sri Lanka"
document.getElementById("demo3").innerHTML=country.lastIndexOf("an")

document.getElementById("demo3").innerHTML=country.search("ove")
