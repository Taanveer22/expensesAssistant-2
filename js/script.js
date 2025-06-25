console.log("connected js");

// global variable declaretion
const calculalateExpensesButton = document.getElementById("calculate-expenses");
// console.log(calculalateExpensesButton);
const calculalateSavingsButton = document.getElementById("calculate-savings");
// console.log(calculalateSavingsButton);

// ----------------------------------------------------------
//  event listener for calculalate expenses button
// ----------------------------------------------------------

calculalateExpensesButton.addEventListener("click", function () {
  // console.log("btn clicked");
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);
  // console.table({ income, software, courses, internet });

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;
  // console.table({ totalExpenses, balance });

  // manipulate result section by dom
  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses;

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance;

  // show results section
  const resultSection = document.getElementById("result-section");
  resultSection.classList.remove("hidden");
});

// ----------------------------------------------------------
// event listener for calculate savings button
// ----------------------------------------------------------
calculalateSavingsButton.addEventListener("click", function () {
  // console.log('btn clicked');
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);
  console.table({ income, software, courses, internet });

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;
  console.table({ totalExpenses, balance });

  const savingsPercentageInput = parseFloat(
    document.getElementById("savings-percentage-input").value
  );
  // console.log(savingsPercentageInput);
  const savingsAmount = (savingsPercentageInput / 100) * balance;
  // console.log(savingsAmount);
  const remainingBalance = balance - savingsAmount;

  // manipulate result section by dom
  const savingsAmountElement = document.getElementById("savings-amount");
  savingsAmountElement.innerText = savingsAmount;

  const remainingBalanceElement = document.getElementById("remaining-balance");
  remainingBalanceElement.innerText = remainingBalance;
});
