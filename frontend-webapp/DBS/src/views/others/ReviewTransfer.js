import '../../components/styles/others/ReviewTransferStyles.css';
import jsonData from '../../testdata/reviewtransferdata.json';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import SwipeToPay from '../paynow/SwipeToPay';

const ReviewTransfer = () => {
    const navigate = useNavigate();
    const {userID} = useParams();
    const location = useLocation();
    const transactionData = location.state;
    const isDispute = transactionData['dispute'];
    const [csrfToken, setCsrfToken] = useState('');
    const isWarning = transactionData['warning'];
    const isBankTransfer = transactionData['mode_of_payment'] == 'Account Transfer'
    console.log(transactionData)
    console.log(isBankTransfer)

    useEffect(() => {
        const fetchCSRFData = async () => {
          try {
            const response = await axios.get('https://dbs-backend-service-ga747cgfta-as.a.run.app/csrf_token'); // update link to get new csrftoken?
            const Token = response.data.csrfToken;
            setCsrfToken(Token);
          } 
          
          catch (error) {
            console.log(error)
          }
        };
    
        fetchCSRFData();
      }, []);
    
    const handleSubmit = async(event=null) => {
        if (event) {
            console.log('submit2')
            event.preventDefault();
        }
        let TransactionDetails= transactionData
        console.log('submit')
        try{
            const now = new Date();
            const currentDay = now.toLocaleDateString('en-GB', { weekday: 'short' }); 
            const currentDate = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '');
            const currentHour = now.getHours().toString().padStart(2, '0'); 
            const currentMinutes = now.getMinutes().toString().padStart(2, '0'); 
            const currentTime = `${currentHour}:${currentMinutes}`;

            TransactionDetails['date_and_time'] = `${currentDate} ${currentTime}`
            TransactionDetails['day_and_date'] =  `${currentDay}, ${currentDate}`
            TransactionDetails['transfer_type'] = "FAST/IMMEDIATE"

            const [response1, response2] = await axios.all([
                axios.post(
                    `https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/transactions`,
                    JSON.stringify(TransactionDetails),
                    {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': csrfToken,
                        'X-Requested-With': 'XMLHttpRequest'
                        }
                    }),
                
                isDispute ? 
                    axios.post(
                    `https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/transactions/${TransactionDetails['transaction_id']}/resolve_dispute`,
                    JSON.stringify(TransactionDetails),
                    {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': csrfToken,
                        'X-Requested-With': 'XMLHttpRequest'
                        }
                    })
                : (null)
                ]);

            if (response1.data.success && (!isDispute || (isDispute && response2.data.success))) {
                TransactionDetails['transaction_id'] = response1.data.transactionID
                navigate(`/${userID}/success`, {state: TransactionDetails})
            }

            else{
            }
        }

        catch (error) {
            console.log('Error:', error);
          }
        };
    
    const backNavigation = () => {
            if (isDispute) {
                navigate(`/${userID}/refunddispute/${transactionData['transaction_id']}`);
            } else if (isBankTransfer) {
                navigate(`/${userID}/accounttransfer`, {
                    state: {
                        'name': transactionData['recipient_name'],
                        'acc': transactionData['recipient_acc'],
                        'bank': transactionData['recipient_bank'],
                        'total_amount' : transactionData['total_amount'],
                    }
                });
            } else {
                navigate(`/${userID}/paynow`, {
                    state: {
                        'usraccname': transactionData['transfer_from_acc_name'],
                        'usraccnum': transactionData['transfer_from_acc_number'],
                        'nickname': transactionData['recipient_name'],
                        'accnum': transactionData['recipient_acc'],
                        'phonenumber': transactionData['recipient_phonenum'],
                        'warning': transactionData['warning'],
                        'total_amount': transactionData['total_amount']
                    }
                });
            }
        }
    
    return (
        <div className='RefuteDisputeMain'>
            <div className='RefuteDisputeHeader'>
                <button id = 'backarrow' onClick={backNavigation} className='transparent'>
                    <img src='/assets/back.png' className='back' />
                </button>
                <p className='RefuteDisputeHeaderText'>Review Transfer</p>
            </div>

            <div className='ReviewTransferBody'>
                <div className='ReviewTransferBox'>
                    <div className='ReviewTransferBoxBlueText'>
                        <p className='amountin'>Amount in</p>
                        <div className='ReviewTransferBoxBlueSubText'>
                            <p className='ReviewTransferBoxBlueSubTextLeft'>SGD</p>
                            <p className='ReviewTransferBoxBlueSubTextRight'>{transactionData['total_amount'].toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="ReviewTransferBoxWhite">

                        <div className='Chunk1'>
                            <p className='reviewtext'>From</p>
                            <p className='accounttextname'>{transactionData['transfer_from_acc_name']}</p>
                            <p id = "banknumber" className='reviewtext'>{transactionData['transfer_from_acc_number']}</p>
                        </div>
                        
                        <div className='Chunk'>
                            <p className='reviewtext'>To</p>
                            <p className='accounttextname'>{transactionData['recipient_name']}</p>
                            <p id="phonenumber" className='reviewtext'>{isDispute ? "Disputee's Account" : isBankTransfer ? transactionData['recipient_acc']: transactionData['recipient_phonenum']}</p>
                        </div>

                        <div className='Chunk'>
                            <p className='reviewtext'>Transfer Type</p>
                            <p className='accounttextname'>FAST/IMMEDIATE</p>
                        </div>

                        <div className='Chunk2'>
                            <p className='reviewtext'>Your Comments</p>
                            <p id="yourcomments" className='accounttextname'>{transactionData['comments']}</p>
                        </div>

                    </div>
                </div>
            </div>
            { (isWarning) ? (
                <SwipeToPay handleSubmit={handleSubmit}></SwipeToPay>
            ): (
                <button className= { isDispute ? 'TransferNow' : 'TransferPayNow'} onClick={handleSubmit}>{ isDispute ? 'TRANSFER NOW' : 'NEXT'}</button> 
            )}
        </div>

    );
};
export default ReviewTransfer;