// let path = require('path');
// const currdir = path.basename
// let app =

(() => {
  let container = document.getElementById('d3-app');
  let run = require('./app/app.js').default;
  // document.onload = (ev) => {
  //   console.log(`__d_ev`);
  //   app.run('test');
  // };
  window.onload = (ev) => {
    console.log(`__d_ev`);
    run(container);
    console.log(`__app started`);
  };
})();