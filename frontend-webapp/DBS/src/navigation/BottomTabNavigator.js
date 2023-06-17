import React, {useState} from 'react';
import '../components/styles/BottomTabNavigatorStyles.css';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BottomTabNavigator = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='bottomtabnavigatorcontainer'>
      <button className='transparent' onClick={() => navigate('/')}>
        <img src={location.pathname === '/' ? '/assets/navbar/home_bottomfilled.png' : '/assets/navbar/home_bottom.png'} alt="home" className='navicon'/>
        <p  className={location.pathname === '/' ? 'navtextselected' : 'navtext'}>Home</p>
      </button>

      <button className='transparent' onClick={() => navigate('/invest')}>
        <img src={location.pathname === '/invest' ? '/assets/navbar/invest_bottom.png' : '/assets/navbar/invest_bottom.png'} alt="home" className='navicon'/>
        <p  className={location.pathname === '/invest' ? 'navtextselected' : 'navtext'}>Invest</p>
      </button>

      <button className='transparent' onClick={() => navigate('/pay')}>
        <img src={location.pathname === '/pay' ? '/assets/navbar/pay&transfer_bottomfilled.png' : '/assets/navbar/pay&transfer_bottom.png'} alt="home" className='navicon'/>
        <p className={location.pathname === '/pay' ? 'navtextselected' : 'navtext'}>Pay & Transfer</p>
      </button>

      <button className='transparent' onClick={() => navigate('/plan')}>
        <img src={location.pathname === '/plan' ? '/assets/navbar/plan_bottom.png' : '/assets/navbar/plan_bottom.png'} alt="home" className='navicon'/>
        <p  className={location.pathname === '/plan' ? 'navtextselected' : 'navtext'}>Plan</p>
      </button>

      <button className='transparent' onClick={() => navigate('/more')}>
        <img src={location.pathname === '/more' ? '/assets/navbar/more_bottom.png' : '/assets/navbar/more_bottom.png'} alt="home" className='navicon'/>
        <p  className={location.pathname === '/more' ? 'navtextselected' : 'navtext'}>More</p>
      </button>
    </div>
  );
};

export default BottomTabNavigator;
