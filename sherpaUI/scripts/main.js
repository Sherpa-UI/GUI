import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';

window.onload = function () {
  ReactDOM.render(<Main />, document.getElementById('app'));

  const webview = document.querySelector('webview')
  const indicator = document.querySelector('.indicator')

  const loadstart = () => {
    indicator.innerText = 'loading...'
  }

  const loadstop = () => {
    indicator.innerText = '';
  }

  webview.addEventListener('did-start-loading', loadstart);
  webview.addEventListener('did-stop-loading', loadstop);

}

