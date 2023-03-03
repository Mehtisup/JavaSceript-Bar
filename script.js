<script>
var xValues = ["USA", "Iran", "France", "India", "Japan"];
var yValues = [420, 240, 530, 320, 500];
var barColor = ["red","purple","black","yellow","dodgerblue"];

new Chart("myChart", {
    type:"bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColor,
            data: yValues,
        }]
    },
    options: {
        legend: {display:false},
        scales: {
            yAxes: [{ticks: {min:0, max:600}}]
        },
        title: {
            display:true,
            text: "JavaScript Bar"
        }
    }
})
</script>
