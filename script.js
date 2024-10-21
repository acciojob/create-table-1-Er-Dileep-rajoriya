function insert_Row() {
  //Write your code here

  let sampleTable = document.getElementById("sampleTable");

  let newRow = sampleTable.insertRow(0);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  cell1.innerText = "New Cell1";
  cell2.innerText = "New Cell2";
}
