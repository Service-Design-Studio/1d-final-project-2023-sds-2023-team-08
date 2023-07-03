import React, { useState, useEffect } from 'react';
import '../../components/styles/others/TransactionDetailsStyles.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const TransactionDetails = (props) => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const {TransactionData} = props;
    const { userID, transactionID } = useParams();

    const submitFundDispute = async () => {
      const response = await axios.get(`https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/all_transactions`);
      const totalFundDisputeSent = response.data
      if (totalFundDisputeSent['ftd today'] >= 10) {
        setShowPopup(true);
      } else {
        //navigate to raise fund transfer dispute form
      }
    };

  const closePopup = () => {
    setShowPopup(false);
  };

    return (
        <div className='ftdbase'> 
          <button onClick={() => navigate(`/${userID}/recenttransaction`)} className='transparent'>
            <img src='/assets/back.png' className='backtransaction' />
          </button>

            <div className='moneyinarow'>
                <p className='moneytext'> SGD</p>
                <p className={TransactionData.transaction.transactiondetails['total amount'] < 0 ? "moneytext2spend" : "moneytext2receive"}>{TransactionData.transaction.transactiondetails['total amount']}</p>            
            </div>
            
            <div>
              <p className='txdatetext'> {TransactionData.transaction.transactiondetails['transaction date']}</p>
            </div>

            <div className='scriptbox'>
                <div className='textcontainerdetail'>
                    <p className='descriptext1'> Description</p>
                    <p className='descriptext2'> {TransactionData.transaction.transactiondetails['transaction name']}</p>
                </div>

                <div className='textcontainerdetail'>
                    <p className='transactiontext1'> Transaction Type</p>
                    <p className='descriptext3'>{TransactionData.transaction.transactiondetails['transaction type']}</p>
                </div>
            </div>

            <button onClick={() => {}} className='transparent'>
                <div className='sharebutton'>
                    <p className='sharebuttontext'> SHARE </p>
                </div>
            </button>

            <button className='transparent' onClick={submitFundDispute}>
                <div className='FTDbutton'>
                    <p className='FTDbuttontext'> RAISE A FUND DISPUTE</p>
                </div>
            </button>

            {showPopup && (
              <div className='txdgreyout'>
                <div className='txdetailsPop'>
                  <p className='txdpopicon'> !</p>
                  <p className='txdpopheader'> Limit Exceeded</p>
                  <p className='txdpoptext'>You are unable to make more than 2 fund transfer disputed daily. 
                    Please wait till tomorrow.</p>
                  <button className='transparent' onClick={closePopup}>
                      <div className='popupbtn'>
                          <p className='txdpopbuttontext'>OK</p>
                      </div>
                  </button>
                </div>
              </div>
            )}


        </div>
    );
};

export default TransactionDetails;