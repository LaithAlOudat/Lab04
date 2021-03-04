

var Name =prompt("Please enter your name :)");
var birth_year =prompt("Please enter your birth year :)");
var x = 2021;
if (birth_year<=x && birth_year>0)
{
   var Age = x - birth_year;
   document.write("Your Name is: "+ Name + " | ");
   document.write("Your Age is: " + Age);

}
else 
{
   alert("Thr Number you just enterd is wrong")
}

function confirmFunction() {
    confirm("Your name is: " + Name + " ... Your Age is: " +  Age);
}