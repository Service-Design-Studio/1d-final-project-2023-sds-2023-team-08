import React, {useState, useEffect} from 'react';
import '../styles/AccountDetailsStyles.css';
import axios from 'axios';

//import accountJson from '../../testdata/account.json';
//const userAccounts = accountJson[0].account;


const AccountDetails = () => {

  const [userAccounts, setUserAccounts] = useState([]);
  useEffect(() => {
    const fetchuserAccounts = async () => {
      try {
        const response = await axios.get('https://dbs-backend-service-ga747cgfta-as.a.run.app/users/4/home');
        const parsedData = response.data;
        setUserAccounts(parsedData.account);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchuserAccounts();
  }, []);
  
    
    return (
        <div className='containeracc'>
          {userAccounts.map((account, index) => (
            <button onClick={() => {}} className='transparent'>
                <div className='account' key={index}>
                  <div className='accountheader'>
                      <p className='accountname'>
                      {account['account type']}
                      </p>
                      <img src='assets/expand.png' className='accountexpand' />
                  </div>
                  <p className='accountnumber'>
                      {account['account number']}
                  </p>
                  <div className='textcontainer2'>
                      <p className='sgd'>SGD</p>
                      <p className='money'>
                      {account['total amount'].toFixed(2)}
                      </p>
                  </div>
                  <div className='line'></div>
                </div>
            </button>
          ))}
        </div>
      );
    };

export default AccountDetails;