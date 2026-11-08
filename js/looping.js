
// looping     التكرار    for   /   while   /  do while

// for( start value  ;  end value ;  increment/decrement ){
    // repeated codes 
// }

    //        i++  /   i+=2  /  i=i+5
// for(i=1 ; i<=10 ; i++){
//     document.write("<h1>" + i + " Mansoura </h1>")
// }

//  بيجمع الارقام من 1 الى 100

// var sum=0
// for(x=1 ; x<=100 ; x+=1){
//     sum = sum + x
// }

// alert(sum)

// odd number:   1
// odd number:   3
// odd number:   5
// odd number:   7
// odd number:   9

// for(y=10 ; y>=1 ; y--){
//     document.write("<h1> even number:" + y + "</h1>")
// }


// var sum=0
// for(x=11 ; x<=200 ; x+=2){
//     sum=sum + x
// }
// alert(sum)


var employees = ["ahmed" , "mohamed" , "Amr" , "ibrahem" , "karim"]

// for(j=0 ; j<employees.length ; j++){
//     document.write("<h1>"+ employees[j] + "</h1>")
// }

// for(emp of employees){
//     document.write("<h1>"+ emp + "</h1>")
// }


//  while        لازم يتحقق من الشرط قبل التنفيذ
var f = 20 
while (f<=10){
    // alert(f)
    f++
}


// do while         بينفذ الامر مرة واحدة على الاقل
var z = 300 
do{
    // alert(z)
    z++
}
while(z<=10)



    //   function    الدالة

    // function  funName(paramaters){
        // codes  
    // }
    
    // function showMsg(){
    //     var username = "mohamed"
    //     alert("Welcome " + username)
    // }
    // showMsg()
function show(user){
    alert("Welcome " + user )
}
// show("amr")
// show("mohamed")
// show("Ahmed")

function total(num1 , num2){
    var sum = num1+num2
    return sum
}

// alert(total(20,50))
document.write(total(77,44))
console.log(total(80,30))


function login( userName , Pass){
    if(userName=="ahmed" && Pass=="123"){
        window.location.href = "home.html"
    }
    else{
        alert("Invalid User Or Pass")
    }
}

// login("mohamed" , "123")




// function  لجمع اي عدد من الأرقام

function dtc(...numbers){

    total = 0 
    // for(i=0 ; i<numbers.length ; i++){
    //     total= total + numbers[i]
    // }

    for( num of numbers){
        total=total+num
    }
    alert(total)
}

// dtc(5,7,9,6)
// dtc(3,8)
// dtc(9,7,6,4,8,2,9)




  







// Anonymous function   

// var y = function(uname){
//     alert("Welcome "+ uname +" Anonymous Function")
// }

// y("ahmed")




function test(){
    alert("Welcome Button")
}

function showData(){
    var user = document.getElementById("username").value 
    alert(user)
}

function showResult(){
    var degree= document.getElementById("deg").value
    if(degree>=50){
        alert("Success")
    }
    else{
        alert("Failed")
    }
}







function pred(){
    var team = document.getElementById("teams").value
    if(team==1){
        alert("يا رب الزمالك يكسب")
    }
    else{
        alert("يا رب الاهلى يخسر")
    }
}


function job(){
    // var g = document.getElementsByClassName("age")[0].value
    // var g = document.getElementsByTagName("input")[6].value

    // var g = document.querySelector(".age").value 
    // var g = document.querySelectorAll(".age")[0].value 

    var d= document.getElementById("d").value
    
    if(d>=50){
        // document.getElementById("sss").innerText = "ناااااااااجح"
        // document.getElementById("sss").textContent = "ناااااااااجح"
        document.getElementById("sss").innerHTML = "<h1> ناااااااااجح </h1>"
    }
    else{
        document.getElementById("sss").innerText = "رااااااااسب"
    }
    
}