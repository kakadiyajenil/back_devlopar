/*pogram number 1

let x = Number(prompt("enter x: "));
let y = Number(prompt("enter y: "));

if (x<y)
{
    console.log("The smaller value is x");
}

else{
    console.log("The smaller value is y");
}
*/
/*pogram number 2

let a = Number(prompt("Enter a : "));

if(a>0)
{
    console.log("|| This is positive number ||");
}
else
{
    console.log("|| This is negetive number ||");
}*/

/*pogram number 3

let x=Number(prompt("Enter x : "));

if(x%5==0)
{
    console.log("This value is devisible by 5");
}
else{
  console.loglog("This value is not devisible by 5");
}*/

/*pogram number 4

let x=Number(prompt("Enter x : "));

if(x%15==0)
{
    console.log("This value is divisible by a & 3");
}

else 
{
    console.log("This value is not divisible by 5 & 3");
}*/

/*pogram number 5

let math=Number(prompt("Enter maths marks = :"));
console.log("math marks = "+math);
let sci=Number(prompt("Enter sciemce marks = :"));
console.log("sciemce marks = "+sci);
let eng=Number(prompt("Enter english marks = :"));
console.log("english marks = "+eng);

let total=math+sci+eng;

console.log("total marks = ",+total);

let per=(total*100)/300;

console.log("persentage = ",+per);

if(per>33)
{
    console.log("pass");
}

else{
    console.log("fail");
*/

/*pogram number 6

let x=Number(prompt("Enter years"));

if(x%4==0)
{
    console.log("leap years");
}

else{

    console.log("not leap years")
}*/

/*pogram number 7

let a=Number(prompt("Enter a:"));
let b=Number(prompt("Enter b:"));
let c=Number(prompt("Enter c:"));

if(a>b && a>c)
{
    console.log("A is a largest amount");
}
else if(b>a && b>c)
{
    console.log("B is a largest amount");
}

else if(c>a && c>b)
{
    console.log("C is a largest amount");
}*/

/*#####8. electricity unit and total amount #####=>

 const unit = prompt("Enter the number of units consumed:");
 let amount = 0;
 console.log("total used unit",unit);

 if (unit <= 100) {
   amount = unit * 0.6;
 } else if (unit <= 300) {
   amount = 100 * 0.6 + (unit - 100) * 0.8;
 } else {
   amount = 100 * 0.6 + 200 * 0.8 + (unit - 300) * 0.9;
 }

 if (amount < 50) {
   amount = 50;
 }

 if (amount > 300) {
   amount += amount * 0.15;
 }

 console.log("Total amount to be paid: Rs. " + amount.toFixed(2));
*/
/*#####9. eligible for voting or not #####=>

 let age = Number(prompt("Enter the age :-"));
 console.log(age)

 if (age >= 18) {
   console.log("eligible to vote.");
 } else {
   console.log("not eligible to vote.");
 }
*/
/*#####10. #####=>

 let basicSalary = Number(prompt("Enter the basic salary:"));

 let hra, da, grossSalary;

 if (basicSalary <= 5000) {
   hra = basicSalary * 0.08;
   da = basicSalary * 0.2;
 } else if (basicSalary <= 10000) {
   hra = basicSalary * 0.12;
   da = basicSalary * 0.3;
 } else if (basicSalary <= 15000) {
   hra = basicSalary * 0.15;
   da = basicSalary * 0.4;
 } else {
   hra = basicSalary * 0.2;
   da = basicSalary * 0.5;
 }

 grossSalary = basicSalary + hra + da;

 console.log("Gross Salary: " + grossSalary);
*/
//#####11#####=>

//  Compute taxes for a given income slab rates as follows...
//  a. slab 1... 0-2500: 0%
//  b. slab 2... 2500-5000: 10%
//  c. slab 3... 5000-10000: 20%
//  d. slab 4... 10000+: 30%
//  (for each range of a given income, the tax rate is different) e.g. input: x = 5200
//  divisions are 0-2500, 2500-5000, 5000-5200 calculation: 0-2500 of x: 0% of 2500 = 0 
//  2500-5000 of x: 10% of 2500 250 5000-1000 of x: 20% of 200 = 40 output: 290

//  let income = Number(prompt("Enter the income:"));
//  let tax ;
  
//  if (income <= 2500) {
//    tax = 0;
//  } else if (income <= 5000) {
//    tax = (income - 2500) * 0.1;
//  } else if (income <= 10000) {
//    tax = 2500 * 0.1 + (income - 5000) * 0.2;
//  } else {
//    tax = 2500 * 0.1 + 5000 * 0.2 + (income - 10000) * 0.3;
//  }
//  console.log("The income is ",income);
//  console.log("The tax is",tax);