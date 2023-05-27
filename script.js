let x = document.cookie = "user=john";
// keeps track of number of rows, adds num to class of new <tr>.
let rowNum = 0;
function addRow() {
    // increment rowNum by 1, 
    rowNum++;
    // set inputs as variables for later initialization & to check if all entered.
    const qVal = document.getElementsByName("question")[0].value;
    const sVal = document.getElementsByName("source")[0].value;
    const cVal = document.getElementsByName("categories")[0].value;
    const dVal = document.getElementsByName("date")[0].value;
    const tVal = document.getElementsByName("time")[0].value;
    if(qVal && sVal && cVal && dVal && tVal) {
        // get table element.
        const table = document.getElementById("table");
        // initialize new row and insert input values.
        table.innerHTML += `
        <tr class="row-${rowNum}">
            <td>${qVal}</td>
            <td>${sVal}</td>
            <td>${cVal}</td>
            <td>${dVal}</td>
            <td>${tVal}</td>
        <tr>`;
        // clear input fields for new entry.
        // using variables like 'qVal' does not work, reference error.
        document.getElementsByName("question")[0].value = "";
        document.getElementsByName("source")[0].value = "";
        document.getElementsByName("categories")[0].value = "";
        document.getElementsByName("date")[0].value = "";
        document.getElementsByName("time")[0].value = "";
    } else {
        alert("One or more fields are empty. Fill out form before pressing \"Enter\".");
    }
}
function deleteRow() {
    // get input row to delete as variable.
    const selectedRow = document.getElementsByName("deleteRow")[0].value;
    // if-else statement checking validity of input row.
    if (!selectedRow) {
        alert("No row specified for deletion.");
    } else if(rowNum === 0){
        alert("No rows to delete.");
    } else if (selectedRow > 0 && selectedRow <= rowNum) {
        // row input via jQuery.
        $(`.row-${selectedRow}`).remove();
        // rowNum decremented.
        rowNum--;
    } else {
        alert(`Invalid row number. Please enter a number between ${1} and ${rowNum}`);
    }
    document.getElementsByName("deleteRow")[0].value = "";
}