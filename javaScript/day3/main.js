/*
Task 1: Word Counter
Description:
Ask the user to input a sentence. Count the total number of words and print each word
along with its number of letters.
Input:
let sentence = "JavaScript is fun";
Expected Output:
Total words: 3
JavaScript => 10 letters
is => 2 letters
fun => 3 letters
*/

function countLetters() {
  var sentence = document.getElementById("userInput").value;
  var output = document.getElementById("output");
  var message = "";
  var splitted = sentence.split(" ");
  message += `<p>The total worlds is: ${splitted.length}</p><ul>`;
  splitted.forEach((element) => {
    message += `<li>${element} => ${element.length} letters</li>`;
  });
  message += `</ul>`;
  output.innerHTML = message;
}

/*
Task 2: Group Users by Age
Description:
Given an array of users (objects), categorize them into age groups:
• "Young": age < 25
• "Middle": 25 <= age <= 40
• "Old": age > 40
Input:
let users = [
 {name: "Ali", age: 22},
 {name: "Sara", age: 28},
 {name: "Mona", age: 35},
 {name: "Ahmed", age: 45}
];
Expected Output:
{
 "Young": [{name: "Ali", age: 22}],
 "Middle": [{name: "Sara", age: 28}, {name: "Mona", age: 35}],
 "Old": [{name: "Ahmed", age: 45}]
}
*/

function groupUsers() {
  var users = [
    { name: "Ali", age: 22 },
    { name: "Sara", age: 28 },
    { name: "Mona", age: 35 },
    { name: "Ahmed", age: 45 },
  ];

  users.forEach((user) => {
    if (user.age >= 40) {
      user["status"] = "Old";
    } else if (user.age >= 25) {
      user["status"] = "Middle";
    } else {
      user["status"] = "Young";
    }
  });

  var byAge = users.reduce((acc, u) => {
    var output = document.getElementById("output");
    var message = "";
    acc[u.status] = acc[u.status] || [];
    acc[u.status].push(u);
    return acc;
  }, {});

  console.log(byAge);
  var message = "<p>Open the console</p>";
  var output = document.getElementById("output");

  output.innerHTML = message;
}

/**
 * Task 3: Flatten and Count Products
Description:
Given an array of categories, each containing products (nested arrays), do the following:
1. Flatten all products into a single array.
2. Count how many times each product appears.
3. Return an object where the keys are product names and values are their counts.
Input:
let categories = [
 {category: "Fruits", products: ["Apple", "Banana", "Apple"]},
 {category: "Vegetables", products: ["Carrot", "Apple"]},
 {category: "Dairy", products: ["Milk", "Cheese"]}
];
Expected Output:
{
 "Apple": 3,
 "Banana": 1,
 "Carrot": 1,
 "Milk": 1,
 "Cheese": 1}
 * 
 */
function lattenAndCount() {
  let categories = [
    { category: "Fruits", products: ["Apple", "Banana", "Apple"] },
    { category: "Vegetables", products: ["Carrot", "Apple"] },
    { category: "Dairy", products: ["Milk", "Cheese"] },
  ];

  var flattenProducts = categories.flat(2);
  console.log("New products after flat", flattenProducts);
}
