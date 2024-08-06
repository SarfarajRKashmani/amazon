import { nbar,nbar_styles } from "../api/navbar.js";
import { getele } from "../api/Helper.js";
import { fot } from "../api/navbar.js";

const nbarr=getele("nbarr");
nbarr.innerHTML= nbar();

document.addEventListener("DOMContentLoaded", function(){
    const styletag=document.createElement("style")
    styletag.innerHTML= nbar_styles();
    document.head.appendChild(styletag)
})

const foot=getele("footr")
foot.innerHTML=fot();
// my chart 2
var xValues = ["India", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart3", {
type: "bar",
data: {
  labels: xValues,
  datasets: [{
    backgroundColor: barColors,
    data: yValues
  }]
},
options: {
  legend: {display: false},
  title: {
    display: true,
    text: "World Wide wenders 2021"
  }
}
});


// my chart 3
var xValues = [];
    var yValues = [];
    generateData("Math.sin(x)", 0, 10, 0.5);
    
    new Chart("myChart2", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          pointRadius: 2,
          borderColor: "rgba(0,0,255,0.5)",
          data: yValues
        }]
      },    
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "y = sin(x)",
          fontSize: 16
        }
      }
    });
    function generateData(value, i1, i2, step = 1) {
      for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
      }
    }
    // my chart 1
    var xValues = ["India", "France", "Spain", "USA", "Argentina"];
      var yValues = [55, 49, 44, 24, 15];
      var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
      ];
      
      new Chart("myChart1", {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "World Wide yearly Sales 2021"
          }
        }
      });