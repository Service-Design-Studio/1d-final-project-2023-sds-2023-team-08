import { useNavigate } from 'react-router-dom';
import '../components/styles/LimitsPayNowTxnStyles.css';

const LimitsPayNowTxn = () => {
    const navigate = useNavigate();
    return(
        <div classname = "overallPNT">
            <div className='padforRF1'>
                <button id ='backarrow' className= 'transparent' onClick= {() => {}}>
                    <img src = './assets/back.png' className = 'back'/>
                </button>
                <p className='headertitle5'>PayNow to Mobile</p>
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

            <div className = 'bibibaba'>
                <div className='leftPNT'>
                    <p className='authorisedPNT'>Authorised</p>
                    <p className='remainingPNT'>Remaining</p>
                </div>
                <div className='rightPNT'>
                    <p className='AcategoryamountPNT'>SGD 40,000.00</p>
                    <p className='RcategoryamountPNT'>SGD 40,000.00</p>
                </div>
            </div>

            <p className='changelimitPNT'><u>Change Limit</u></p>
            <p className='trfdeetsPNT'>TRANSFER DETAILS</p>
            <p className='addcommentsPNT'>Add comments for recipient</p>
            <p className='commentsPNT'>PayNow Transfer</p>

            <div className='greyboxPNT'>
                <p className='tncforrefund1'>By clicking "NEXT", you agree to be bound by the <u>Terms and Conditions.</u></p>
                <button id='submitrefund1' className='submitbutton1' onClick={()=>{}}>SUBMIT</button>
            </div>        
        </div>
    );

};

export default LimitsPayNowTxn;