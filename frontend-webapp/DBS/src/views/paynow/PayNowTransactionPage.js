import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import '../../components/styles/paynow/PayNowTransactionPageStyles.css';
import paynowdetailsjson from '../../testdata/paynowdetails.json';


const PayNowTransactionPage = () => {
    const navigate = useNavigate();
    const { userID, accountNumber } = useParams();
    const paynowtxn = paynowdetailsjson[0];
    // State to store the refund amount and comments
    const [refundAmount, setRefundAmount] = useState('');
    const [comments, setComments] = useState('');
    

    return(
        <div className = "overallPNT">
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
                        <p className= 'accountname1'>{paynowtxn.recipientdetails["recipient paynow name"]}</p>
                        <div className= 'accountnumber1'>
                            <p className= 'accountnumber1'>{paynowtxn.recipientdetails["recipient account number"]}</p>
                        </div>  
                    </div>
                </div>
                
                <div className = 'sender_container1'>
                    <div className= 'profile2'></div>
                    <div className='account_right1'>
                        <p className= 'accountname1'>{paynowtxn.senderdetails["sender paynow name"]}</p>
                        <div className= 'accountnumber1'>
                            <p className= 'accountnumber1'>{paynowtxn.senderdetails["sender account number"]}</p>
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
                <div className='rightSide1'>
                    <input
                        type="text"
                        value={refundAmount}
                        onChange={(event) => setRefundAmount(event.target.value)}
                        placeholder="0.00"
                        className="inputAmount borderless-input"
                    />
                </div>
            </div>

            <div className = 'bibibaba'>
                <div className='leftPNT'>
                    <p className='authorisedPNT'>Authorised</p>
                    <p className='remainingPNT'>Remaining</p>
                </div>
                <div className='rightPNT'>
                    <p className='AcategoryamountPNT'>SGD 40,000</p>
                    <p className='RcategoryamountPNT'>SGD 40,000</p>
                </div>
            </div>

            <p className='changelimitPNT'><u>Change Limit</u></p>
            <p className='trfdeetsPNT'>TRANSFER DETAILS</p>
            <input
                    type="text"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                    placeholder="PayNow"
                    className="commentsPNT borderless-input"
                />

            <div className='greyboxPNT'>
                <p className='tncforrefund1'>By clicking "NEXT", you agree to be bound by the <u>Terms and Conditions.</u></p>
                <button id='submitrefund1' className='LIMITSbutton1' onClick={()=>{}}>NEXT</button>
            </div>        
        </div>
    );

};

export default PayNowTransactionPage;