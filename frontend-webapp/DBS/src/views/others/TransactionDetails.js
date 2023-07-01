import React from 'react';
import '../../components/styles/others/TransactionDetailsStyles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TransactionDetails = (props) => {
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const {TransactionData} = props

    const handleClick = () => {
      setClickCount(clickCount + 1);
  
      if (clickCount + 1 === 3) {
        setShowPopup(true);
        resetCounter(); // Reset the counter after triggering the pop-up
      }
    };
  
    const resetCounter = () => {
      setClickCount(0); // Reset the clickCount state to 0
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };

    return (
        <div className='ftdbase'> 
          <button onClick={() => {}} className='transparent'>
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

            <button onClick={handleClick} className='transparent'>
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
                    <button onClick={closePopup} className='transparent'>
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