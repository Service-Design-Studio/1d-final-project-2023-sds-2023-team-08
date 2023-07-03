import React, { useState, useEffect } from 'react';
import '../../components/styles/others/TransactionDetailsStyles.css';
import { useNavigate } from 'react-router-dom';

import transactiondetailsjson from '../../testdata/transactiondetails.json'

const TransactionDetails = () => {
    const navigate = useNavigate();
  
    const [txdxeuser, settxdxuser] = useState("");
    const [txdxtotalamt, settxdxtotalamt] = useState("");
    const [txdxdate, settxdxdate] = useState("");
    const [txdxdescri, settxdxdescri] = useState("");
    const [txdxtxtype, settxdxtxtype] = useState("");
    const [showPopup, setShowPopup] = useState(false);
  
    // Change the constant [0,1,2] to see between sender & recipient & Exceed FTD
    const txdxuseridx = 0;
  
    useEffect(() => {
      const txdxselectedTransaction = transactiondetailsjson[txdxuseridx];
      settxdxuser(txdxselectedTransaction.user);
      settxdxtotalamt(txdxselectedTransaction.transaction['total amount']);
      settxdxdate(txdxselectedTransaction.transaction['date']);
      settxdxdescri(txdxselectedTransaction.transaction['description']);
      settxdxtxtype(txdxselectedTransaction.transaction['transaction type']);
    }, [txdxuseridx]);
  
      const txdxhandleRaiseDispute = () => {
        const totalFundDisputeSent = parseInt(
          transactiondetailsjson[txdxuseridx].transaction['total fund dispute sent']
        );
        if (totalFundDisputeSent >= 10) {
          setShowPopup(true);
        }
      };
  
    const closePopup = () => {
      setShowPopup(false);
    };

    return (
        <div className='ftdbase'> 
          <button onClick={() => {}} className='transparent'>
            <img src={require('../../../src/components/assets/back.png')} className='backtransaction' />
          </button>

            <div className='moneyinarow'>
                <p className='moneytext'> SGD</p>
                <p className={`moneytext2 ${txdxeuser === 'Sender' ? 'txdxsender-color' : 'txdxrecipient-color'}`}>{txdxtotalamt}</p>
            </div>

            <div>
                <p className='txdatetext'> {txdxdate}</p>
            </div>

            <div className='scriptbox'>
                <div className='textcontainerdetail'>
                    <p className='descriptext1'> Description</p>
                    <p className='descriptext2'> {txdxdescri}</p>
                </div>

                <div className='textcontainerdetail'>
                    <p className='transactiontext1'> Transaction Type</p>
                    <p className='descriptext2'> {txdxtxtype}</p>
                </div>
            </div>

            <button onClick={() => {}} className='transparent'>
                <div className='sharebutton'>
                    <p className='sharebuttontext'> SHARE </p>
                </div>
            </button>

            <button onClick={txdxhandleRaiseDispute} className='transparent'>
                <div className='FTDbutton'>
                    <p className='FTDbuttontext'> RAISE A FUND DISPUTE</p>
                </div>
            </button>

            {showPopup && (
                <div className='txdgreyout'>
                <div className='txdetailsPop'>
            <p className='txdpopicon'> !</p>
            <p className='txdpopheader'> Limit Exceeded</p>
            <p className='txdpoptext'>You are unable to make more than 10 fund transfer disputed daily. 
            Please wait until tomorrow.</p>
            <button onClick={closePopup} className='txdpopbutton'>
                <p className='txdpopbuttontext'>Ok</p>
            </button>
            </div>
            </div>
            )}


        </div>
    );
};

export default TransactionDetails;