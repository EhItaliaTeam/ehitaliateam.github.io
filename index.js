import {startApp} from './app/app';

(() => {
  window.reRun = startApp;
  window.onload = (ev) => {
    console.log(`__app starting...`);
    startApp();
  };
})();