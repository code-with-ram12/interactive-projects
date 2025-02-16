// script.js
document.getElementById('addExpense').addEventListener('click', addExpense);

let totalExpense = 0;

function addExpense() {
  const expenseName = document.getElementById('expenseName').value;
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

  if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
    const expenseList = document.getElementById('expenseList');
    const li = document.createElement('li');
    
    li.innerHTML = `${expenseName}: $${expenseAmount.toFixed(2)}`;
    expenseList.appendChild(li);
    
    // Update total expense
    totalExpense += expenseAmount;
    document.getElementById('totalExpense').textContent = totalExpense.toFixed(2);

    // Clear input fields
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
  } else {
    alert("Please enter a valid expense name and amount.");
  }
}
