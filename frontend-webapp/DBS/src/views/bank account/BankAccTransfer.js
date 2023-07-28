import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../../components/styles/paynow/PayNowTransactionPageStyles.css';
import '../../components/styles/bank account/BankAccTransferStyles.css';
import axios from 'axios';

const BankTransferTransactionPage = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const location = useLocation();
    const bankrecipientdetails = location.state

    const [transactionamount, setTransactionAmount] = useState(bankrecipientdetails.total_amount || '')
    const [transfercomment, setTransferComment] = useState('Transfer')
    const [emptyamount, setemptyamount] = useState('')
    const [userAcc, setUserAcc] = useState('')
    const [userAccName, setUserAccName] = useState('')

    const newtransactiondata = {}

    useEffect(() => {
        const fetchAccountDetails = async () => {
          try {
            const response = await axios.get(`https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/default_acc`); 
            setUserAcc(response.data.default_acc_number)
            setUserAccName(response.data.default_acc_name);
          } 
          
          catch (error) {
            console.log(error)
          }
        };
    
        fetchAccountDetails();
      }, []);


    newtransactiondata['dispute'] = false
    newtransactiondata['transfer_from_acc_name'] = userAccName
    newtransactiondata['transfer_from_acc_number'] = userAcc
    newtransactiondata['recipient_name'] = bankrecipientdetails['name']
    newtransactiondata['recipient_acc'] = bankrecipientdetails['acc']
    newtransactiondata['mode_of_payment'] = 'Account Transfer'
    newtransactiondata['transfer_type'] = "FAST/IMMEDIATE"
    newtransactiondata['recipient_bank'] = bankrecipientdetails['bank']
    newtransactiondata['acc_no_hash'] = bankrecipientdetails['acc']


    const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
    
    const getTransactionAmount = (e) => {
        const inputValue = e.target.value;
        console.log(inputValue)
        setTransactionAmount(inputValue)
    };

    const getTransferComment = (e) => {
        const inputValue = e.target.value;
        setTransferComment(inputValue)
    };

    const handleSubmit = async(event) => {
        event.preventDefault();            
        if (transactionamount === '') {
            setemptyamount("* How much would you like to transfer? Let us know")
        }
        else {
            newtransactiondata['total_amount'] = parseFloat(transactionamount)
            newtransactiondata['comments'] = transfercomment
            navigate(`/${userID}/review`, {state: newtransactiondata})
        }
    };

    return(
        <div className = "overallbank">
            <div className='RefuteDisputeHeader'>
                <button id ='backarrow' className= 'transparent' onClick= {() => navigate(`/${userID}/accounttransferrecipient`, {state:bankrecipientdetails})}>
                    <img src = '/assets/back.png' className = 'back'/>
                </button>
                <p className='RefuteDisputeHeaderText'>Transfer to Banks</p>
            </div>

            <div className = 'container_parties1'>
                <div className='sender_container1'>
                    <div className= 'profile1'></div>
                    <div className='account_right1'>
                        <p id = 'senderName' className= 'accountname1'>{userAccName}</p>
                        <div className= 'accountnumber1'>
                            <p id = 'senderAccNumber' className= 'accountnumber1'>{userAcc}</p>
                        </div>  
                    </div>
                </div>
                
                <div className = 'recipient_container1'>
                    <div className= 'profile2'></div>
                    <div className='account_right1'>
                        <p id='recipientName' className= 'accountname1'>{bankrecipientdetails['name']}</p>
                        <div className= 'accountnumber1'>
                            <p id = 'recipientAccNumber' className= 'accountnumber1'>{bankrecipientdetails['acc']}</p>
                        </div>  
                    </div>
                </div>
                <div className = 'gif1'>
                    <img src = '/assets/gif.gif' className='gifimage'/>
                </div>
            </div>

            {emptyamount.length > 0 ? (<p className='WarningNoAmountBank'>{emptyamount}</p>
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
                            id = "keyInAmtBank"
                            className="refundamount"
                            placeholder='0.00'
                            onKeyDown={blockInvalidChar}
                            value={transactionamount}
                            onInput={getTransactionAmount}/>
                    </form>
                </div>
            </div>

            <div className='transferwhen'>
                <p className='when'>When</p>
                <div className='immediatecontainer'>
                    <p className='immediate'>Immediate</p>
                    <button className='transparent'>
                        <img src='/assets/expand.png' className='expandsmall'/>
                    </button>
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

            <p className='changelimitPNT' style={{fontSize: 12}}><u>Change Limit</u></p>

            <div className='transferwhen2'>
                <p className='when'>Purpose of Transfer</p>
                <div className='immediatecontainer'>
                    <p className='immediate'>Others</p>
                    <button className='transparent'>
                        <img src='/assets/expand.png' className='expandsmall'/>
                    </button>
                </div>
            </div>

            <div className='transferwhen3'>
                <p className='when'>Transfer via FAST</p>
                <button className='transparent'>
                    <img src='/assets/expand.png' className='expandsmall'/>
                </button>
            </div>

            <div className='commentbox'>
                <p className='addcommentsBAT'>Add comments for recipient</p>
                <input
                    type="text"
                    className="commentsPNT"
                    value={transfercomment}
                    onInput={getTransferComment}
                />
            </div>

            <div className='greyboxPNT'>
                <p className='tncforrefund1'>By clicking "NEXT", you agree to be bound by the <u>Terms and Conditions.</u></p>
                <button id='submitrefund1' className='LIMITSbutton1' onClick={handleSubmit}>NEXT</button>
            </div>        
        </div>
    );

};

export default BankTransferTransactionPage;