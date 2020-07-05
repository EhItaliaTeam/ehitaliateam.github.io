import * as d3 from 'd3'
import {createMenu} from './menu/menu';

let bootApp = (args) => {
  
  let appContainer = document.getElementById('d3-app');
  let dims = appContainer.getBoundingClientRect();
  const width = dims.width;
  const height = dims.height;
  let margins = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  // Method definition? rx?
  var parseDate = d3.timeDay(); // .format('%d-%b-%y').parse;
  // TODO: check if svg exists ? destroy/create : create;
  var svg = d3.select('#d3-app')
    .append("svg")
      .attr("width", width)
      .attr("height", height)

  var container = svg
    .append("g")
      .attr("class", "dcontainer")
      .attr("transform", "translate(0, 0)")
    .append("g")
      .attr("class", "hello-world")
      .attr("transform", "translate(0, 0)")
  container
    .append("text")
      .attr("x", width/2)
      .attr("y", height/2)
      .attr("width", 150)
      .attr("height", 50)
      .text(`D3 version: ${d3.version}`);

  // let menu = createMenu(d3.select('#d3-app > svg'));
  let menu = createMenu(svg);
  let x = svg.append(() => menu.node());

  // d3.csv('/data/sample.csv', (error, dataset) => {
  //   dataset.forEach((data) => {
  //     console.log(data)
  //   })
  // });

  // d3.selectAll("p").on("click", function() {
  //   d3.select(this).style("color", "red");
  // });
};

export var startApp = bootApp;