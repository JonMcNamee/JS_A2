window.onload = function () {
  document.querySelector("#tabContainer").addEventListener("click", TabClick);

  document.querySelectorAll(".tab")[0].click();
  //exercise 1
  let btnDisplayRange = document.querySelector("#displayRange");
  btnDisplayRange.addEventListener("click", displayRange);

  //exercise 2
  let btnT2 = document.querySelector("#btnT2");
  btnT2.addEventListener("click", T2Calc);

  //exercise 3
  let btnSearchKey = document.querySelector("#keySearch");
  btnSearchKey.addEventListener("click", searchKey);

  //exercise 4
  let btnT4 = document.querySelector("#btnT4");
  btnT4.addEventListener("click", T4Calc);

  //exercise 5
  let btnStarsOutput = document.querySelector("#outputStars");
  btnStarsOutput.addEventListener("click", printStars);

  //exercise 6
  let btnT6 = document.querySelector("#btnT6");
  btnT6.addEventListener("click", T6Calc);

  //exercise 7
  let btnCalculatePrices = document.querySelector("#displayPrices");
  btnCalculatePrices.addEventListener("click", calculatePrices);

  //exercise 8
  let btnT8 = document.querySelector("#btnT8");
  btnT8.addEventListener("click", T8Calc);

  //exercise 9
  let btnBinary = document.querySelector("#binaryButton");
  btnBinary.addEventListener("click", convertBinary);

  //exercise 10 button/event listener
  let btnT10 = document.querySelector("#btnT10");
  btnT10.addEventListener("click", T10Calc);
};

//function to trigger class changes on click of new tab
function TabClick(evt) {
  //sets clicked tab as active
  let tab = evt.target;

  //deselect before adding active, else nothing shows up
  deselectTab();
  tab.classList.add("active");

  // process for swapping active and hidden tabs
  let id = tab.innerHTML;
  id = id.replace(" ", "_");

  hideSection();

  document.querySelector("#" + id).classList.remove("hidden");
}

//function to add hidden class to inactive tabs, so that only selected tab content will appear
function hideSection() {
  let sections = document.querySelectorAll(".tabContent");

  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.add("hidden");
  }
}

// function to remove active class from tab
function deselectTab() {
  let tabs = document.querySelectorAll(".tab");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}
//exercise 1
//display all values between min/max input values
function displayRange() {
  let min = Number(document.querySelector("#min").value);
  let max = Number(document.querySelector("#max").value);

  let output = document.querySelector(".results ul");
  output.innerHTML = "";

  //validates then calculates range between min/max values
  if (min > max) {
    alert(
      "Min value must be less than max value. You input: " +
        min +
        " as min, which is greater than your max value of: " +
        max
    );
  }
  //if data valid loop through numbers from min to max (inclusive) & display
  else {
    output.innerHTML += "<li>" + min + "</li>";
    for (let i = min + 1; i <= max; i++) {
      output.innerHTML += "<li>" + i + "</li>";
    }
    output.innerHTML += "</p>";
  }
}
//exercise 2
/*Ask the user for a comma-separated set of numeric values. 
Display the number of values entered, the total, the average, 
the smallest value, and the largest value. */
function T2Calc() {
  let values = document.querySelector("#T2Input").value.split(",");

  let count = values.length;

  let sum = 0;

  //for loop to add values together
  for (let i = 0; i < values.length; i++) {
    values[i] = Number(values[i]);

    sum += values[i];
  }

  let avg = sum / count;

  let min = Infinity;
  let max = 0;

  //for loop to set min and max values
  for (let i = 0; i < values.length; i++) {
    min = Math.min(min, values[i]);
    max = Math.max(max, values[i]);
  }

  let result = "";
  result +=
    "<p>Number of Values: " +
    count +
    "<br>" +
    "Total: " +
    sum +
    "<br>" +
    "Average: " +
    avg +
    "<br>" +
    "Smallest: " +
    min +
    "<br>" +
    "Largest: " +
    max;
  let out = document.querySelector("#T2OutText");
  out.innerHTML = result;
}

//exercise 3
function searchKey() {
  //create array of input values & split into array according to the comma
  let valueArray = document.querySelector("#numberList").value;
  valueArray = valueArray.split(",");

  let key = document.querySelector("#key").value;

  let matches = 0;
  //comparing key to each value in array
  //adds to matches counter for each match
  for (let i = 0; i < valueArray.length; i++) {
    if (key == valueArray[i]) {
      matches++;
      console.log(i);
    }

    let output = document.querySelector(".T3Output");

    output.innerHTML = matches;
  }
}

//exercise 4
/*Ask the user for a number of stars, numStars, and display that number of stars 
on a single line. (A star is the '*' character.)Show an error message if the value
 entered is less than 1.*/
function T4Calc() {
  let value = document.querySelector("#T4Input").value;

  let output = "";

  //if else to check value is 1 or more, and if it isn't to display an error
  if (value < 1) {
    output += "ERROR: NUMBER MUST BE 1 OR MORE";
  } else {
    //for loop to add an * equal to the number entered
    for (let i = 0; i < value; i++) {
      output += "* ";
    }
  }

  let out = document.querySelector("#T4OutText");
  out.innerHTML = output;
}

//exercise 5
function printStars() {
  let numStars = document.querySelector("#numStars").value;
  let maxStars = document.querySelector("#maxStars").value;
  let output = document.querySelector(".starsOutput");

  output.innerHTML = "";
  let star = "*";

  if (maxStars < 1 || numStars < 1) {
    alert("Both inputs must be at least 1.", "Invalid Data");
  } else {
    for (let i = 0; i < numStars; i++) {
      //prints when number less than or equal to max/line
      if (numStars <= maxStars) {
        output.innerHTML += "<p>" + star.repeat(numStars) + "</p>";
      }

      //prints when max/line is less than total number && not the final line that needs to be printed
      else if (maxStars < numStars && i * maxStars < numStars) {
        output.innerHTML += "<p>" + star.repeat(maxStars) + "</p>";
      }

      //prints when one line is left - remaining stars
      else if (numStars - maxStars < maxStars) {
        let extraStars = numStars - maxStars;
        output.innerHTML += "<p>" + star.repeat(extraStars) + "</p>";
      }
    }
  }
}

//exercise 6
/*Asks the user for a string statement, which are then counted to display total number and new string*/
function T6Calc() {
  let vowels = "AEIOUaeiou";

  let input = document.querySelector("#T6Input").value;
  let output = "";

  let count = 0;

  //for loop to parse through inputted string and change vowels, and increment count
  for (let i = 0; i < input.length; i++) {
    if (vowels.indexOf(input[i]) !== -1) {
      output += "*";
      count++;
    } else {
      output += input[i];
    }
  }

  console.log(output);
  console.log(count);
  let out = document.querySelector("#T6OutText");
  out.innerHTML =
    "<p> Number of Vowels: " +
    count +
    "<br><br>" +
    "New String: " +
    output +
    "</p>";
}

//exercise 7
function calculatePrices() {
  let totalItems = Number(document.querySelector("#totalItems").value);
  let baseCost = document.querySelector("#baseCost");
  let tax = document.querySelector("#tax");
  let total = document.querySelector("#total");

  let multiplier = 0;

  baseCost.innerHTML = "";
  tax.innerHTML = "";
  total.innerHTML = "";

  if (totalItems < 1) {
    alert("Input value must be greater than 0");
  } else if (totalItems < 100) {
    multiplier += 5;
    baseCost.innerHTML += " $" + (totalItems * multiplier).toFixed(2);
    tax.innerHTML += " $" + (totalItems * multiplier * 0.15).toFixed(2);
    total.innerHTML += " $" + (totalItems * multiplier * 1.15).toFixed(2);
  } else if (totalItems >= 100 && totalItems <= 1000) {
    multiplier += 4;
    baseCost.innerHTML += " $" + (totalItems * multiplier).toFixed(2);
    tax.innerHTML += " $" + (totalItems * multiplier * 0.15).toFixed(2);
    total.innerHTML += " $" + (totalItems * multiplier * 1.15).toFixed(2);
  } else if (totalItems > 1000) {
    multiplier += 3;
    baseCost.innerHTML += " $" + (totalItems * multiplier).toFixed(2);
    tax.innerHTML += " $" + (totalItems * multiplier * 0.15).toFixed(2);
    total.innerHTML += " $" + (totalItems * multiplier * 1.15).toFixed(2);
  }
}
//exercise 8
function T8Calc() {
  let value = Number(document.querySelector("#T8Input").value);

  let singleValue = 1.75;
  let boxValue = 32;

  let boxTotal = Math.floor(value / 24);
  let barTotal = value % 24;

  let boxCost = boxTotal * boxValue;
  let barCost = barTotal * singleValue;

  let total = boxCost + barCost;

  let output = "";

  if (value < 1) {
    output += "ERROR. INPUT MUST BE 1 OR MORE";
  } else {
    output +=
      "<p>Number of boxes: " +
      boxTotal +
      "<br>" +
      "Number of Singles: " +
      barTotal +
      "<br>" +
      "Cost of Boxes: $" +
      boxCost +
      "<br>" +
      "Cost of Singles: $" +
      barCost +
      "<br>" +
      "Total Cost: $" +
      total +
      "</p>";
  }

  let out = document.querySelector("#T8OutText");
  out.innerHTML = output;
}

//exercise 9
function convertBinary() {
  let total = 0;
  let output = document.querySelector(".binaryConversion");
  output.innerHTML = "";
  let isValid = false;

  let input = document.querySelector("#binaryNum").value;

  for (let i = 0; i < input.length; i++) {
    let superscript = input.length - 1 - i;

    let number = Number(input.charAt(i));

    if ((number != 1 && number != 0) || input.includes(" ")) {
      alert("Input can only contain 1's and 0's");
      output.innerHTML = "";
      isValid = false;
      break;
    }

    if (number != 0 && i != input.length - 1) {
      number = 2;
      output.innerHTML += number + "<sup>" + superscript + "</sup>" + " + ";
      total += number ** superscript;
      isValid = true;
    } else if (number != 0) {
      number = 2;
      output.innerHTML += number + "<sup>" + superscript + "</sup>" + " ";
      total += number ** superscript;
      isValid = true;
    } else if (input == Number(0) && !input.includes(" ")) {
      output.innerHTML += "0" + "<sup>" + 0 + "</sup>";
      isValid = true;
    }
  }
  if (isValid) {
    output.innerHTML += " = " + total;
  } else {
    output.innerHTML = "";
  }
}

//exercise 10
function T10Calc() {
  let angleA = Number(document.querySelector("#T10Input1").value);
  let angleB = Number(document.querySelector("#T10Input2").value);
  let angleC = Number(document.querySelector("#T10Input3").value);

  let total = angleA + angleB + angleC;

  let output = "";

  //if statement to confirm angles are valid
  if (total > 180 || total < 3) {
    output +=
      "<p>ERROR: INVALID TRIANGLE. ANGLES CANNOT EXCEED 180 DEGREES AND MUST BE GREATER THAN 0</p>";
  } else {
    //nested if else chain to apply correct output result based on angle inputs
    if (angleA === 90 || angleB === 90 || angleC === 90) {
      output += "<p>YOUR TRIANGLE IS A RIGHT TRIANGLE</p>";
    } else if (angleA > 90 || angleB > 90 || angleC > 90) {
      output += "<p>YOUR TRIANGLE IS AN OBTUSE TRIANGLE</p>";
    } else {
      output += "<p>YOUR TRIANGLE IS AN ACUTE TRIANGLE</p>";
    }
  }

  console.log(total);

  let out = document.querySelector("#T10OutText");
  out.innerHTML = output;
}
