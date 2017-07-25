const React = require('react');
const Player = require('./Player')

class Ultimate10s extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    this.setPlayers = this.setPlayers.bind(this);
  }
  setPlayers() {
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    var players = document.getElementById('players');
    players = players.value.split('\n');
    players = shuffle(players);
    this.setState({
      players: players
    })
  }
  render() {
    var team1 = this.state.players.slice(0,5);
    var team2 = this.state.players.slice(5,10);
    var players = this.state.players;
    return (
      <div>
        {!this.state.players.length ? 
          <div className='input'>
            <textarea id="players" placeholder="enter players, one per line. (limit 10)"></textarea>
            <br/>
            <button onClick={this.setPlayers}>Make teams brave</button>
          </div>
        : <div> 
            <div>
              <h3>Team 1</h3>
              { team1.map((player, index)=> {
                return <Player key={index} name={player}/>
              })}
            </div>
            <div>
              <h3>Team 2</h3>
              { team2.map((player, index)=> {
                return <Player key={index} name={player}/>
              })}
            </div>
        </div>}
      </div>
    )
  }
}

module.exports = Ultimate10s
