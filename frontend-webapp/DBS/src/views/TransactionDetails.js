import React from 'react';
import '../components/styles/TransactionDetailsStyles.css';
import { useNavigate } from 'react-router-dom';

const FTDetails = () => {
    const navigate = useNavigate();

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
                <p className='txdatetext'> Today 15 Jun</p>
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

            <button onClick={() => {}} className='transparent'>
                <div className='FTDbutton'>
                    <p className='FTDbuttontext'> RAISE A FUND DISPUTE</p>
                </div>
            </button>

        </div>
    );
};

export default FTDetails;