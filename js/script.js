console.log("connected js");

// ---------------------------------
// global variable declaretion
// ---------------------------------

const calculalateExpensesButton = document.getElementById("calculate-expenses");
// console.log(calculalateExpensesButton);
const calculalateSavingsButton = document.getElementById("calculate-savings");
// console.log(calculalateSavingsButton);
const historyTab = document.getElementById("history-tab");
// console.log(historyTab);
const assistantTab = document.getElementById("assistant-tab");
// console.log(assistantTab);
const expenseHistory = document.getElementById("expense-history");
// console.log(expenseHistory);
const expenseForm = document.getElementById("expense-form");
// console.log(expenseForm);
const resultSummary = document.getElementById("result-summary");
// console.log(resultSummary);
const historyListContainer = document.getElementById("history-list-container");
// console.log(historyListContainer);
let count = 0;
// console.log(count);


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

  // show result summary
  resultSummary.classList.remove("hidden");

  // create dynamic ui for history
  count = count + 1;
  const historyItemsDiv = document.createElement("div");
  historyItemsDiv.className =
    "bg-white p-3 rounded-md border-l-2 border-green-600";
  historyItemsDiv.innerHTML = `
        <p class="text-sm text-gray-800">Serial : ${count}</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income : ${income}</p>
        <p class="text-xs text-gray-500">totalExpenses : ${totalExpenses}</p>
        <p class="text-xs text-gray-500">balance : ${balance}</p>
                              `;
  historyListContainer.prepend(historyItemsDiv);

  // input validation
  if (income <= 0 || isNaN(income)) {
    document.getElementById("income-error").classList.remove("hidden");
  }

  if (software <= 0 || isNaN(software)) {
    document.getElementById("software-error").classList.remove("hidden");
  }

  if (courses <= 0 || isNaN(courses)) {
    document.getElementById("courses-error").classList.remove("hidden");
  }

  if (internet <= 0 || isNaN(internet)) {
    document.getElementById("internet-error").classList.remove("hidden");
  }
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

  // input validation
  if (savingsPercentageInput <= 0 || isNaN(savingsPercentageInput)) {
    document.getElementById("savings-error").classList.remove("hidden");
  }
});


// --------------------------------------------
// history tab functionality
// --------------------------------------------

historyTab.addEventListener("click", function () {
  console.log("histoy tab clicked");
  // toggle for history tab
  historyTab.classList.add(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-green-500",
    "to-lime-500"
  );
  assistantTab.classList.remove(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-green-500",
    "to-lime-500"
  );

  // show expense history
  expenseHistory.classList.remove("hidden");

  // show result summary

  // hide expense form
  expenseForm.classList.add("hidden");
});


// --------------------------------------------
// assistant tab functionality
// --------------------------------------------

assistantTab.addEventListener("click", function () {
  console.log("assistant tab clicked");
  // toggle for assistant tab
  assistantTab.classList.add(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-green-500",
    "to-lime-500"
  );
  historyTab.classList.remove(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-green-500",
    "to-lime-500"
  );

  // show expense form
  expenseForm.classList.remove("hidden");

  // hide expense history
  expenseHistory.classList.add("hidden");
});
