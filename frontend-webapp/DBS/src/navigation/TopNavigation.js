import React, {useEffect, useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import '../components/styles/TopNavigationStyles.css';
import AccountDetails from '../components/codeblocks/AccountDetails';
import axios from 'axios';

//import accountJson from '../testdata/account.json';
//const userAccounts = accountJson[0].account;
//const totalAmounts = userAccounts.map(account => account['total amount']);
// const totalAmountSum = userAccounts.reduce((sum, account) => sum + account['total amount'], 0).toFixed(2);

const Tab = createMaterialTopTabNavigator();

const Accounts = () => {
    const [showMore, setShowMore] = useState(false);
    const [userData, setUserData] = useState([]);
    const [totalAmountSum, setTotalAmountSum] = useState(0);
  
    useEffect(() => {
        const fetchAccountData = async () => {
          try {
            const response = await axios.get('https://dbs-backend-service-ga747cgfta-as.a.run.app/users/4/home');
            const parsedData = response.data

            setUserData(parsedData.account);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchAccountData();
      }, []);
      
      useEffect(() => {
        const sum = userData.reduce((total, account) => total + account['total amount'], 0);
        setTotalAmountSum(sum.toFixed(2));
      }, [userData]);
      
      console.log(totalAmountSum, userData);
      

    return(
        <div className='container'>
            <div>
                <div className='header1'>
                    <div className='blueline'>
                    </div>
                    <p className='text'>Your Net Worth</p>
                    <img src='/assets/expand.png' className='expand2'/>
                </div>

                <div className='container2'>
                    <div className='value'>Value</div>
                    <div className='textcontainer'>
                        <p className='sgd'>SGD</p>
                        <p className='money'>{totalAmountSum}</p>
                    </div>
                </div>

                <div className='line'>
                </div>
            </div>

            <button className='buttontransparent'onClick={() => setShowMore(!showMore)}>
                <div>
                    <div className='header1'>
                        <div className='yellowline'>
                        </div>
                        <p className='text'>Deposits</p>
                        <img src='/assets/expand.png' className={showMore ? 'expandrotated' : 'expandrotated2'} />
                    </div>

                    <div className='container2'>
                        <div className='value'>Balance</div>
                        <p className='money'>{totalAmountSum}</p>
                    </div>

                    <div className='line'>
                    </div>
                </div>
            </button>
            {showMore && <AccountDetails />}
        </div>
    );
};

const Insights = () => (
        <div className='insightscontainer'>
            <div className='rectangle'>
                <p className='date2'>14 JUN</p>
                <p className='title'>Review your budget</p>
                <p className='body'>You've maintained your monthly spending average.</p>
            </div>

            <div className='rectangle'>
                <p className='date2'>14 JUN</p>
                <p className='title'>Resolve unexpected transactions quickly!</p>
                <p className='body'>Here are some tips for you.</p>
            </div>

            <div className='rectangle'>
                <p className='date2'>14 JUN</p>
                <p className='title'>Was this deposit expected?</p>
                <p className='body'>You don't often receive money from this source.</p>
            </div>
        </div>
        );

const TopNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#444444",
        tabBarInactiveTintColor: "#A3A3A3",
        tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'Lato',
            fontWeight: 600,
        },
        tabBarIndicatorStyle: {backgroundColor:'#EBAA4E'},
        })}>      
        <Tab.Screen name="ACCOUNTS" component={Accounts} />
        <Tab.Screen name="INSIGHTS" component={Insights} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
