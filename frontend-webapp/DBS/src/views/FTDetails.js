import React from 'react';
import '../components/styles/FTDetailStyles.css';
import { useNavigate } from 'react-router-dom';

const FTDetails = () => {
    const navigate = useNavigate();

    return (
        <div className='ftdbase'> 
          <button onClick={() => {}} className='transparent'>
            <img src={require('../../src/components/assets/back.png')} className='back' />
          </button>

            <div className='moneyinarow'>
                <p className='moneytext'> SGD</p>
                <p className='moneytext2'> 2</p>
                <p className='moneytext3'> .90</p>
            </div>

            <div>
                <p className='txdatetext'> Today 15 Jun</p>
            </div>

            <div className='scriptbox'>
                <p className='descriptext1'> Description</p>
                <p className='descriptext2'> NETS QR PAYMENT TO: SEA KING <br></br> SEAFOOD @ 823A</p>
                <p className='Transactext1'> Transaction Type</p>
                <p className='Transactext2'> Point-of-Sale Transaction</p>
            </div>

            <button onClick={() => {}} className='sharebutton'>
                <p className='sharebuttontext'> SHARE </p>
            </button>

            <button onClick={() => {}} className='FTDbutton'>
                <p className='FTDbuttontext'> RAISE A FUND DISPUTE</p>
            </button>

        </div>
    );
};

export default FTDetails;