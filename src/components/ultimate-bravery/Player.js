const React = require('react');

class Player extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name
    }
  }
  render() {
    return(
      <div>
        {this.props.name}
      </div>
    )
  }
}

module.exports = Player;