import { useNavigate } from 'react-router-dom';
import '../components/styles/RefuteSuccessStyles.css';

const RefuteSuccess = () => {
    const navigate = useNavigate();
    return(
        <div className='overall1'>
            <button id= 'closebutton' className='closebuttonRS' onClick={()=>{}}>X</button>

            <div className='stampRS'>
                <img src = './assets/greentick.png' className='greentickrefundRS'/>
                <p className='refundstatusRS'>Refute Completed</p>
                <p className='refunddateRS'>on 26 Jun 2023 12:35</p>
            </div>
            
            <div className='popboxRS'>
                <div className='subpopboxRS'>
                    <p className='raisedonRS'>Raised On</p>
                    <p className='ansRS'>DATE OF DISPUTE</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Transaction Type</p>
                    <p className='ansRS'>Funds Transfer</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Reason of Transfer Dispute</p>
                    <p className='ansRS'>Transfer to Wrong Account</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Comments from Recipient</p>
                    <p className='ansRS'>Was supposed to transfer to xxx instead</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Reason for refuting dispute</p>
                    <p className='uwuRS'>XXXXXXXXXXXXXXXXXXXXXXXX</p>
                </div>
            </div>
            
            <p className='tncforrefund1'>The sender will be notified of your refute. No further action is required on your part.</p>
            <button id='closebutton' className='submitbutton1' onClick={()=>{}}>SHARE TRANSFER DETAILS</button>
        </div>




    );
};

export default RefuteSuccess;