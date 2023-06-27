import { useNavigate } from 'react-router-dom';
import '../components/styles/PayNowTxnStyles.css';

const PayNowTxn = () => {
    const navigate = useNavigate();
    return(
        <div classname = "overall">
            <div className='padding'>
                <div className = 'headercontainer'>
                    <button id ='backarrow' className= 'transparent' onClick= {() => {}}>
                        <img src = './assets/back.png' className = 'backarrow'/>
                    </button>
                    <p className='headertitle'>PayNow to Mobile</p>
                </div>
            </div>

            <div className = 'container_parties'>
                <div className='recipient_container'>
                    <div className= 'profile'>
                            <img src = './assets/recipient_profile.png' className='profile'/>
                    </div>
                    <div className='account_right'>
                        <p className= 'accountname'>RECIPIENT ACCOUNT</p>
                        <div className= 'accountnumber'>
                            <p className= 'accountnumber'>XXX-XXXXX-X</p>
                        </div>  
                    </div>
                </div>
                <div className = 'sender_container'>
                    <div className= 'profile'>
                            <img src = './assets/sender_profile.png' className='profile'/>
                    </div>
                    <div className='account_right'>
                        <p className= 'accountname'>SENDER ACCOUNT</p>
                        <div className= 'accountnumber'>
                            <p className= 'accountnumber'>XXX-XXXXX-Y</p>
                        </div>  
                    </div>
                </div>
                <div className = 'gif'>
                    <div className= 'gif'>
                        <img src = './assets/gif.gif' className='gif'/>
                    </div>  
                </div>
            </div>

            <div className = 'txnbox'>
                <div className='leftside'>
                    <div className='amountin'>
                        <p className = 'amountin'>Amount in</p>
                    </div>
                    <div className = 'currency'>
                        <p className='currency'>SGD</p>
                    </div>
                </div>
                <div className='rightside'>
                    <div>
                        <p className='refundamount'>XX.XX</p>
                    </div>
                </div>
            </div>

            <div className='balancebox'>
                <div className='authorisedbox'>
                    <p className='authorised'>Authorised</p>
                    <p className='authorisedamount'>SGD 40,000.00</p>
                </div>
                <div className='remainingbox'>
                    <p className='remaining'>Remaining</p>
                    <p className='remainingamount'>SGD 40,000.00</p>
                </div>
                <div className='changelimitbox'>
                    <p className='changelimit'><u>Change Limit</u></p>
                </div>
            </div>

            <div className='deetsbox'>
                <p className='trfdeets'>TRANSFER DETAILS</p>
            </div>

            <div className='commentsbox'>
                <div className='addcomments'>
                    <p className='addcomments'>Add comments for recipient</p>
                </div>
                <div className='comments'>
                    <p className='comments'>PayNow Transfer</p>
                </div>
            </div>

            <div className='warningnote'>
                <p className='regular'>By clicking "NEXT",you agree to be bound by the <u>Terms and Conditions</u>.</p>
                <div className='nextbutton'>
                    <button id='nextbutton' className='transparent' onClick={()=>{}}>
                        <p className='next'>NEXT</p>
                    </button>
                </div>
            </div>

            

        </div>
    );

};

export default PayNowTxn;