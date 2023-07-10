import React, { useState, useEffect } from 'react';
import '../../components/styles/others/WithdrawDisputePopUpStyles.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const WithdrawDisputePopUp = ({ onClose, data }) => {
    const navigate = useNavigate();
    const {userID, transactionID}  = useParams();
    const [csrfToken, setCsrfToken] = useState('')

    useEffect(() => {
        const fetchCSRFData = async () => {
          try {
            const response = await axios.get('https://dbs-backend-service-ga747cgfta-as.a.run.app/csrf_token');
            const Token = response.data.csrfToken;
            setCsrfToken(Token);
            console.log(Token)
          } 
          
          catch (error) {
            console.log(error)
          }
        };
    
        fetchCSRFData();
      }, []);

    const wdpopclosePopup = () => {
        onClose();
    };

    
    const handleSubmit = async(event) => {
        event.preventDefault();
        let WithdrawData= data
        let TransaactionWithdraw = {}

        try{
            const now = new Date();
            const currentDay = now.toLocaleDateString('en-GB', { weekday: 'short' }); 
            const currentDate = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '');
            const currentHour = now.getHours().toString().padStart(2, '0'); 
            const currentMinutes = now.getMinutes().toString().padStart(2, '0'); 
            const currentTime = `${currentHour}:${currentMinutes}`;

            //const TransactionDetails = {transactionData, "date and time":`${currentDate} ${currentTime}`, "day and date":`${currentDay}, ${currentDate}`}
            WithdrawData['date_and_time'] = `${currentDate} ${currentTime}`
            WithdrawData['day_and_date'] =  `${currentDay}, ${currentDate}`
            console.log(WithdrawData)
            
            TransaactionWithdraw['date_and_time'] = `${currentDate} ${currentTime}`
            TransaactionWithdraw['day_and_date'] =  `${currentDay}, ${currentDate}`
            TransaactionWithdraw['status'] = 'Withdrawn'
            TransaactionWithdraw['transactionID'] = transactionID
            console.log(TransaactionWithdraw)

            const response = await axios.post(
                `https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/transactions/${transactionID}/withdraw_dispute`, 
                JSON.stringify(TransaactionWithdraw),
                {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken,
                    'X-Requested-With': 'XMLHttpRequest'
                }
                }
            );
            if (response.data.success) {
                navigate(`/${userID}/success`, {state: WithdrawData})
            }

            else{
            }
        }

        catch (error) {
            console.log('Error:', error.toJSON());
          }
        };
    

    return(
        csrfToken != '' && (
        <div className='wdpopbase'>

            <div className='wdpopgreyout'>
                <div className='wdpopup'>
                    <p className='wdpopicon'> !</p>
                    <p className='wdpopheader'> Withdraw Dispute</p>
                    <p className='wdpoptext'>
                    Are you sure you want to withdraw this fund transfer dispute? 
                    <span className='wdpopwarn'> This action cannot be undone </span> 
                    and you will not be able to raise a fund transfer dispute for this particular transaction again.
                    </p>

                    <button onClick={handleSubmit} className='wdpopbuttonblue'>
                        <p className='wdpopbuttontextblue'>OK, PROCEED AND WITHDRAW</p>
                    </button>
                    <button onClick={wdpopclosePopup} className='wdpopbuttonred'>
                        <p className='wdpopbuttontextred'> CANCEL</p>
                    </button>
                </div>
            </div>
        </div>
    ));
};
export default WithdrawDisputePopUp;