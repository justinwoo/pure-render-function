import React from 'react';
import ReactDOM from 'react-dom';

import PureRenderFunction from 'pure-render-function';

var View = PureRenderFunction(function (props) {
  console.log('rendered');
  return (
    <h1>Count: {props.count}</h1>
  );
});

setInterval(function () {
  console.log('callback');
  ReactDOM.render(<View count={0}/>, document.getElementById('app'));
}, 250);
