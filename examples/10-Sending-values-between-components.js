import React from 'react';
import ReactDOM from 'react-dom';

let container = document.getElementById('app');

class Box extends React.Component {
  constructor(){
    super()
    this.state = {
      imageSize: 'small' // initial state
    }
    this.update = this.update.bind(this)
  }

  update(value){
    this.setState({
      imageSize: value
    })
  }

  render(){
    return(
      <div style={this.props.style}>
        <Avatar url={this.props.imageUrl} className={this.state.imageSize}/>
        <div>
          <p>{this.props.username}</p>
          <Sizer value={this.state.imageSize} onValueChange={this.update}/>
        </div>
      </div>
    );
  }
}

class Avatar extends React.Component {
  render(){
    return(
      <img src={this.props.url} ref="avatarSize" className={this.props.className} style={{marginRight: '10px'}}/>
    );
  }
}

class Sizer extends React.Component {
  handleChange(e) {
    let value = e.target.value // get event value
    this.props.onValueChange(value) // send value to the component
  }

  render(){
    return(
      <select ref="sel" value={this.props.value} onChange={this.handleChange.bind(this)}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    );
  }
}

ReactDOM.render(<Box username="Kitten 1" imageUrl="https://placekitten.com/80/80" style={{display:'flex', backgroundColor: '#f1f1f1'}}/>, container);
