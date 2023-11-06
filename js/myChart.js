const xValues = [2019, 2020, 2021, 2022, 2023];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [1860,2550,2060,2806,3000],
      borderColor: "red",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});