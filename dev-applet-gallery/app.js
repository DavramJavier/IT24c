// a. Data types

let String_Name = "Davram A. Javier";
let Int_Age = 20;
let Boolean_Gender_Male = true;
let Char_Middle_In = 'A';
let String_Occupation = "Student";

// console.log("Name : " + String_Name);
// console.log("Age : " + Int_Age);
// console.log("A male : " + Boolean_Gender_Male);
// console.log("Middle Initial : " + Char_Middle_In);
// console.log("Occupation : " + String_Occupation);

// b. Arithmetic and Logical Operators

function Calculate(num1 , num2 , Operators){

  if (Operators === '+') {
    Sum = num1 + num2;
    return "The s um is : " + Sum;

  }else if(Operators === '-') {
    Difference = num1 - num2;
    return "The Difference is : " + Difference;

  }else if(Operators === '*') {
    Product = num1 * num2;
    return "The Product is : " + Product;

  }else if(Operators === '/') {
    Quotient = num1 / num2;
    return "The Quotient is : " + Quotient;

  }else{
    return "Invalid Try again"
  }
  
}

