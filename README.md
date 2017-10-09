 
   <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script> 
   
<script type="text/javascript" src="findPath.js"></script>

<script>
  
  function validateForm() {
  
  var csv = document.forms["myForm"]["csv"].value;
  
  var x = document.forms["myForm"]["from"].value;
  var y = document.forms["myForm"]["to"].value;
  var t = parseInt(document.forms["myForm"]["time"].value);
  
  
  if (csv)
  {
  var graph = readCSV(function() {
      graph.print();
      var path = findPath(graph,x,y,0,t);     
      alert(path);
    }); 
    }
  
   } 
</script>

 <body ng-app=""> 
 
 
 <h3>Enter the following information please:</h3>
 
 <form name="myForm">
  <table >
  <tr>
   
   <td >CSV File:</td>
   <td ><input type="file" name="csv" id="csv" onchange="" ng-model="csv" required/>
   <div id="csvError" ng-show="myForm.csv.$untouched">required</div>
   </td>
   
  </tr>
  <tr>
   <td >Device from: </td>
   <td ><input type="text" name="from" ng-model="from" value="A" required>
    <div id="fromError" ng-show="myForm.from.$invalid">required</div></td>
  </tr>
   <tr><td >Device to: </td><td ><input type="text" name="to">
 <div id="toError" ng-show="myForm.to.$invalid">required</div></td></tr>
   <tr><td >Time: </td><td ><input type="text" name="time">
 <div id="timeError" ng-show="myForm.time.$invalid">required</div></td></tr>
  
  <tr><td  colspan="2"><input type="button" onclick="validateForm()" value="ok" /></td></tr>
  
  </table>
  
 </form>
 </body>
