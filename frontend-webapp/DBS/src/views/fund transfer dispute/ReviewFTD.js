import React, { useState, useEffect } from 'react';
import '../../components/styles/fund transfer dispute/ReviewRefuteStyles.css';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const ReviewFTD = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const location = useLocation();
    const RaiseFTDdata = location.state;
    console.log(RaiseFTDdata)

    const [csrfToken, setCsrfToken] = useState('');

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

    const handleSubmit = async(event) => {
        event.preventDefault();            
        let FTDdetails = RaiseFTDdata

        try{
            const now = new Date();
            const currentDay = now.toLocaleDateString('en-GB', { weekday: 'short' }); 
            const currentDate = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '');
            const currentHour = now.getHours().toString().padStart(2, '0'); 
            const currentMinutes = now.getMinutes().toString().padStart(2, '0'); 
            const currentTime = `${currentHour}:${currentMinutes}`;

            //const TransactionDetails = {transactionData, "date and time":`${currentDate} ${currentTime}`, "day and date":`${currentDay}, ${currentDate}`}
            FTDdetails['date and time'] = `${currentDate} ${currentTime}`
            FTDdetails['day and date'] =  `${currentDay}, ${currentDate}`
            FTDdetails['user'] = RaiseFTDdata['user']
            FTDdetails['reason'] = RaiseFTDdata['reason']
            FTDdetails['comments'] = RaiseFTDdata['comments']
            FTDdetails['raiseFTD'] = true
            console.log(FTDdetails)

            const response = await axios.post(
                'https://dbs-backend-service-ga747cgfta-as.a.run.app/users/login',
                { FTDdetails },
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
            navigate(`/${userID}/success`, {state: FTDdetails})
        }
    };


    return (
        <div className='RefuteDisputeMain'>
            <div className='RefuteDisputeHeader'>
                <button id = 'backarrow' onClick={() => navigate(`/${userID}/raiseFTD/${RaiseFTDdata['transaction ID']}`, {state: RaiseFTDdata})} className='transparent'>
                    <img src='/assets/back.png' className='back' />
                </button>
                <p className='RefuteDisputeHeaderText'>Review Fund Transfer Dispute</p>
            </div>

            <div className='transactionmoney'>
                <p className='sgddispute'> SGD</p>
                <p className={RaiseFTDdata["total amount"] < 0 ? 'reremoneytext2out' : 'reremoneytext2in'}>{RaiseFTDdata["total amount"].toFixed(2)}</p>
            </div>

            <div className='transactdatecontainer'>
                <p className='transactiondatefordispute'>{RaiseFTDdata["date"]}</p>
            </div>

            <div className='reredescriptionbox'>
                <p className='rereboxtextheadertitle'> Transaction Type</p>
                <p className='rereboxtextcontent'> {RaiseFTDdata['transaction type']}</p>
                <p className='rereboxtextheader'> Reason of Transfer Dispute</p>
                <p className='rereboxtextcontent'> {RaiseFTDdata['reason']}</p>
                <p className='rereboxtextheader'> Comments</p>
                <p className='rereboxtextcontentbottom'> {RaiseFTDdata["comments"]}</p>
            </div>

            <button onClick={handleSubmit} className='SubmitButton'>RAISE DISPUTE</button>
        </div>
    );

};

export default ReviewFTD;