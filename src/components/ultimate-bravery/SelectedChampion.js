const React = require('react');
const PropTypes = require('prop-types');
const ItemSelect = require('./ItemSelect');
const SumAPI = require('../../utilities/SummonerSpellApi');

class SelectedChampion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champ: props.champ,
      smite: false,
      summoners: [],
      adjective: null
    }
    this.randomAdjective = this.randomAdjective.bind(this);
    this.defineSmite = this.defineSmite.bind(this);
    this.getSums = this.getSums.bind(this);
  }
  componentWillMount() {
    this.randomAdjective();
    this.defineSmite();
  }

  randomAdjective() {
    var choices = ['Lit', 'Dank', '1%', 'Fukkboi', 'Feeder', 'FaZe', 'Clavo\'s Bitch', 'Fuck Trent', 'Thicc']
    var a = (choices[Math.floor(Math.random()*choices.length)]);
    this.setState({
      adjective: a
    })
  }
  defineSmite() {
    var bool = Math.random() >= 0.5;
    let sums = this.getSums(bool);
    if (bool) {
      this.setState({
        smite: true,
        summoners: sums
      })
    } else {
      this.setState({
        smite: false,
        summoners: sums
      })
    }
  }
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  getTwo(summoners) {
    var sumArr = [];
    var sums = SumAPI.ultimateSpells; 
    sums = this.shuffleArray(sums)    
    sumArr.push(sums[0]);
    sumArr.push(sums[1]);
    return sumArr;
  }
  getSums(smite) {
    let sums = []
    let tempSum = this.getTwo();
    if(smite) {
      sums.push('SummonerSmite')
      sums.push(tempSum[0].key)
      return sums;
    } else {
      sums.push(tempSum[0].key)
      sums.push(tempSum[1].key)
      return sums;
    }
  }

  render() {
    var champion = this.state.champ;
    var sums = this.state.summoners;
    return(
      <div>
        <img alt={champion.name} src={"http://ddragon.leagueoflegends.com/cdn/7.12.1/img/champion/" + champion.image.full} />
        <div className='summoner-spells'>
          {this.state.summoners ? 
            sums.map((sum, index) => {
              return <img key={sum} alt={sum} src={'http://ddragon.leagueoflegends.com/cdn/7.12.1/img/spell/' + sum + '.png'} />
            })
           : null }
        </div>
        <h3>{this.state.adjective} {champion.name}</h3>
        {/*<img src={'http://ddragon.leagueoflegends.com/cdn/7.12.1/img/spell/'}/>*/}
        {this.state.adjective ? <ItemSelect smiteBool={this.state.smite}/> : null}
      </div>
    )
  }
}

module.exports = SelectedChampion;

SelectedChampion.propTypes = {
  champ: PropTypes.object.isRequired,
}
