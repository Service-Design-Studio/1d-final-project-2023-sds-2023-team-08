import React, {useState} from 'react';
import '../components/styles/BottomTabNavigatorStyles.css';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const BottomTabNavigator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {userID} = useParams();

  return (
    <div className='bottomtabnavigatorcontainer'>
      <button className='transparent' onClick={() => navigate(`/${userID}/home`)}>
        <img src={location.pathname === `/${userID}/home` ? '/assets/navbar/home_bottomfilled.png' : '/assets/navbar/home_bottom.png'} alt="home" className='navicon'/>
        <p  className={location.pathname === `/${userID}/home` ? 'navtextselected' : 'navtext'}>Home</p>
      </button>

      <button className='transparent' onClick={() => navigate(`/${userID}/invest`)}>
        <img src={location.pathname === `/${userID}/invest` ? '/assets/navbar/invest_bottom.png' : '/assets/navbar/invest_bottom.png'} alt="invest" className='navicon'/>
        <p  className={location.pathname === `/${userID}/invest` ? 'navtextselected' : 'navtext'}>Invest</p>
      </button>

      <button className='transparent' onClick={() => navigate(`/${userID}/pay`)}>
        <img src={location.pathname === `/${userID}/pay` ? '/assets/navbar/pay&transfer_bottomfilled.png' : '/assets/navbar/pay&transfer_bottom.png'} alt="pay" className='navicon'/>
        <p className={location.pathname === `/${userID}/pay` ? 'navtextselected' : 'navtext'}>Pay & Transfer</p>
      </button>

      <button className='transparent' onClick={() => navigate(`/${userID}/plan`)}>
        <img src={location.pathname === `/${userID}/plan` ? '/assets/navbar/plan_bottom.png' : '/assets/navbar/plan_bottom.png'} alt="plan" className='navicon'/>
        <p  className={location.pathname === `/${userID}/plan` ? 'navtextselected' : 'navtext'}>Plan</p>
      </button>

      <button className='transparent' onClick={() => navigate(`/${userID}/more`)}>
        <img src={location.pathname === `/${userID}/more` ? '/assets/navbar/more_bottom.png' : '/assets/navbar/more_bottom.png'} alt="more" className='navicon'/>
        <p  className={location.pathname === `/${userID}/more` ? 'navtextselected' : 'navtext'}>More</p>
      </button>
    </div>
  );
};

export default BottomTabNavigator;
