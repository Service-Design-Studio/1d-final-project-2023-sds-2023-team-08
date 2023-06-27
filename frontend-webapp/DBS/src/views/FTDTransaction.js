import React, {useState, useEffect} from 'react';
import '../components/styles/FTDTransactionStyles.css';
import { useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';
import BottomTabNavigator from '../navigation/BottomTabNavigator';


function getTransactionsByDate(transactions, specificDate) {
  return transactions.filter(transaction => transaction.date === specificDate);
}

const FTDTransaction = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [accountdetails, setAccountDetails] = useState([])
  const { userID, accountNumber } = useParams();

  return (
    <div className='maincontainer'>
        <div className='headertransaction'>
          <button id = 'backarrow' onClick={() => navigate(`/${userID}/home`)} className='transparent'>
            <img src='/assets/back.png' className='back' />
          </button>
          <p className='headertext'>Fund Disputes</p>
      </div>

      <div className='scrollview'>
        <div>
            <div className='datecontainer'>
            <p className='date'>Thurs, 27 Jun 23</p>
            </div>

           
            <button className='transparent' onClick={() => {}}>
                <div className='transaction'>
                    <div className='transactionheader'>
                        <p className='transactiontitle'>NETS QR PAYMENT TO: SEA KING SEAFOOD</p>
                        <img src='/assets/expand.png' className='expandtransaction'/>                    
                    </div>
                    
                    <p className='transactiontype'>FAST / PayNow Transfer</p>                 
                    
                    <div className='transactiondetails'>
                        <p className='account'>234-23242-1</p>
                        <div className='rightcontainer'>
                            <p className='sgd2'>SGD</p>
                            <p className="moneyout2">XX.XX</p>
                        </div>
                    </div>

                    <div className='statuscontainer'  style={{backgroundColor: '#1D0C86'}}>
                        <p className='statustext'>AWAITING ACTION</p>
                    </div>   
                </div>
            </button>

            <button className='transparent' onClick={() => {}}>
                <div className='transaction'>
                    <div className='transactionheader'>
                        <p className='transactiontitle'>NETS QR PAYMENT TO: SEA KING SEAFOOD</p>
                        <img src='/assets/expand.png' className='expandtransaction'/>                    
                    </div>
                    
                    <p className='transactiontype'>FAST / PayNow Transfer</p>                 
                    
                    <div className='transactiondetails'>
                        <p className='account'>234-23242-1</p>
                        <div className='rightcontainer'>
                            <p className='sgd2'>SGD</p>
                            <p className="moneyout2">XX.XX</p>
                        </div>
                    </div>

                    <div className='statuscontainer'  style={{backgroundColor: '#1D0C86'}}>
                        <p className='statustext'>ACTION REQUIRED</p>
                    </div>   
                </div>
            </button>

            <button className='transparent' onClick={() => {}}>
                <div className='transaction'>
                    <div className='transactionheader'>
                        <p className='transactiontitle'>NETS QR PAYMENT TO: SEA KING SEAFOOD</p>
                        <img src='/assets/expand.png' className='expandtransaction'/>                    
                    </div>
                    
                    <p className='transactiontype'>FAST / PayNow Transfer</p>                 
                    
                    <div className='transactiondetails'>
                        <p className='account'>234-23242-1</p>
                        <div className='rightcontainer'>
                            <p className='sgd2'>SGD</p>
                            <p className="moneyout2">XX.XX</p>
                        </div>
                    </div>

                    <div className='statuscontainer' style={{backgroundColor: '#066DAF'}}>
                        <p className='statustext'>PENDING</p>
                    </div>   
                </div>
            </button>

            <button className='transparent' onClick={() => {}}>
                <div className='transaction'>
                    <div className='transactionheader'>
                        <p className='transactiontitle'>NETS QR PAYMENT TO: SEA KING SEAFOOD</p>
                        <img src='/assets/expand.png' className='expandtransaction'/>                    
                    </div>
                    
                    <p className='transactiontype'>FAST / PayNow Transfer</p>                 
                    
                    <div className='transactiondetails'>
                        <p className='account'>234-23242-1</p>
                        <div className='rightcontainer'>
                            <p className='sgd2'>SGD</p>
                            <p className="moneyout2">XX.XX</p>
                        </div>
                    </div>

                    <div className='statuscontainer' style={{backgroundColor: '#007D23'}}>
                        <p className='statustext'>RESOLVED</p>
                    </div>   
                </div>
            </button>

            <button className='transparent' onClick={() => {}}>
                <div className='transaction'>
                    <div className='transactionheader'>
                        <p className='transactiontitle'>NETS QR PAYMENT TO: SEA KING SEAFOOD</p>
                        <img src='/assets/expand.png' className='expandtransaction'/>                    
                    </div>
                    
                    <p className='transactiontype'>FAST / PayNow Transfer</p>                 
                    
                    <div className='transactiondetails'>
                        <p className='account'>234-23242-1</p>
                        <div className='rightcontainer'>
                            <p className='sgd2'>SGD</p>
                            <p className="moneyout2">XX.XX</p>
                        </div>
                    </div>

                    <div className='statuscontainer' style={{backgroundColor: '#950909'}}>
                        <p className='statustext'>REFUTED</p>
                    </div>   
                </div>
            </button>


            <button className='transparent' onClick={() => {}}>
                <div className='transaction'>
                    <div className='transactionheader'>
                        <p className='transactiontitle'>NETS QR PAYMENT TO: SEA KING SEAFOOD</p>
                        <img src='/assets/expand.png' className='expandtransaction'/>                    
                    </div>
                    
                    <p className='transactiontype'>FAST / PayNow Transfer</p>                 
                    
                    <div className='transactiondetails'>
                        <p className='account'>234-23242-1</p>
                        <div className='rightcontainer'>
                            <p className='sgd2'>SGD</p>
                            <p className="moneyout2">XX.XX</p>
                        </div>
                    </div>

                    <div className='statuscontainer' style={{backgroundColor: '#7A7A7A'}}>
                        <p className='statustext'>WITHDRAWED</p>
                    </div>   
                </div>
            </button>
        </div>

      </div>
      <div className='bottomnav'>
          <BottomTabNavigator></BottomTabNavigator>
      </div>
    </div>
  );
};

export default FTDTransaction;
