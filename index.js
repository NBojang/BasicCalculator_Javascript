console.log("Hello and welcome to a simple and quick calculator");
var Name = prompt("Hello Beautiful, what is your Name?");
 console.log("Hello", Name, "How may I help you today");
var interest= prompt("which of the two calculators Would you like? the Regular(R) or Advanced (a)");

//First if-statment for the regular operation along with variable to store the numbers in.
if (interest== "Regular" || interest=="R"){
  console.log(Name, "you want the Regular");
  var Num1= parseInt(prompt("Can I have the first Number please?"));
  var Num2 = parseInt(prompt("Can I have the second Number please?"));
  var operation= prompt("Which operation do you want?, (Add, Subtract, Multiple or divide)");
// If-statment for the operations, when operations are selected which line will generate the result
  if (operation== "A") {
    console.log("Your sum is:", Num1+Num2);
  }
  else if (operation== "S") {
  console.log("Your sum is:", Num1-Num2);
  }
  else if (operation== "M") {
  console.log("Your sum is:", Num1*Num2);
  }
  else if (operation== "D") {
  console.log("Your sum is:", Num1/Num2);
  }
  else {
    console.log("nothing" );
  }
}

// This part is doing the first one again however just making it easier to press R instead of writting the whole word of Regular as sometimes its easy to just press R than write it

// This part of the code is doing it for the advanced calculator doing th Power and Square root calculation
else if (interest== "Advanced" ||interest=="A") {
  console.log(Name, "you want the Advanced");
  var Num = prompt("Can I have the Number please?");
  var operator= prompt("Which operation do you want?, (Power or Square root)");

  if (operator== "P") {
  console.log("The power is:", Math.pow(Num, 2));
  }
  else if  (operator== "Square root"||operator== "S")
   {
  console.log("The Square root is:", Math.sqrt(Num));
   }
   else {
     console.log("Notting mate, ");
   }
}
// Doing the Advanced calculation again this time just using the letter A instead

else {
  console.log("Sorry Beautiful,Can't help you, your on your own mate. Just live your best life!!!!");
  console.log("KEEP CALM AND CODE JAVASCRIPT!!!");
}
