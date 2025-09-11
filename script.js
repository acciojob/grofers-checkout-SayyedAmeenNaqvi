const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  
  const prices = document.querySelectorAll(".price");


  let total = 0;
  prices.forEach(cell => {
    total += parseInt(cell.textContent, 10);
  });


  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // span across 2 columns
  newCell.colSpan = 2;
  newCell.textContent = `Total Price = Rs ${total}`;

  newRow.appendChild(newCell);
  table.appendChild(newRow);


  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
