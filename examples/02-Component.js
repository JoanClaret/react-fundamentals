import React from 'react';
import ReactDOM from 'react-dom';

// state component 1
class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello component</h1>
        <b>Bold</b>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
