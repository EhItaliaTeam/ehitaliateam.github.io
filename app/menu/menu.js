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

  const transformEntryText = (val, i, nodes) => {
    console.log(`translate`);
    // TODO: this need to be exectued after the render....
    return `translate(20, 20)`;
  };
  const xPos = (val, i, nodes) => {
    console.log(`xxx`);
    return 25;
  };
  const yPos = (val, i, nodes) => {
    console.log(`yyy`);
    return (i * 20) + 20;
  };
  menuEntries
    .append('text')
      .attr('class', 'menu-entry__text')
      .text(d => d.slug)
      .attr("transform", transformEntryText)
      .attr('x', xPos)
      .attr('y', yPos);

  return menu;
};

export const createMenu = bootMenu;