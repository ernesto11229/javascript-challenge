// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var dateinput = d3.select("#datetime");
var filterB = d3.select("#filter-btn");

filterB.on("click", runf);
dateinput.on("change", runf);
  
//filteredData.forEach((ufosight) => {
  tableData.forEach((ufosight)=>{
  var row = tbody.append("tr");
  Object.entries(ufosight).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
  
function runf(){
    //stop page from loading?
    d3.event.preventDefault();

    //selecting input area from users end
    var inputElement =d3.select("#datetime");
    //capturing the input user entered in date field
    var inputValue = inputElement.property('value');
    // printing like PY, still a like un clear 
    console.log(inputValue);
    console.log(tableData);
    //   filter with users input on original data set
    var filteredData = tableData.filter(tableData =>tableData.datetime === inputValue );
    
    // printing like PY, still a like un clear 
    console.log(filteredData);

    //clears previous table info
    tbody.html("");

    //displaying filtered results
    filteredData.forEach((ufosight)=>{
      var row = tbody.append("tr");
      Object.entries(ufosight).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

}  






