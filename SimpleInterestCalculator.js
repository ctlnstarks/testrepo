
function compute()
{
    // declare variables 
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

    p = document.getElementById("principal").value;

// validate principal variable 
    if(principal ==undefined || principal <=0){
        alert("Please enter a positive number.");
        document.getElementById("principal").focus();
        return
    }
    else{
        var a = "If you deposit <mark>" +principal+",</mark><br>";
        var b = "at an interest rate of <mark>" +rate+"%,</mark><br>";
        var c = "You will receive an amount of <mark>"+interest+",</mark><br>";
        var d = "in the year <mark'>" +year+"</mark>"; 
        
        document.getElementById("result").innerHTML=a+b+c+d;
    }

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}