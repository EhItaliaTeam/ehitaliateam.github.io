import * as d3 from 'd3'
import {createMenu} from './menu/menu';
import {navTo} from './libutils/router';

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
  let parseDate = d3.timeDay(); // .format('%d-%b-%y').parse;
  // TODO: check if svg exists ? destroy/create : create;
  let svg = d3.select('#d3-app')
    .append("svg")
      .attr("width", width)
      .attr("height", height)


  let container = svg
    .append("g")
      .attr("class", "dcontainer")
      .attr("transform", "translate(0, 0)")


  let hackyImage = container
   .append("image")
   .attr("width", width)
   .attr("height", height)
   .attr("xlink:href", "img/cat.jpg");
   // find the way to strech | resize | center images
   // Start catch movement and parallax/move the bground image


  let image = container.append("defs")
   .append("pattern")
   .attr("id", "bg")
   .append("image")
   .attr("width", width)
   .attr("height", height)
   .attr("xlink:href", "img/cat.jpg");
  let background = container
    .append(`rect`)
    .attr("fill", "url(#bg)");


  let hw = container
    .append("g")
      .attr("class", "hello-world")
      .attr("transform", "translate(0, 0)")
  hw.append("text")
    .attr("x", width/2)
    .attr("y", height/2)
    .attr("width", 100)
    .attr("height", 50)
    .text(`D3 version: ${d3.version}`);

  // let menu = createMenu(d3.select('#d3-app > svg'));
  let menu = createMenu(svg);
  let x = container.append(() => menu.node());
  
  // MOVE ME AWAY FROM HERE:
  const loadPage = (svg) => {
    console.log(`todo`);
  }

  container.selectAll(`.menu-entry`)
    .on(`click`, (d, i, nodes) => {
      // using a show page? think further
      const wht = d.url;
      const mmh = d.slug;
      navTo(wht);
      loadPage(mmh);
      return d;
    });

  // Handle app w? redux? ng-rx? rx? 


  // Callback interface = how many patterns there are here applicable to solve the problem of handle an "application state"
  

  
  /*
   *  Examples
   */

  // d3.csv('/data/sample.csv', (error, dataset) => {
  //   dataset.forEach((data) => {
  //     console.log(data)
  //   })
  // });

  // d3.selectAll("p").on("click", function() {
  //   d3.select(this).style("color", "red");
  // });

};

export let startApp = bootApp;