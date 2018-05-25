function studentRecords()
{
    alert("Open console");
    console.clear();
    document.querySelector('form.studentinfo').addEventListener('submit', function (e){
        e.preventDefault();
    });
    //Student Details
    var name = document.getElementById("name").value;
    var fatherName = document.getElementById("fathername").value;
    var sClass = document.getElementById("class").value;
    var lastClass = document.getElementById("lastclass").value;
    var roll = document.getElementById("roll").value;

    console.log("-->Basic Details<--")
    console.log("Name: " + name);
    console.log("Father Name: " + fatherName);
    console.log("Class: " + sClass);
    console.log("Last Class: " + lastClass);
    console.log("Roll Number: " + roll);

    //Fees Details
    var admissionFee = document.getElementById("admissionfee").value;
    var monthlyFee = document.getElementById("monthlyfee").value;
    var extracirculumFee = document.getElementById("extracirculumfee").value;
    var gameFee = document.getElementById("gamefee").value;

    console.log("-->Fee Details<--")
    console.log("Admission Fee: " + admissionFee);
    console.log("Monthly Fee: " + monthlyFee);
    console.log("Extracirculum Fee: " + extracirculumFee);
    console.log("Game Fee: " + gameFee);

    //Marks
    var english = document.getElementById("english").value;
    var physics = document.getElementById("physics").value;

    console.log("-->Marks Details<--")
    console.log("English: " + english + "  Status: " + (english < 50 ? "Fail" : "Pass"));
    console.log("Physics: " + physics + "  Status: " + (physics < 50 ? "Fail" : "Pass"));
}