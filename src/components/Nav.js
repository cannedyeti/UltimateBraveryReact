var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return(
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink  to='/ultimate-bravery'>
          Ultimate Bravery
        </NavLink>
      </li>
      <li>
        <NavLink  to='/ultimate-10s'>
          Ultimate 10s
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;