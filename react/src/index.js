import React from 'react';
import ReactDOM from 'react-dom';

let element = React.createElement('h1', {}, 'THIS IS REACT');
ReactDOM.render(element, document.getElementById('app'));