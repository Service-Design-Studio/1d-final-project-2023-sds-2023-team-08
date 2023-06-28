import React from 'react';
import '../components/styles/TransactionDetailsStyles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const FTDetails = () => {
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
  
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
            <img src={require('../../src/components/assets/back.png')} className='backtransaction' />
          </button>

            <div className='moneyinarow'>
                <p className='moneytext'> SGD</p>
                <p className='moneytext2'> 20.50</p>
            </div>

            <div>
                <p className='txdatetext'> 15 Jun</p>
            </div>

            <div className='scriptbox'>
                <div className='textcontainerdetail'>
                    <p className='descriptext1'> Description</p>
                    <p className='descriptext2'> NETS QR PAYMENT TO: SEA KING SEAFOOD @ 823A</p>
                </div>

                <div className='textcontainerdetail'>
                    <p className='transactiontext1'> Transaction Type</p>
                    <p className='descriptext2'> Point-of-Sale Transaction</p>
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
            <button onClick={closePopup} className='txdpopbutton'>
                <p className='txdpopbuttontext'>Ok</p>
            </button>
            </div>
            </div>
            )}


        </div>
    );
};

export default FTDetails;