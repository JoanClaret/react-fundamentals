import React from 'react';
import ReactDOM from 'react-dom';

// Component State
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    let txt = this.props.txt
    return (
      <div>
        <input type="text"
          onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

// // Prop Validation
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// // Default properties
// App.defaultProps = {
//   txt: 'Default property value',
//   cat: React.PropTypes.number.isRequired
// }

// Render Component
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
