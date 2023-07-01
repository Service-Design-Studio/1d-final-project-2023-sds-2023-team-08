import { useNavigate } from 'react-router-dom';
import '../components/styles/ReturnFundsStyles.css';

const ReturnFunds = () => {
    const navigate = useNavigate();
    return(
        <div className = "overall1">
            <div className='padforRF1'>
                <button id ='backarrow' className= 'transparent' onClick= {() => {}}>
                    <img src = './assets/back.png' className = 'back'/>
                </button>
                <p className='headertitle5'>PayNow to Mobile / Transfer to Bank</p>
            </div>

            <div className = 'container_parties1'>
                <div className='recipient_container1'>
                    <div className= 'profile1'></div>
                    <div className='account_right1'>
                        <p className= 'accountname1'>RECIPIENT ACCOUNT</p>
                        <div className= 'accountnumber1'>
                            <p className= 'accountnumber1'>XXX-XXXXX-X</p>
                        </div>  
                    </div>
                </div>
                <div className = 'sender_container1'>
                    <div className= 'profile2'></div>
                    <div className='account_right1'>
                        <p className= 'accountname1'>SENDER ACCOUNT</p>
                        <div className= 'accountnumber1'>
                            <p className= 'accountnumber1'>XXX-XXXXX-Y</p>
                        </div>  
                    </div>
                </div>
                <div className = 'gif1'>
                    <img src = './assets/gif.gif' className='gifimage'/>
                </div>
            </div>

            <div className = 'txnbox1'>
                <div className='leftside1'>
                    <p className = 'amountin1'>Amount in</p>
                    <p className='currency1'>SGD</p>
                </div>
                <div className='rightside1'>
                    <p className='refundamount1'>XX.XX</p>
                </div>
            </div>

            <div className='RFdeetsbox1'>
                <p className='RFtrfdeets1'>TRANSFER DETAILS</p>
            </div>

            <div className='commentsbox1'>
                <p className='addcomments1'>Add comments for recipient</p>
                <p className='comments1'>RESOLVING DISPUTE</p>
            </div>

            <p className='tncforrefund1'>By clicking “SUBMIT”, the amount will be transferred <b>immediately</b> and you agree to be bound by the <u>Terms and Conditions</u>.</p>
            <button id='submitrefund1' className='submitbutton1' onClick={()=>{}}>SUBMIT</button>
        </div>
    );

};

export default ReturnFunds;