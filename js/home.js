
// alert("Welcome")      /* تظهر رسالة داخل صندوق  */

// document.write("Welcome Document")   /* تظهر رسالة مكتوبة داخل الصفحة  */

// document.write("<h1> Welcome JS </h1>")

// console.log("Welcome Console")    /*console رسالة داخل ال */

// prompt("What is your name?")    /* رسالة داخل مربع وبه مكان للاجابة  */

// confirm("Are you sure you want to delete course ?")  /* رسالة تأكيد واجابتها بنعم او لا */



// variables    المتغيرات      مخزن داخل الذاكرة بيتخزن فيه بيانات

//      var     /     let      /     const ثابت

var username 
{
    var username = "mohamed"       // public   اقدر اوصل لها من خارج البلوك 
}
username = "amr"

// alert("ُ employee name: " + username)


{
    let age = 20   //    private    بيقدر يوصلها من داخل البلوك فقط
    age = 50
}
// let age=25      ===> error     مينفعش اعمل اعادة تعريف تانى لها 

// alert(age)

// ---------------------------------------------------------------------
// const x     ==>>  error   لان لازم لما بعمل اعلان عن ثابت لازم اخصص قيمة له فى نفس السطر 
// x= 25   ==>>  error   مينفعش اغير قيمة الثابت مرة اخرى 

const x = 60

// alert(x)


//  هحسب صافى المرتب للموظف بعد خصم ضريبة %10

var salary = 20000
const tax = 7/100   // 0.1

var netSal = salary - (salary*tax)
// alert(netSal)

document.write("<h1> Net Salary is: " + netSal + "</h1>")


//  Array    المصفوفة    متغير بيحمل أكثر من قيمة فى نفس الوقت

//               0    ,    1   ,  2   ,    3
var courses = ["HTML" , "CSS" , "JS" , "React" , "PHP" , "MySQL" , "Laravel"]
console.log(courses)   //  طباعة لكل قيم المصفوفة

console.log("Level 2 is: " + courses[1])    // طباعة قيمة واحدة من المصفوفة

console.log(courses.length)        // عدد العناصر الموجودة فى المصفوفة

// courses.push("PHP" , "MySQL" , "Laravel")      // بيضيف عناصر فى اخر المصفوفة
// courses.unshift("PHP" , "MySQL" , "Laravel")    // بيضيف عناصر فى أول المصفوفة

// courses.pop()                // بتحذف آخر عنصر فى المصفوفة
// courses.shift()                 // بتحذف أول عنصر فى المصفوفة

// courses[2] = "Java Script"          // تغيير لقيمة داخل المصفوفة

console.log(courses.indexOf("React"))       // بتحدد رقم الاندكس 

console.log(courses.includes("HTML"))          //  بتتأكد العنصر موجود او لأ
console.log(courses.includes("JS"))      // لان تم تغيير الاسم الخاص بها false هيطلع النتيجة 

//              رقم اندكس النهاية , رقم اندكس البداية
console.log(courses.slice(2 , 5 ))       // بتقص جزء من المصفوفة وبتحافظ على المصفوفة الرئيسية بدون تعديل 

//              عدد العناصر , رقم اندكس البداية
console.log(courses.splice(2 , 3 ))       // بتقص جزء من المصفوفة بتعدل على المصفوفة الرئيسية 



//   Branching   التفرع    if  /  switch

//  if(شرط) {
    //   الكود اللى هيتنفذ فى حالة تحقق الشرط
// }
// else{
    // الكود اللى هيتنفذ فى حالة عدم تحقق الشرط 
// }

var arabic = 20
var english = 33 
var math = 49

var degree = arabic+english+math

if(degree>=150){
    alert("PASS")
}
else{
    alert("failed")
}

var sal = 6000

if(sal>=10000){
    netSal = sal-(sal*10/100)
    alert(netSal + "10% tax")
}
else{
    netSal = sal-(sal*7/100)
    alert(netSal + "7% tax")
}

var user = "ahmed"
var password = "12387994"

if(user=="ahmed" && password=="1234"){
    alert("Welcome")
}
else{
    alert("Invalid username or password")
}


// exc => >=85  /  VG =>  >=75  /  G =>  >=65  / pass =>  >=50  / failed =>  <50

var d = 77
if(d>100 || d<0){
    alert("أدخل قيمة مناسبة")
}
else if(d>=85){
    alert("Excellent")
}
else if(d>=75){
    alert("Very Good")
}
else if(d>=65){
    alert("Good")
}
else if(d>=50){
    alert("Pass")
}
else{
    alert("Failed")
}


//   switch case   

var lvl = 8
switch(lvl){
    case 1:
        document.write("HTML")
        break
    case 2:
        document.write("CSS")
        break
    case 3:
        document.write("JS")
        break
    case 4:
        document.write("React")
        break
    default:
        document.write("أختار مستوى صحيح")
}

var days = "mon"
switch(days){
    case "sat":
        alert("اليوم الاول")
        break
    case "sun":
        alert("اليوم الثانى")
        break
    case "mon":
        alert("اليوم الثالث")
        break
    default:
        alert("اخترت يوم خطأ")
}
