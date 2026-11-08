// OOP  ===>    object Oriented Programing    البرمجة الموجهه بالكائنات
// inhertance   -   abstract  -   encapsulation  -  polymorphism 



setInterval( function(){
    var myDate = new Date() 
    document.getElementById("time").textContent = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds()
} , 1000 )


// setTimeout( function(){
//     var myDate = new Date() 
//     document.getElementById("time").textContent = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds()
// } , 10000 )


// constructor function  

function showName( username ){
    this.username = username
    this.show = function(){
        document.write("Welcome Constructor Function ")
    }
}

// var stud1 = new showName("Ahmed")
// alert(stud1.username)

// var stud2 = new showName("mohamed")
// alert(stud2.username)


// function showMsg( empName , email , salary){
//     this.empName = empName
//     this.email = email
//     this.salary = salary

//     this.empDetails = function(){
//         document.write("Name: " + this.empName + " email: " + this.email)
//     }
// }

// var employee1 = new showMsg("mohamed" , "mohamed@gmail.com"  , 9000)
// // alert(employee1.empName)
// employee1.empDetails()


// var emp = new showMsg("Omar" , "omar@gmail.com" , 10000)
// // alert(emp.email)
// emp.empDetails()

class showMsg{
    constructor(empName , email , salary){
        this.empName = empName
        this.email = email
        this.salary = salary
    }

    //  Methods    الدوال اللى هستخدمها داخل الكلاس
    empDetails(){
        document.write("Name: " + this.empName + " email: " + this.email)
    }

    empSal(){
        document.write("Employee Name: " + this.empName + "<br> Salary: " + this.salary +"<br>")
    }
}

var empl1 = new showMsg("ahmed" , "ahmed@yahoo.com" , 8000)
empl1.empSal()

var empl2 = new showMsg("mohamed" , "mohamed@yahoo.com" , 111000)
empl2.empSal()




//  inhertance   التوريث  

class employees {
    constructor(empname , address , mobile , salary){
        this.empname = empname
        this.address = address
        this.mobile = mobile
        this.salary = salary
    }

    showData(){
        document.write("Employee: " + this.empname + " address: "+ this.address + " Mobile: " + this.mobile)
    }
}

let em1 = new employees("Mohamed" , "Mansoura" , "010000000" , 70000 )
em1.showData()


class trainers extends employees{
    constructor(empname , address , mobile , salary , courseName){
        super(empname , address , mobile , salary )
        this.courseName = courseName
    }
    trainerCours(){
        alert("Trainer Name: " + this.empname + " Course: " + this.courseName)
    }
}

let trainer1 = new trainers("Amr" , "Cairo" , "0111111111" , 8000 , "Programing")
trainer1.trainerCours()
trainer1.showData()


class networks extends trainers{
    constructor(empname , address , mobile , salary , courseName , hours){
        super(empname , address , mobile , salary , courseName )
        this.hours = hours
    }

}

let net1 = new networks("mmmm" , "dddddd" , "4574839534" , 8884 , "CCNA" , 50)
net1.showData()


// Encapsulation   التغليف

class Sal{
    #tax = .1
    constructor(name , salary){
        this.name = name
        this.salary =salary
    }


    netSalary(){
        var net = this.salary * this.#tax
        return net
    }
}

var employeeSalary = new Sal("Mohamed" , 6000)
document.querySelector("#Sal").textContent = employeeSalary.netSalary()

var employeeSalary2 = new Sal("Ahmed" , 9000)
document.querySelector("#Sal").textContent = employeeSalary2.netSalary()



// Polymorphism    تعدد الأشكال

class students{
    constructor(stuName , mobile){
        this.stuName = stuName
        this.mobile = mobile
    }

    show(){
        alert(this.stuName + this.mobile)
    }
}

class progStudents extends students{
    constructor(stuName , mobile , language){
        super(stuName , mobile)
        this.language = language
    }
    show(){
        alert(this.language)
    }
}

var st = new progStudents("ali" , "010006544" , "C++")
st.show()

var sds = new students("mohamed" , "0154448")
sds.show()