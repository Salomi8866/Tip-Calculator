function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);
  const output = document.getElementById("output");

  if (isNaN(bill) || isNaN(tipPercent)) {
    output.innerText = "Please enter valid numbers for bill and tip.";
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const totalAmount = bill + tipAmount;

  output.innerHTML = `
    Tip: ₹${tipAmount.toFixed(2)} <br>
    Total: ₹${totalAmount.toFixed(2)}
  `;
}
