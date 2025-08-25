const userInput = document.getElementById("userInput");
const parent = document.getElementById("parent");

// task1: secret number
function secretNumber() {
  const randomNum = Math.floor(Math.random() * 51);
  const userGuess = Number(userInput.value);
  var message = "";
  console.log(typeof userGuess);

  // typeof userGuess == "number" ? console.log("yes") : console.log("no");
  if (typeof userGuess == "number") {
    message =
      userGuess === randomNum
        ? `<h3 style="color: green">Correct! The number was ${randomNum}.</h3>`
        : `<h3 style="color: red">Wrong! The correct number was ${randomNum}.</h3>`;
  } else {
    message = `<h3 style="color: red">Please enter a vaild number</h3>`;
  }

  parent.innerHTML = message;
}

// task2: sum of positive numbers
function sumNumbers() {
  const numbers = [12, -5, 7, -22, 3, 0, -8, 15, -1, 9];
  var sumPositive = 0;
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] >= 0) {
      sumPositive += numbers[i];
    } else {
      continue;
    }
  }

  var message = `<h3>The array: <span style="color: green">[${numbers}]</span></h3> <h3>The num of the positive numbers is : <span style="color: red">{${sumPositive}}</span></h3> <h3>The sum of all numbers is : <span style="color: blue">{${sum}}</span></h3>`;
  parent.innerHTML = message;
}

// task3: Object
function object() {
  var student = {
    name: "Ali",
    age: 21,
    grade: "B",
    isGraduated: false,
  };

  var message = "";
  message = `<p>Here's the student data:<br> <strong>Name: </strong>${student.name}<br> <strong>Age: </strong>${student.age}<br> </p>`;
  student.grade = "A";
  message += `<p><strong>Student Grade after change: </strong>${student.grade}</p>`;
  var keys = Object.keys(student);
  message += `<p><strong>Student Keys: </strong>${keys}</p>`;
  var values = Object.values(student);
  message += `<p><strong>Student Values: </strong>${values}</p>`;
  student.email = "ali@gmail.com";
  message += `<p>New property added, <strong>Email: </strong>${student.email}</p>`;
  delete student.isGraduated;
  message += `
    <p>
      Student object keys after deleted <strong>isGraduated</strong> property: ${Object.keys(
        student
      )}
    </p>`;

  parent.innerHTML = message;
}
