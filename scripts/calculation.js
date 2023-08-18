function calculateClick() {
  const income = getElementValue("income-id");
  const food = getElementValue("food-id");
  const rent = getElementValue("rent-id");
  const clothes = getElementValue("clothes-id");
  const totalExpense = food + rent + clothes;
  insertValue("total-expense-id", totalExpense);
  const totalBalance = income - food - rent - clothes;
  insertValue("total-balance", totalBalance);
}
function saveClick() {
  const saveInPercent = getElementValue("save-id");
  const income = getElementValue("income-id");
  const save = saveInPercent / 100;
  const savingMoney = (saveInPercent / 100) * income;
  insertValue("saving-amount-id", savingMoney);
  const balanceAfterExpense = getInnerText("total-balance");
  const remainingBalance = balanceAfterExpense - savingMoney;
  insertValue("remaining-balance", remainingBalance);
}

//function
function getElementValue(id) {
  const stringValue = document.getElementById(id).value;
  // document.getElementById(id).value = "";

  return parseFloat(stringValue);
}
function insertValue(id, value) {
  document.getElementById(id).innerText = value;
}
function getInnerText(id) {
  const innerValueString = document.getElementById(id).innerText;
  const innerValue = parseFloat(innerValueString);
  return innerValue;
}
