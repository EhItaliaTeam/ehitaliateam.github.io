import * as d3 from 'd3';
import entries from './menu.entry';

const bootMenu = (container) => {

  // select container or append to container?
  // d3.select(container);

  const ENTRY_WIDTH = 150;
  const ENTRY_HEIGHT = 75;
  let margins = {
    top: 5,
    right: 0,
    bottom: 0,
    left: 10
  };

  // let menu = container.select('.dcontainer')
  let menu = d3.create('svg:g')
    .attr('class', 'menu-wrapper')
    .attr("transform", "translate(0, 0)");
  
  const transformMenuEntry = (val, i, nodes) => {
    let entryHeight = i * (ENTRY_HEIGHT + margins.top + margins.bottom);
    return `translate(0,${entryHeight})`;
  };
  let menuEntries = menu.selectAll('.menu-entry')
    .data(entries())
    .enter()
    .append('g')
    .attr('class', 'menu-entry')
    .attr("transform", transformMenuEntry);

  menuEntries
    .append('rect')
      .attr('width', ENTRY_WIDTH)
      .attr('height', ENTRY_HEIGHT)
      .attr('fill', 'green') // try radient
      .attr('class', 'menu-entry__rect');

  menuEntries
    .append('text')
      .attr('class', 'menu-entry__text')
      .text(d => d.slug)
      // .attr("transform", () => {return `translate(${ENTRY_WIDTH/2}, ${ENTRY_HEIGHT/2})`});
      .attr('x', () => {return parseInt(ENTRY_WIDTH/2);})
      .attr('y', () => {return parseInt(ENTRY_HEIGHT/2) + 4;});

  return menu;
};

export const createMenu = bootMenu;