import React,  { useState, useEffect }  from 'react';
import '../components/styles/HomeScreenStyles.css';
import TopNavigator from './navigation/TopNavigation';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const HomeScreen = () => {
  const navigate = useNavigate();
  const { userID } = useParams();
  const [anyFTD, setanyFTD] = useState(false)
  const [numberofFTD, setnumberofFTD] = useState(0)

  useEffect(() => {
    const fetchFTDtransactions = async () => {
      try {
        const response = await axios.get(`https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/new_disputes_received`);
        const numFTD = response.data;
        console.log(numFTD)

        setanyFTD(numFTD['awaitingactionFTD'] >= 1);
        setnumberofFTD(numFTD['awaitingactionFTD']);

      } catch (error) {
        console.log(error);
      }
    };
    fetchFTDtransactions();
  }, []);


  return (
    <div className="container">
        <div className='scrollable'>
          <div className='homeheader'>
            <div className='header'>
              <div className='leftcontainer'>
                <button className='transparent' onClick={() => {}}>
                  <img src='/assets/bellwhite.png' alt="bell" className='bell' />
                </button>
                <button className='transparent' onClick={() => {}}>
                  <img  src='/assets/eye.png' className='eye' />
                </button>
              </div>

              <div className='rightcontainer'>
                <button className='transparent' onClick={() => {}}>
                  <img  src='/assets/help.png' className='help' />
                </button>
                <button  className='transparent' onClick={() => navigate('/login')}>
                  <div className='logoutContainer'>
                    <p className='logoutText'>LOG OUT</p>
                  </div>
                </button>
              </div>
            </div>
            
            {anyFTD ? (
            <div>
              <div className='alertbody'>
                <p className='textheaderftd1'>:(<span style={{ paddingLeft: '3vw' }}> </span>ALERT:</p>
                <p className='textheaderftd2'> YOU HAVE {numberofFTD} FUND TRANSFER DISPUTE{numberofFTD >1 ? 'S' : ''}</p>
                <p className='textbodyftd'> It is encouraged to resolve the issue as soon as possible to prevent any implication with the 
  authorities.</p>
              </div>

              <div className='alertbutton' onClick={() => navigate(`/${userID}/FTDtransactionsall`)}>
                <button className='transparent'>
                  <div className='buttonContainer'>
                      <p className='buttonText'>RESOLVE NOW</p>
                  </div>
                </button>      
              </div>
            </div>
            ) : (
            <div>
              <div className='alertbody'>
                <p className='textheader'> Make money work harder!</p>
                <p className='textbody'> Find out how you can put your cash flows to good use and achieve a sustainable financial future.</p>
              </div>
              
              <div className='alertbutton' onClick={() => {}}>
                <button className='transparent'>
                  <div className='buttonContainer'>
                      <p className='buttonText'>LET'S TALK</p>
                  </div>
                </button>      
              </div>
            </div>
            
            )}
          </div>
          <div className='containertwo'>
            <p className='text'>Smart Shortcuts</p>
            <img  src='/assets/settings.png' className='setting' />
          </div>

          <div className='containerthree'>
            <div className='"scrollview'>  
              <button id = 'paynowbutton' className='transparent' onClick={() => navigate(`/${userID}/paynowrecipient`)}>
                <div className='iconcontainer'>
                  <img  src='/assets/icons/paynow.png' className='icons' />
                  <p className='shortcut'>PayNow</p>
                </div>
              </button>
              
              <button id = 'transfermoney' className='transparent' onClick={() => navigate(`/${userID}/accounttransferrecipient`, {state:{}})}>
                <div className='iconcontainer'>
                  <img  src='/assets/icons/local_transfer.png' className='icons' />
                  <p className='shortcut'>Transfer Money</p>
                </div>
              </button>
              
              <button id='scanpay' className='transparent' onClick={() => {}}>
                <div className='iconcontainer'>
                  <img src='/assets/icons/scan&pay.png' className='icons' />
                  <p className='shortcut'>Scan & Pay</p>
                </div>
              </button>
              
              <button className='transparent' onClick={() => {}}>
                <div className='iconcontainer'>
                  <img  src='/assets/icons/transaction_history.png' className='icons' />
                  <p className='shortcut'>Transaction</p>
                  <p className='shortcut'>History</p>
                </div>
              </button>
              
              <button className='transparent' onClick={() => {}}>
                <div className='iconcontainer'>
                  <img  src='/assets/icons/local_transfer_limit.png' className='icons' />
                  <p className='shortcut'>Local Transfer</p>
                  <p className='shortcut'>Limit</p>
                </div>
              </button>
              
              <button className='transparent' onClick={() => {}}>
                <div className='iconcontainer'>
                  <img  src='/assets/icons/livebetter.png' className='icons' />
                  <p className='shortcut'>Live Better</p>
                </div>
              </button>
              
              <button className='transparent' onClick={() => {}}>
                <div className='iconcontainer'>
                  <img  src='/assets/icons/bill.png' className='icons' />
                  <p className='shortcut'>Bills</p>
                </div>
              </button>
              
              <button className='transparent' onClick={() => {}}>
              <div className='iconcontainer'>
                <img  src='/assets/icons/setpeekbalance.png' className='icons' />
                <p className='shortcut'>Set Peek</p>
                <p className='shortcut'>Balance</p>

              </div>
              </button>
              
              <button className='transparent' onClick={() => {}}>
                <div className='iconcontainer'>
                  <img  src='/assets/icons/scheduletransfer.png' className='icons' />
                  <p className='shortcut'>Transfers</p>
                  <p className='shortcut'>Scheduled</p>
                </div>
              </button>
            </div>
          </div>

          <div className="containerfour">
            <button id='transaction' className='transparent' onClick={() => navigate(`/${userID}/recenttransaction`)}>
              <div className="recenttransaction">
                <p className="recenttransactiontext">Recent Transactions</p>
                <img src='/assets/expand.png' className="expand"/>
              </div>
            </button>
          </div>

          <NavigationContainer>
            <TopNavigator></TopNavigator>
          </NavigationContainer>
        </div>
        <div className='bottomnav'>
          <BottomTabNavigator></BottomTabNavigator>
        </div>
    </div>
  );
};

export default HomeScreen;
