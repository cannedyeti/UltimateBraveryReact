const React = require('react');

class Ultimate10s extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    this.setPlayers = this.setPlayers.bind(this);
  }
  setPlayers() {
    var players = document.getElementById('players');
    players = players.value.split('\n');
    this.setState({
      players: players
    })
  }
  render() {
    console.log("players", this.state.players)
    return (
      <div>
        {!this.state.players.length ? 
          <div>
            <textarea id="players" placeholder="enter players, one per line"></textarea>
            <button onClick={this.setPlayers}>Make teams brave</button>
          </div>
        : null }
      </div>
    )
  }
}

module.exports = Ultimate10s