<script>
  var xArray = [55, 49, 44, 24, 15];
  var yArray = ["Italy ", "France ", "Spain ", "USA ", "Argentina "];

  var data = [{
    x:xArray,
    y:yArray,
    type:"bar",
    orientation:"h",
    marker: {color:"rgba(255,0,0,0.6)"}
  }];

  var layout = {title:"World Wide Wine Production"};

  Plotly.newPlot("myPlot", data, layout);
</script>