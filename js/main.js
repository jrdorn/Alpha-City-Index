google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawPChart);
google.charts.setOnLoadCallback(drawLChart);

// pie chart
function drawPChart() {
  var pData = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ]);

  var pOptions = {
    title: "My Daily Activities",
    fontName: "'Source Sans Pro', Arial, Helvetica, sans-serif",
    pieHole: 0.6,
    backgroundColor: "#202124",
    pieSliceTextStyle: {
      color: "#e7eaed",
    },
    titleTextStyle: {
      color: "#e7eaed",
      fontName: "'Poppins', Arial, Helvetica, sans-serif",
    },
    pieSliceBorderColor: "#202124",
    colors: ["pink", "silver", "teal", "cyan", "magenta"],
    legend: {
      textStyle: {
        color: "#e7eaed",
      },
    },
  };

  var pChart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  pChart.draw(pData, pOptions);
}

//line chart
function drawLChart() {
  var lData = google.visualization.arrayToDataTable([
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ]);

  var lOptions = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var lChart = new google.visualization.LineChart(
    document.getElementById("linechart")
  );

  lChart.draw(lData, lOptions);
}
