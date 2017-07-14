const React = require('react');
const Dooder = require('./../img/doodiegrill.png');
var NavLink = require('react-router-dom').NavLink;

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Congrats to Dooder and his new grill!</h2>
        <img className="dooder" src={Dooder} alt="dooder's hot bitch" />
        <h4>Now let's go get <NavLink  to='/ultimate-bravery'>brave</NavLink> you bitches.</h4>
      </div>
    )
  }
}

module.exports = Home;