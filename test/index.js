import test from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import PureRenderFunction from '../src/index.js';

test('doesnt cause errors', function (t) {
  var MyComponent = PureRenderFunction(function () {
    return <div/>;
  });
  ReactDOMServer.renderToString(<MyComponent/>);
  t.end();
});
