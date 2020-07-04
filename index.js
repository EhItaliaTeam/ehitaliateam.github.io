import {startApp} from './app/app';

(() => {
  window.onload = (ev) => {
    console.log(`__app starting...`);
    startApp();
  };
})();