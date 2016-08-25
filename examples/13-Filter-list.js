import React from 'react';
import ReactDOM from 'react-dom';

class FilteredList extends React.Component {

  constructor(){
    super()
    this.state = {
      initialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      items: []
    }
  }

  filterList(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }

  componentWillMount(){
    this.setState({items: this.state.initialItems})
  }

  render(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
        <List items={this.state.items}/>
      </div>
    )
  }
}

class List extends React.Component {
  render(){
    return (
      <ul>
        {
          this.props.items.map(function(item) {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    )
  }
}

ReactDOM.render(<FilteredList />, document.getElementById('app'));
