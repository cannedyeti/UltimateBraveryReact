const React = require('react');
const ItemAPI = require('../../utilities/ItemApi');

class ItemSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: ItemAPI.getUltimateItems,
      ultimateItems: null,
      boots: ItemAPI.getBoots,
      smite: props.smiteBool
    }
  }
  componentWillMount() {
    var smiteItems = ItemAPI.getSmite;
    var ultimateArray = this.state.items;
    var items = ItemAPI.getItems;
    items = items.data
    var temp = {};
    for (var i in items) {
      if (items[i].name === "Talisman of Ascension") {
        console.log(items[i])
      }
    }
    var bootsArr = this.state.boots;    
    var arr = []
    var boots = bootsArr[Math.floor(Math.random()*bootsArr.length)]
    if(this.state.smite) {
      var smiteeey = smiteItems[Math.floor(Math.random()*smiteItems.length)]
      arr.push(smiteeey.id)
    } else {
      arr.push(ultimateArray[Math.floor(Math.random()*ultimateArray.length)])
    }
    arr.push(ultimateArray[Math.floor(Math.random()*ultimateArray.length)])
    arr.push(ultimateArray[Math.floor(Math.random()*ultimateArray.length)])
    arr.push(ultimateArray[Math.floor(Math.random()*ultimateArray.length)])
    arr.push(ultimateArray[Math.floor(Math.random()*ultimateArray.length)])

    this.setState({
      ultimateItems: arr,
      boots: boots
    })
  }
  render() {
    return(
      <div>
        <div className="selected-items">
          <img alt={this.state.boots.name} src={'http://ddragon.leagueoflegends.com/cdn/7.12.1/img/item/' + this.state.boots.image.full} />
          {this.state.ultimateItems.map((item, index)=> {
            return <img key={index} alt={item} src={'http://ddragon.leagueoflegends.com/cdn/7.12.1/img/item/' + item + '.png'} />
          })}
        </div>
      </div>
    )
  }
}

module.exports = ItemSelect;