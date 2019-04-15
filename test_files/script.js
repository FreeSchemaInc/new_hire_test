// 1. Connect this file to the index.html page. In other words how do we make this script.js file load on html?
//
// 2. Create an object named "my_first_object" that contains an array of the key value pairs [id:1 data:"FIRST", id:2 data:"SECOND", id:3 data:"THIRD"].
//   2a. This my_first_object will also have a function that will add to the array that you instantiated in problem number 2.
//     The function should take in two parameters. Id:integer, and Data:string. The function should take the parameters and add them as a key value pair to
//     the array you instantiated in problem number 2.
//     Name the function "add_to_array()."
//   2b. call the function you just created and add the key values [id:4 data:"FOUR", id:5 data:"FIVE", id:6 data:"SIX", id:7 data:"SEVEN", id:8 data:"EIGHT"].
//
// 3. Create another function as a property to "my_first_object". When this function is ran it should display the data according to the ID you give it from the array.
//   This function should take in as a parameter an id from the my_firt_object array. Print the answer to the console. Only the data should be printed.
//   3b. Call the function for every id in your array. No for loop just call the function 8 times separately.
//
// 4. create another function that is not an attribute of "my_first_object." This function should take the contents of the my_first_object array that you created and should
//     lowercase all of the strings in the data column. This function should take in an array as a parameter. You should name the function "lowercase_array_data()."
//     4b. Create a for loop that prints to the console everything in the array data column.
//
// 5. Create a function that contains a switch statement. This function should take the array you created for my_first_object and should print the data for any id that is even.
//   Function should be named "print_even_records."
//
// 6. Add a button to the index.html page.
//   6a. Create a function named "create_div_dynamically()." The button should run this function when clicked.
//         i. When clicked this function should add a div to the DOM.
//         ii. Add an ID to the div you just created sot hat it can be manipulated.
//           *hint - you should be keeping count of every div that you create. Keep the count and make the current div count the id of the div element you just created.*
//         iii. Add a class name to each div you are creating so you can manipulate.
//         iv. When you create the div set a certain size to it so that it is clearly visible when you click the button.
//         v. The function should be able to make a div appear with a random color appearing every time.
//       In essence the function should create a div of a certain size and should appear with a different random color every time.
//       *hint append the newly created div to the body.*
