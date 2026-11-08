
// document.getElementById("btnAdd").addEventListener("onclick" , function(){

// })


document.getElementById("btnAdd").onclick = function(){
// بوصل للعناصر من على الصفحة
    var user = document.getElementById("user").value 
    var address = document.getElementById("address").value 
    var age = document.getElementById("age").value 

    // بنشئ صف جديد
    var row = document.createElement("tr")

    // بمشئ خلايا على تبقى داخل الصف
    var cell1 = document.createElement("td")
    var cell2 = document.createElement("td")
    var cell3 = document.createElement("td")

    // بملا الخلايا بالبيانات بتاعتها
    cell1.textContent = user
    cell2.textContent = address
    cell3.textContent = age

    // اضافة الخلايا داخل الصف 
    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    
    // بتأكد ان اليوزر ادخل جميع البيانات
    if (user =="" || address=="" || age=="") {
        alert("Null Value")
    }
    else{
    // بضيف الصف داخل الجدول 
    document.getElementById("empData").appendChild(row)
    
    // بعد الاضافة بمسح محتوى المربعات
    document.getElementById("user").value =""
    document.getElementById("address").value =""
    document.getElementById("age").value =""
    }
}


function AddData() {
    

}