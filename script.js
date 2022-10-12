// Syntax -> var variable_name = value;
// Variable_name -> Any reasonable text value, a-z, A-Z, 0-9, $,

// Number -> Any Numberical Value from Positive, Negative, Decimal, Fractional
var user_age = 24;
console.log(user_age);

// string -> Any value which is typed inside double quotes or single quotes.
var user_name = "Muthukumar";
console.log(user_name);

//Boolean -> True or False
var result = false;
console.log(result);

/* Object -> collection of key -  value pairs.
var variable_name = value;

value ->{
    first_name : 'shdf',
    last_name : 'sdas',
    age : 23
}
*/

var student_Information ={
    name : 'Muthukumar',
    age : 23,
    roll_no : 1425,
    result : true
};
var student_Information_1 ={
    name : 'sridhar',
    age : 24,
    roll_no : 1825,
    result : true
};
console.log(student_Information);

/* Operators in object (4)
 1. To read a value from object
 2. To edit a value from object
 3. To add a new value to object
 4. To delete a particular value from object
 */

 // To read a value from object -> object_variable_name.key;
 console.log(student_Information.name);
 console.log(student_Information.result);

 // To edit a value from object -> object_variable_name.key = value;
 student_Information.name = "Raghuvaran";
 console.log(student_Information.name);

 // To Add a new value to object -> object_variable_name.NewKey = value;
 student_Information.mobile_number = 123456788;
 student_Information.grade = "A+";
 console.log(student_Information.grade);

 // To Delete a value from object -> delete object_variable_name.key;
 delete student_Information.result;
 console.log(student_Information.result);

 //-----------OBJECT------------

 // ARRAY
 // Syntax - var array_variable_name = [value1, value2, value3,..., valueN];
 var record_list = [ 
    {
        name: "Velu",
        age : 23
    },
    {
        name: "Vetri",
        age: 45
    },
    {
        name: "Maran",
        age: 45
    }
 ];

 /* Operations in Array(4)
  1. To read a value from Array
  2. To edit a value from Array
  3. To add a new value to Array
  4. To delete a particular value from Array
  */

  //To read a value from Array - array_variable_name = [index];
  console.log(record_list[2].name)

  // To edit a value from Array - array_variable_name[index] = Value;
  record_list[0].name = "Vasu";
  console.log(record_list[0].name);

  // To add a new value to Array - array_variable_name.push(value); -> Insert Last in array
  record_list.push({name: "Vikram", age: 45});
  console.log(record_list);

  // To change the Direction of the value in Array - array_variable_name.unshift(value); ->  Insert First in Array
  record_list.unshift({name: "kumar", age: 30});
  console.log(record_list); 

  // To Delete a Particular value from an Array - array_variable_name.splice(index, 1);
  record_list.splice(1,1);
  console.log(record_list.splice(1,1));


  /*
  Function -> Block of Code
  Syntax : (Function Definition)

  function function_name(var_name_1, var_name_2,...var_name_N){// Arguments
    // Code of Block
  };

  function_name -> Proper Text value -> a-z, A-Z, 0-9

  To Run/Execute a Function :
  Syntax : (Function Call/ Function Invocation)

  function_name(value1, value2....valueN); //Parameters
  */

  function on_display(){
    var number_1 = prompt("Enter Number 1 Value");
    var value_1 = parseInt(number_1);
    var number_2 = prompt("Enter Number 2 Value");
    var value_2 = parseInt(number_2);
    var result = value_1 + value_2;
    console.log(result);
  }
  on_display();

  function on_login(){
    var name = "Muthukumar";
    var password = 1234;
    console.log("The password is", password);
  }

  //Prompt 
  function on_signin(){
    var name = prompt("Please enter a valid username");
    console.log(name);
  }
  on_signin();
  // Function using Paramaters & Arguments
  function on_addition(num_1, num_2, num_3, num_4){
    var result = num_1 + num_2 + num_3 + num_4;
    console.log(result);
  }
  on_addition(20, 20, 20, 20);

/* Operators
  1. Arithmetic Operator --> +, -, *, /, %, ++, --
  2. Assignment Operator --> =
  3. Comparison Operator --> ==, ===, <, <=, >, >=, !=, !==
  4. Logical Operator --> &&, ||, !
*/

//Syntax : IF-ELSE
// if(condition){
//   // Code Block 1
// }
// else{
//   // Code Block 2
// }

/*Problem : Check Whether given age is eligible for voting
  1. Read number value, during program execution(Prompt)
  2. Condition : Age Should be Greater than or equal to 18.
  3. If age is greater than 18, print Eligible for vote
  4. If age is less than 18, print Not Eligible for vote
  */

  function check_voting_age(){
    var value = prompt('Enter a user age...');
    var age = parseInt(value);

    if(age >= 18 ){
      console.log("Eligible for vote");
    }
    else{
      console.log("Not Eligible for vote");
    }
  }

//Syntax - Multiple IF-ELSE

// if(condition){
//   // Code Block 1
// }
// else if(condition 2){
//   // Code Block 2
// }
// else if(condition 3){
//}
// else{
//   // Code Block 3
// }

/*Problem: Check the age Category of a person
 1. Read a number value, during program execution(Prompt)
 2. If age is less than 18, print the user is Minor
 3. If age is greater than or equal to 18 and age is less than 60, Print Major
 4. If age is greater than 60, print Senior Citizen
 */

function check_age_category(){
var value = prompt("Enter User age");
var age = parseInt(value);

if(age < 18){
  console.log("The user is Minor");
}
else if(age >= 18 && age < 60){
  console.log("The user is Major");
}
else{
  console.log("The user is Senior Citizen");
}
}

// Syntax - FOR Loop
// for(initialization; condition; increment/decrement){
//   // Code Block
// }

for(var count = 1; count <= 500; count++){
  console.log("The Loop is running on ", count, " times")
}

// Program : Read a number and print Even numbers till that Nth number.
// Steps:
// 1. Read a number value during program Run (prompt);
// 2. Logic - Number % 2 -> 0;
// 3. Use For loop for finding the limit of number


function print_even_numbers(){
  var value = prompt("Enter a Number Value");
  var number = parseInt(value);

  for(var limit = 0; limit <= number; limit++) {
    if(limit % 2 === 0){
      console.log("The Even Number is", limit )
    }
 }
}

//Syntax - FOR IN
// for(var variable_name in object_variable_name){

// }

  for(var value in student_Information) {
      console.log(student_Information[value]);
  }

//Syntax - FOR OF
// for(var variable_name of array_variable_name){

// }

for(var value of record_list) {
  console.log(value);
}

//Syntax - While Loop
// while(condition){

// }
var count = 1;
while(count <= 10){
  console.log("The count is ", count);
  count++;
}
//Syntax - Do while loop
// do{
// }while(condition)

var count = 1;
do{
  console.log("The Count is ", count);
  count++;
}while(count <=10);

//Syntax - Switch Case
// Switch (expression){
//  case value 1:
    // Code Block
  //  break;
// case value 2:
  // Code Block
  // break;
//  default:
    // Code Block  
//}

switch(2){
  case 1:
    console.log("This is One");
    break;
  case 2:
    console.log("This is Two");
}

var student_name = "Kumar"; // Global Scope - Access within the file.
var student_email; // Global Automatic Scope - Access within the file. 

function test(){
  var result = "Pass"; // Local Scope - Access within the function.
  student_email = "test@example.com";
  console.log("All Students are",result);
}
test();

function Students_details(){
  console.log(student_email);;
}
Students_details();

function print_name(){
  try{
    console.log(student_name);
    console.log(student_email);
    console.log(student_Information);
    console.log(student);
    console.log(student_Information);
    alert("Success");
  }
  catch(e){
    console.log(e);
    alert("failed");
  }
}