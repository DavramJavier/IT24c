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

// console.log(Calculate(12, 11, '*'));

// c. Conditional Statement
// i. if else

function If_else(user_age){

let age_limit = 18;


if (user_age === age_limit || user_age > age_limit){

  return "You're Allowed to enter the website because you're " + user_age + " yrs old =)";

}else{
  return "Youre Not Allowed to enter this this website because you're " + user_age + " yrs old and it is below the age limit";
}
}

