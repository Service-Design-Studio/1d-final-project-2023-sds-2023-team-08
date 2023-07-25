import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../../components/styles/paynow/PayNowTransactionPageStyles.css';
import axios from 'axios';

const PayNowTransactionPage = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const location = useLocation();
    const recipientdetails = location.state
    const [transactionamount, setTransactionAmount] = useState(recipientdetails.total_amount || '')
    const [paynowcomment, setPaynowComment] = useState('Paynow Transfer')
    const [emptyamount, setemptyamount] = useState('')
    const isWarning = recipientdetails['warning']

    const newtransactiondata = {}

    newtransactiondata['dispute'] = false
    newtransactiondata['transfer_from_acc_name'] = recipientdetails['usraccname']
    newtransactiondata['transfer_from_acc_number'] = recipientdetails['usraccnum']
    newtransactiondata['recipient_name'] = recipientdetails['nickname']
    newtransactiondata['recipient_acc'] = recipientdetails['accnum']
    newtransactiondata['recipient_phonenum'] = recipientdetails['phonenumber']
    newtransactiondata['mode_of_payment'] = 'FAST / PayNow Transfer'
    newtransactiondata['transfer_type'] = "FAST/IMMEDIATE"
    newtransactiondata['warning'] = recipientdetails['warning']
    newtransactiondata['recipient_bank'] = 'DBS/POSB'


    const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
    
    const getTransactionAmount = (e) => {
        const inputValue = e.target.value;
        console.log(inputValue)
        setTransactionAmount(inputValue)
    };

    const getPaynowComment = (e) => {
        const inputValue = e.target.value;
        setPaynowComment(inputValue)
    };

    const handleSubmit = async(event) => {
        event.preventDefault();            
        if (transactionamount === '') {
            setemptyamount("* How much would you like to transfer? Let us know")
        }
        else {
            newtransactiondata['total_amount'] = parseFloat(transactionamount)
            newtransactiondata['comments'] = paynowcomment
            navigate(`/${userID}/review`, {state:newtransactiondata })
        }
    };

    return(
        <div className = "overallPNT">
            <div className='RefuteDisputeHeader'>
                <button id ='backarrow' className= 'transparent' onClick= {() => navigate(`/${userID}/paynowrecipient`)}>
                    <img src = '/assets/back.png' className = 'back'/>
                </button>
                <p className='RefuteDisputeHeaderText'>PayNow to Mobile</p>
            </div>

            <div className = 'container_parties1'>
                <div className='recipient_container1'>
                    <div className= 'profile1'></div>
                    <div className='account_right1'>
                        <p className= 'accountname1'>{recipientdetails['usraccname']}</p>
                        <div className= 'accountnumber1'>
                            <p className= 'accountnumber1'>{recipientdetails['usraccnum']}</p>
                        </div>  
                    </div>
                </div>
                
                <div className = 'sender_container1'>
                    <div className= 'profile2'></div>
                    <div className='account_right1'>
                        <p className= 'accountname1'>{recipientdetails["nickname"]}</p>
                        <div className= 'accountnumber1'>
                            <p className= 'accountnumber1'>{recipientdetails["phonenumber"]}</p>
                        </div>  
                    </div>
                </div>
                <div className = 'gif1'>
                    <img src = '/assets/gif.gif' className='gifimage'/>
                </div>
            </div>

            {isWarning && 
                <p className='WarningNoAmountPaynow'> STAY ALERT: You have never transferred to this phone number before. Please check and ensure that you have keyed in the phone number correctly.</p>
            }

            {emptyamount.length > 0 ? (<p className='WarningNoAmountPaynow'>{emptyamount}</p>
            ) : (<div></div>)}

            <div className = 'txnbox1'>
                <div className='leftside'>
                    <p className = 'amountin1'>Amount in</p>
                    <p className='currency1'>SGD</p>
                </div>
                <div className='rightside'>
                    <form className='barrrar'>
                        <input
                            type="number"
                            id = "keyinamt"
                            className="refundamount"
                            placeholder='0.00'
                            onKeyDown={blockInvalidChar}
                            value={transactionamount}
                            onInput={getTransactionAmount}/>
                    </form>
                </div>
            </div>

            <div className = 'bibibaba'>
                <div className='leftPNT'>
                    <p className='authorisedPNT'>Authorised</p>
                    <p className='authorisedPNT'>Remaining</p>
                </div>
                <div className='rightPNT'>
                    <p className='AcategoryamountPNT'>SGD 40,000.00</p>
                    <p className='AcategoryamountPNT'>SGD 40,000.00</p>
                </div>
            </div>

            <p className='changelimitPNT'><u>Change Limit</u></p>
            <p className='trfdeetsPNT'>TRANSFER DETAILS</p>
            <p className='addcommentsPNT'>Add comments for recipient</p>
            <input
                type="text"
                className="commentsPNT"
                value={paynowcomment}
                onInput={getPaynowComment}/>

            <div className='greyboxPNT'>
                <p className='tncforrefund1'>By clicking "NEXT", you agree to be bound by the <u>Terms and Conditions.</u></p>
                <button id='submitrefund1' className='LIMITSbutton1' onClick={handleSubmit} style={{backgroundColor: isWarning ? '#A50303': '#066DAF'}}>NEXT</button>
            </div>        
        </div>
    );

};

export default PayNowTransactionPage;