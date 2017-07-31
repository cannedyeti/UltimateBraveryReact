const React = require('react');
const PropTypes = require('prop-types');
const ItemSelect = require('./ItemSelect');
const SumAPI = require('../../utilities/SummonerSpellApi');
const ChampAPI = require('../../utilities/ChampApi');

class SelectedChampion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champ: props.champ,
      smite: false,
      summoners: [],
      adjective: null,
      firstSpell: null,
      spellKey: null
    }
    this.randomAdjective = this.randomAdjective.bind(this);
    this.defineSmite = this.defineSmite.bind(this);
    this.getSums = this.getSums.bind(this);
    this.getFirstSpell = this.getFirstSpell.bind(this);
    this.reroll = this.reroll.bind(this);
  }
  componentWillMount() {
    this.randomAdjective();
    this.defineSmite();
    this.getFirstSpell();
  }
  randomAdjective() {
    var choices = ['Lit', 'Dank', '1%', 'Fukkboi', 'Feeder', 'FaZe', 'Calvo\'s Bitch', 'Fuck Trent', 'Thicc', 'Juice de la', 'HE SAID IT!', 'Mormon', 'Half Pound', 'Worthless']
    var a = (choices[Math.floor(Math.random()*choices.length)]);
    this.setState({
      adjective: a
    })
  }
  defineSmite() {
    var bool = Math.random() >= 0.75;
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
  reroll() {
    var champs = ChampAPI.champ
    var champArr = []
    for (var c in champs.champs.data) {
      champArr.push(champs.champs.data[c])
    }
    var index = Math.floor(Math.random()*champArr.length);
    var champ = champArr[index];
    var spellIndex = Math.floor(Math.random()*3);
    var firstSpell = champ.spells[spellIndex];
    var spellKey;
    if(spellIndex === 0){
      spellKey = 'Q';
    } else if (spellIndex === 1) {
      spellKey = 'W';
    } else {
      spellKey = 'E';
    }
    this.setState({
      champ: champ,
      spellKey: spellKey,
      firstSpell: firstSpell
    });
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
  getFirstSpell() {
    var champion = this.state.champ;
    var index = Math.floor(Math.random()*3);
    var firstSpell = champion.spells[index]
    var spellKey;
    if(index === 0){
      spellKey = 'Q';
    } else if (index === 1) {
      spellKey = 'W';
    } else {
      spellKey = 'E';
    }
    this.setState({
      firstSpell: firstSpell,
      spellKey: spellKey
    })
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
    var spellKey = this.state.spellKey;
    var firstSpell = this.state.firstSpell;

    return(
      <div className='selected-champ'>
        <img alt={champion.name} src={"http://ddragon.leagueoflegends.com/cdn/7.15.1/img/champion/" + champion.image.full} />
        <img className='first-spell' alt={firstSpell.image.full} src={'http://ddragon.leagueoflegends.com/cdn/7.15.1/img/spell/' + firstSpell.image.full} />
        <span className='spell-key'>{spellKey}</span>
        <div className='summoner-spells'>
          {this.state.summoners ? 
            sums.map((sum, index) => {
              return <img key={sum} alt={sum} src={'http://ddragon.leagueoflegends.com/cdn/7.15.1/img/spell/' + sum + '.png'} />
            })
           : null }
        </div>
        <h3>{this.state.adjective} {champion.name}</h3>
        {this.state.adjective ? <ItemSelect smiteBool={this.state.smite}/> : null}
        <button onClick={this.reroll}>Reroll</button>
      </div>
    )
  }
}

module.exports = SelectedChampion;

SelectedChampion.propTypes = {
  champ: PropTypes.object.isRequired,
}
