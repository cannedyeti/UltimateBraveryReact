const React = require('react');
const Player = require('./Player')
const ChampAPI = require('../../utilities/ChampApi');
const SelectedChampion = require('./SelectedChampion');

class Ultimate10s extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      champs: []
    }
    this.setPlayers = this.setPlayers.bind(this);
    this.randChamp = this.randChamp.bind(this);
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
  randChamp(arr) {
    // need to make it so ten champions are selected on page render, then assigned to each player who is added.
    var index = Math.floor(Math.random()*arr.length);
    var champ = arr[index];
    var newArr = arr.splice(index,1);
    return champ;
  }
  render() {
    var champs = ChampAPI.champ;
    var middle;
    if(this.state.players.length <= 10) {
      middle = Math.floor(this.state.players.length/2);
    } else {
      middle = 5;
    }
    var team1 = this.state.players.slice(0,middle);
    var team2 = this.state.players.slice(middle,10);
    var players = this.state.players;
    var champArr = [];
    var usedChamps = this.state.usedChamps;
    for (var c in champs.champs.data) {
      champArr.push(champs.champs.data[c])
    }
    return (
      <div>
        {!this.state.players.length ? 
          <div className='input'>
            <textarea id="players" placeholder="enter players, one per line. (limit 10)"></textarea>
            <br/>
            <button onClick={this.setPlayers}>Make teams brave</button>
          </div>
        : <div> 
            <h3>Team 1</h3>
            <div className='teams team1'>
              { team1.map((player, index)=> {
                return (
                  <div key={index} className='team-player'>
                    <Player name={player}/>
                    <SelectedChampion champ={this.randChamp(champArr)}/>
                  </div>
                )
              })}
            </div>
            <h3>Team 2</h3>
            <div className='teams team1'>
              { team2.map((player, index)=> {
                return (
                  <div key={index} className='team-player'>
                    <Player name={player}/>
                    <SelectedChampion champ={this.randChamp(champArr)}/>
                  </div>
                )
              })}
            </div>
        </div>}
      </div>
    )
  }
}

module.exports = Ultimate10s
