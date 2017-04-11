const React = require('react');
const { Component } = require('react');

class DumbComponent extends Component{
  constructor(props){
  super(props)

  this.state = {
    mood: 'happy',
  }
  this.handleClick = this.handleClick.bind(this)
}

  handleClick(){
    let changeMood = this.state.mood ===  'happy' ? 'sad' : 'happy'
    this.setState({mood: changeMood})
  }

  render(){

    return (
     <div className="mood" onClick={this.handleClick}>
      {this.state.mood}
      </div>
    )
  }

}

module.exports = DumbComponent
