import React from 'react';
import ReactDOM from 'react-dom';

// Component State
class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

// Prop Validation
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

// Default properties
App.defaultProps = {
  txt: 'Default property value',
  cat: React.PropTypes.number.isRequired
}

// Render Component
ReactDOM.render(
  <App cat={5} txt="This is the props value" />,
  document.getElementById('app')
);
