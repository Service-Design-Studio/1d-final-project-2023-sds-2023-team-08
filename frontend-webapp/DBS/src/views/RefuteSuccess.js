import { useNavigate } from 'react-router-dom';
import '../components/styles/RefuteSuccessStyles.css';

const RefuteSuccess = () => {
    const navigate = useNavigate();
    return(
        <div className='overall'>
            <button id= 'closebutton' className='closebutton'>
                <p className='cross'>X</p>
            </button>

            <div className='stamp'>
                <img src = './assets/greentick.png' className='greentickrefund'/>
                <p className='refundstatusRS'>Refute Completed</p>
                <p className='refunddateRS'>on 26 Jun 2023 12:35</p>
            </div>
            
            <div className='popbox'>
                <div className='subpopbox'>
                    <p className='raisedon'>Raised On</p>
                    <p className='dateofdispute'>DATE OF DISPUTE</p>
                </div>
                <div className='subpopbox'>
                    <p className='transactiontype'>Transaction Type</p>
                    <p className='fundstransfer'>Funds Transfer</p>
                </div>
                <div className='subpopbox'>
                    <p className='reasonoftxfdispute'>Reason of Transfer Dispute</p>
                    <p className='txftowrongacc'>Transfer to Wrong Account</p>
                </div>
                <div className='subpopbox'>
                    <p className='commentsfromrcp'>Comments from Recipient</p>
                    <p className='intendedparty'>Was supposed to transfer to xxx instead</p>
                </div>
                <div className='subpopbox'>
                    <p className='whyrefute'>Reason for refuting dispute</p>
                    <p className='uwu'>XXXXXXXXXXXXXXXXXXXXXXXX</p>
                </div>
            </div>

            <div className='transparent'>
                <p className='movingon'>The sender will be notified of your refute. No further action is required on your part.</p>
            </div>

            <button className='RSsharebutton'>
                <p className='RSsharetxfdeets'>SHARE TRANSFER DETAILS</p>
            </button>
        </div>




    );
};

export default RefuteSuccess;