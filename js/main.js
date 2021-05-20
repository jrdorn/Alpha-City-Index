google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ]);

  var options = {
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

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}
