import React, { useState, useEffect } from 'react';
import '../../components/styles/fund transfer dispute/ReviewRefuteStyles.css';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const ReviewFTD = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const location = useLocation();
    const RaiseFTDdataOver = location.state;
    const RaiseFTDdata = RaiseFTDdataOver.transaction;
    const [csrfToken, setCsrfToken] = useState('empty');


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
      }, [location.pathname]);

    const handleSubmit = async(event) => {
        event.preventDefault();            
        let FTDdetails = RaiseFTDdata
        console.log(csrfToken)

        try{
            const now = new Date();
            const currentDay = now.toLocaleDateString('en-GB', { weekday: 'short' }); 
            const currentDate = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '');
            const currentHour = now.getHours().toString().padStart(2, '0'); 
            const currentMinutes = now.getMinutes().toString().padStart(2, '0'); 
            const currentTime = `${currentHour}:${currentMinutes}`;

            //const TransactionDetails = {transactionData, "date and time":`${currentDate} ${currentTime}`, "day and date":`${currentDay}, ${currentDate}`}
            FTDdetails['date_and_time'] = `${currentDate} ${currentTime}`
            FTDdetails['day_and_date'] =  `${currentDay}, ${currentDate}`
            FTDdetails['user'] = RaiseFTDdata['user']
            FTDdetails['reason'] = RaiseFTDdata['reason']
            FTDdetails['comments'] = RaiseFTDdata['comments']
            FTDdetails['raiseFTD'] = true
            FTDdetails['date'] = RaiseFTDdataOver['date']
            FTDdetails["correct_amount"] = parseInt(RaiseFTDdata["correct amount"])
            FTDdetails["contact_details"] = parseFloat(RaiseFTDdata["contact details"])

            let FTDdetailstobesent = FTDdetails
            FTDdetailstobesent["total_amount"] = RaiseFTDdata["total amount"]
            FTDdetailstobesent["transaction_ID"] = RaiseFTDdata["transaction ID"]
            FTDdetailstobesent["transaction_name"] = RaiseFTDdata["transaction name"]
            FTDdetailstobesent["transaction_type"] = RaiseFTDdata["transaction type"]
            delete FTDdetailstobesent["transaction type"]
            delete FTDdetailstobesent["transaction name"]
            delete FTDdetailstobesent["total amount"]
            delete FTDdetailstobesent["transaction ID"]
            delete FTDdetailstobesent["correct amount"]
            delete FTDdetailstobesent["contact details"]

            console.log(FTDdetailstobesent)

            const response = await axios.post(
                `https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/transactions/${FTDdetailstobesent["transaction_ID"]}/disputes`,
                JSON.stringify(FTDdetailstobesent) ,
                {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken,
                    'X-Requested-With': 'XMLHttpRequest'
                }
                }
            );
            if (response.data.success) {
                navigate(`/${userID}/success`, {state: FTDdetails})
            }

            else{
            }
        }

        catch (error) {
            console.log('Error:', error.toJSON());
        }
    };

    return (
        csrfToken != 'empty' && (
        <div className='RefuteDisputeMain'>
            <div className='RefuteDisputeHeader'>
                <button id = 'backarrow' onClick={() => navigate(`/${userID}/raiseFTD/${RaiseFTDdata['transaction ID']}`, {state: RaiseFTDdataOver})} className='transparent'>
                    <img src='/assets/back.png' className='back' />
                </button>
                <p className='RefuteDisputeHeaderText'>Review Fund Transfer Dispute</p>
            </div>

            <div className='transactionmoney'>
                <p className='sgddispute'> SGD</p>
                <p className={RaiseFTDdata["total amount"] < 0 ? 'reremoneytext2out' : 'reremoneytext2in'}>{RaiseFTDdata["total amount"].toFixed(2)}</p>
            </div>

            <div className='transactdatecontainer'>
                <p className='transactiondatefordispute'>{RaiseFTDdataOver["date"]}</p>
            </div>

            <div className='reredescriptionbox'>
                <p className='rereboxtextheadertitle'> Transaction Type</p>
                <p className='rereboxtextcontent'> {RaiseFTDdata['transaction type']}</p>
                <p className='rereboxtextheader'> Reason of Transfer Dispute</p>
                <p className='rereboxtextcontent'> {RaiseFTDdata['reason']}</p>

                {RaiseFTDdata["contact details"].length > 0 && (
                <div>
                    <p className='rereboxtextheader'> Correct Amount Of Transaction</p>
                    <p className='rereboxtextcontent'> SGD { parseInt(RaiseFTDdata['correct amount']).toFixed(2)}</p>
                    <p className='rereboxtextheader'> Disputee's Contact Details</p>
                    <p className='rereboxtextcontent'> {RaiseFTDdata['contact details']}</p>
                </div>
                )}
                <p className='rereboxtextheader'> Comments</p>
                <p className='rereboxtextcontentbottom'> {RaiseFTDdata["comments"]}</p>
            </div>

            <button onClick={handleSubmit} className='SubmitButton'>RAISE DISPUTE</button>
        </div>
    )
    );

};

export default ReviewFTD;