
const Year = document.getElementById("Y");
console.log(Year)
const submit = document.getElementById("Submit");
console.log(submit);
const P = document.getElementById("P");
console.log(P);



function Submit() {
    if(Year.value === ""){
        alert("Fill information");
    }else{
  let Date1 = 2022 + 1;
  let Datess = Date1 - Year.value;
  
    P.textContent = "Your Age is "  + Datess;
  
  
    Year.value = "";
}
}

    
