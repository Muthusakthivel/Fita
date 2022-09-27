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
    age : '23',
}
*/

var student_Information ={
    name : 'Muthukumar',
    age : '23',
    roll_no : '1425',
    result : true
};
var student_Information_1 ={
    name : 'sridhar',
    age : '24',
    roll_no : '1825',
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
 console.log(student_Information.roll_no);

 // To edit a value from object -> object_variable_name.key = value;
 student_Information.name = "Raghuvaran";
 console.log(student_Information);

 // To Add a new value to object -> object_variable_name.NewKey = value;
 student_Information.mobile_number = 123456788;
 student_Information.grade = "A+";
 console.log(student_Information);

 // To Delete a value from object -> delete object_variable_name.key;
 delete student_Information.result;
 console.log(student_Information);

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
  console.log(record_list);

  /*
  Function -> Block of Code
  Syntax : (Function Definition)

  function function_name(){
    // Code of Block
  };

  function_name -> Proper Text value -> a-z, A-Z, 0-9

  To Run/Execute a Function :
  Syntax : (Function Call/ Function Invocation)

  function_name();
  */

  function on_display(){
    var number_1 = 35;
    var number_2 = 35;
    var result = number_1 + number_2;
    console.log(result);
  }

 