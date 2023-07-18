import { useNavigate, useParams, useLocation } from 'react-router-dom';
import '../../components/styles/fund transfer dispute/ResolveDisputeRefundScreenStyles.css';
import ftdrecipientjson from '../../testdata/ftdrecipient.json';
import axios from 'axios';
import { useState, useEffect } from 'react';


const ResolveDisputeRefundScreen = () => {
    const navigate = useNavigate();
    const { userID, transactionID } = useParams();
    const [FTDtransactions, setFTDtransactions] = useState([])
    const [effectFinish, seteffectFinish] = useState(false)
    const location = useLocation();

    useEffect(() => {
        const fetchFTDrefund = async () => {
        try {
            const response = await axios.get(`https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/transactions/${transactionID}/refund_details`);
            setFTDtransactions(response.data[0]);
            seteffectFinish(true)
        } catch (error) {
            console.log(error);
        }
        };
        fetchFTDrefund();
    }, [location.pathname]);

    let transactionData = {}
    
    if (effectFinish) {
        console.log(FTDtransactions)
        transactionData = {
            "dispute": true,
            "transaction_id":transactionID,
            "transfer_from_acc_name":FTDtransactions['refund details']['transfer from acc name'],
            "transfer_from_acc_number":FTDtransactions['refund details']['transfer from acc number'],
            "recipient_name":FTDtransactions['refund details']['recipient name'],
            "recipient_acc": FTDtransactions['refund details']['recipient acc'],
            "total_amount":FTDtransactions['refund details']['total amount'],
            "comments": "Resolving Dispute",
            "mode_of_payment": FTDtransactions['refund details']['mode of payment'],
            'recipient_bank' : 'DBS/POSB'
        }
    }


    return (
        effectFinish && (
        <div className = "overall1">
            <div className='RefuteDisputeHeader'>
                <button id ='backarrow' className= 'transparent' onClick= {() => navigate(`/${userID}/${transactionID}`)}>
                    <img src = '/assets/back.png' className = 'back'/>
                </button>
                <p className='RefuteDisputeHeaderText'>Refund Dispute</p>
            </div>

            <div className = 'container_parties1'>
                <div className='recipient_container1'>
                    <div className= 'profile1'></div>
                    <div className='account_right1'>
                        <p className= 'accountname1'>{FTDtransactions['refund details']['transfer from acc name'] }</p>
                        <div className= 'accountnumber1'>
                            <p className= 'accountnumber1'>{FTDtransactions['refund details']['transfer from acc number']}</p>
                        </div>  
                    </div>
                </div>
                <div className = 'sender_container1'>
                    <div className= 'profile2'></div>
                    <div className='account_right1'>
                        <p className= 'accountname1'>  {FTDtransactions['refund details']['recipient name']}</p>
                        <div className= 'accountnumber1'>
                            <p className= 'accountnumber1'>Disputee's Account</p>
                        </div>  
                    </div>
                </div>
                <div className = 'gif1'>
                    <img src = '/assets/gif.gif' className='gifimage'/>
                </div>
            </div>

            <div className = 'txnbox1'>
                <div className='leftside1'>
                    <p className = 'amountin1'>Amount in</p>
                    <p className='currency1'>SGD</p>
                </div>
                <div className='rightside1'>
                    <p className='refundamount1'>{FTDtransactions['refund details']['total amount'].toFixed(2)}</p>
                </div>
            </div>

            <div className='RFdeetsbox1'>
                <p className='RFtrfdeets1'>TRANSFER DETAILS</p>
            </div>

            <div className='commentsbox1'>
                <p className='addcomments1'>Comments for recipient</p>
                <p className='comments1'>Resolving Dispute</p>
            </div>

            <p className='tncforrefund1'>By clicking “SUBMIT”, the amount will be transferred <b>immediately</b> and you agree to be bound by the <u>Terms and Conditions</u>.</p>
            <button id='submitrefund1' className='submitbutton1' onClick={()=>navigate(`/${userID}/review`, {state : transactionData})}>SUBMIT</button>
        </div>
    ) 
    );
};

export default ResolveDisputeRefundScreen;