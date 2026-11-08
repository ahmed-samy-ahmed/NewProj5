// تعديل شكل العنوان والفقرة 
function chngStyle(){
    var itm = document.getElementById("first")
    // itm.style.color="green"
    // itm.style.backgroundColor = "yellow"
    // itm.style.fontSize = "60px"

    itm.style.cssText = "color:green ; background-color:yellow ; font-size:60px"

    var par = document.getElementById("par")
    par.style.cssText = "color:blue ; font-size:50px ; padding:20px ; margin:10px ; background-color:pink"
}


    //  تغيير ألوان الصفحة الخلفية والخط 
function chngBack(colBack , colTxt){
    var page = document.body
    page.style.background = colBack
    page.style.color = colTxt
}

function desha(back ,text){
    var nb = document.getElementById("nb")
    nb.style.backgroundColor = back
    nb.style.color = text
    
}





function selectBack(){
    var sCol = document.getElementById("choose").value 
    document.body.style.backgroundColor = sCol
}


function moveTxt(){
    var txt = document.getElementById("user").value 
    document.getElementById("dist").innerText = txt
}











// التأكد من شروط كلمة المرور 
function check(){
    var password = document.getElementById("pass").value 

    var cap = /[A-Z]/.test(password)
    var sml = /[a-z]/.test(password)
    var num = /[0-9]/.test(password)

    if( !cap || !sml || !num ){
        document.getElementById("res").innerText = "أدخل حروف كبيرة وصغيرة وأرقام"
    }
    else{
         document.getElementById("res").innerText = ""
    }

}


function focusItm(){
    document.getElementById("new").style.backgroundColor = "green"
}

function blurItm(){
    document.getElementById("new").style.backgroundColor = "white"
}

function over(){
    document.getElementById("new").style.backgroundColor = "red"
}

function leave(){
    document.getElementById("new").style.backgroundColor = "white"
    alert("Thanks")
}

window.onscroll =function(){
    if(document.documentElement.scrollTop>200){
        document.getElementById("upLink").style.display = "block"
    }
    else{
        document.getElementById("upLink").style.display = "none"
    }
}

// window.onscroll =function(){
// if(document.documentElement.scrollTop>300){
//     document.getElementById("mo").style.display="block"
// }
// else{
//      document.getElementById("mo").style.display = "none"
// }
// }
function foucus(){
    document.getElementById("zd").style.backgroundColor = "red"
}

function bluur(){
    document.getElementById("zd").style.backgroundColor = "blue"
}


function newItm(){

    // اضافة عنصر جديد
    var newitm = document.createElement("h2")
    newitm.textContent = "My New Item "
    // setAttribute   اضافة خصائص
    newitm.setAttribute("id" , "dtc")
    newitm.setAttribute("title" , "new Item")
    newitm.setAttribute("class" , "new")

    // appendChild و prepend    اضافة العنصر 
    // document.getElementById("newEl").appendChild(newitm)
    document.getElementById("newEl").prepend(newitm)

    // تغيير الصورة 
    // document.getElementById("logo").src = "images/image.avif"
    document.getElementById("logo").setAttribute("src" , "images/image.avif")

    // className  تغيير اسم الكلاس وحذف القديمة 
    // classList.add   اضافة اسم كلاس مع الحفاظ على القديم
    // document.getElementById("logo").className = "newImage"
    document.getElementById("logo").classList.add("newImage")




}