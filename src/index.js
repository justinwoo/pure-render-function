import React from 'react';
import shallowCompare from 'react/lib/shallowCompare';

export default function PureRenderFunction(definition) {
  return class extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }
    render() {
      return definition(this.props);
    }
  }
}
