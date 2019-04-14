// Typical Naming Convention: Camel Case
  var newVariable;

//FreeSchema Naming - all lowercase, and add underscore when you reach a new word
var new_variable;

//functions: try to be as clear as possible in the name no matter how long the variable name is
function to_show_message() {
  window.alert("Hello, world!");
};

//function paramaters should have an underscore next to them
function to_show_paramater(message_to_be_shown_) {
  message_to_be_shown_ = "Hello, world!";
  window.alert(message_to_be_shown_);
};

//Global variables should have an underscore in the front of it
var _global_messge = "Hello, world!";
window.alert(_global_messge);

//Always make sure to end every statement with a semi-colon

//Example on how to document functions and global variables

//The purpose of this variable is to eventually display the string that the variable encapsulated.
//It is also a global variable avaialable in the entire scope of the program.
var _global_messge = "Hello, world!";
/*summary - The purpose of this function is to concatenate the paramater string with another string inside
            the function.
  Param message_to_be_shown_: String type
  Return: string type. Will return the new value of the string.
  */
function to_show_paramater(message_to_be_shown_) {
  message_to_be_shown_ = "Hello, world!";
  message_to_be_shown_ = message_to_be_shown_ + " I am excited to code."
  return message_to_be_shown_;
};
