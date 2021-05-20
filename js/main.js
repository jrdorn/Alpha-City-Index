google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawPChart);

// pie chart
function drawPChart() {
  var pData = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Groceries", 11],
    ["Housing", 2],
    ["Transporation", 2],
    ["Savings", 7],
    ["Entertainment", 2],
  ]);

  var pOptions = {
    fontName: "'Source Sans Pro', Arial, Helvetica, sans-serif",
    title: "My Monthly Budget",
    titleTextStyle: {
      color: "#e7eaed",
      fontName: "'Poppins', Arial, Helvetica, sans-serif",
    },
    pieHole: 0.6,
    backgroundColor: "#202124",
    pieSliceText: "none",
    // pieSliceTextStyle: {
    //   color: "#e7eaed",
    // },
    pieSliceBorderColor: "#202124",
    colors: [
      "#fc0100",
      "#fc6302",
      "#fb9f02",
      "#1fbc84",
      "#0405bb",
      "#6e66f9",
      "#883eff",
    ],
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
