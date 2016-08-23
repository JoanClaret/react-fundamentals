import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      imageState : ''
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle(){
    if(this.state.imageState == 'disabled'){
      this.setState({imageState: ''})
    }else{
      this.setState({imageState: 'disabled'})
    }
  }
  render(){
    return(
      <div>
        <Avatar className={this.state.imageState}/>
        <br />
        <Button onButtonClick={this.toggle}/>
      </div>
    )
  }
}

class Avatar extends React.Component {
  render(){
    return(
      <img src="http://www.placekitten.com/80/80" className={this.props.className}/>
    )
  }
}

class Button extends React.Component {
  handleChange() {
    this.props.onButtonClick() // send value to the component
  }
  render(){
    return(
      <button onClick={this.handleChange.bind(this)}>Click me!</button>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
