$.ajax({
    url: 'data2.csv',
    dataType: 'text',
  }).done(successFunction);

function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table border="1">';
  var count=0;
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if(rowCells[rowCell]=='가평군'){++count;}
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  } 
  table += '</tbody>';
  table += '</table>';
  document.write("가평군 약국 수:");
  document.write(count);    
  $('body').append(table);
}
