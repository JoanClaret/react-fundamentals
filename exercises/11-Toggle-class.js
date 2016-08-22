import React from 'react';
import ReactDOM from 'react-dom';

let container = document.getElementById('app');

class Button extends React.Component {
  constructor(){
    super()
    this.state = {
      class: '',
      enabled: true // initial state
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    if(this.state.enabled){
      this.setState({enabled: false})
      this.setState({class: 'disabled'})
      console.log('disabled')
    }else{
      this.setState({enabled: true})
      this.setState({class: ''})
      console.log('enabled')
    }
  }

  render(){
    return(
      <button onClick={this.onClick} className={this.state.class}>Button</button>
    )
  }
}

ReactDOM.render(<Button />, container);
