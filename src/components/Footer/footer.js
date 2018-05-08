import React from 'react';
import {BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';
import './style.css';

class Footer extends React.Component{ 

  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <BottomNavigation
        value={this.state.value}
        onChange={this.handleChange}
        className = 'footer'
        showLabels>
        <BottomNavigationItem 
          label="Билеты"
          icon={<RestoreIcon />}
          containerElement={<Link to='/tickets'/>}
          className='footer__tab-item'/>
        <BottomNavigationItem
          label="Результаты"
          icon={<FavoriteIcon />}
          containerElement={<Link to='/results'/>}
          className='footer__tab-item'/>
        <BottomNavigationItem 
          label="Экзамен"
          icon={<LocationOnIcon />}
          containerElement={<Link to='/exam'/>}
          className='footer__tab-item' />
      </BottomNavigation>
    )
  }
}
export default Footer;