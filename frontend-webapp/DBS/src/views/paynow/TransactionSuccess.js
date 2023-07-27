import React, { useState, useEffect } from 'react';
import '../../components/styles/fund transfer dispute/ResolveSuccessStyles.css'
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const TransactionSucess = (props) => {
    const navigate = useNavigate();
    const {userID} = useParams();
    const {transactionDetails} = props;
    const transactionID = transactionDetails['transaction_id']
    const [TransactionDetails, setTransactionDetails] = useState([])
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/transactions/${transactionID}`);
            setTransactionDetails(response.data[0].transaction.transactiondetails);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [location.pathname]); 
    
    console.log(TransactionDetails)
    return (
        TransactionDetails != [] && (
            <div className='RefuteDisputeMain'>
                <button onClick={() => navigate(`/${userID}/home`)} className='successtxtransparent'>X</button>
                <div className='successtxgreenbox'>
                    <img src='/assets/greentick.png' className='successtxgreentick' />
                </div>

                <p className='successheadertext'> Successful</p>
                <p className='successtxdate'>on {transactionDetails["date_and_time"]}</p>

                <div className='successtxdescriptboxblack'>
                    <p className='successtxdescriptboxblacktextop'> Amount in</p>
                    <div className='successtxdescriptboxtransparent'>
                        <p className='successtxdescriptboxtransparentleft'> SGD</p>
                        <p className='successtxdescriptboxtransparentright'> {transactionDetails["total_amount"].toFixed(2)}</p>
                    </div>
                </div>

                <div className='successtxdescriptbox'>
                    <p className='successtxgreytextheadertitle'> From</p>
                    <p className='successtxblacktextheader'> {transactionDetails["transfer_from_acc_name"]}</p>
                    <p id = "banknumber" className='successtxgreytextheader2'> {transactionDetails["transfer_from_acc_number"]}</p>
                    <p className='successtxgreytextheader'> To</p>
                    <p className='successtxblacktextheader'> {transactionDetails["recipient_name"]}</p>
                    <p id="phonenumber" className='successtxgreytextheader2'> {transactionDetails["recipient_phonenum"] != undefined ? transactionDetails["recipient_phonenum"]: transactionDetails['recipient_acc']}</p>
                    <p className='successtxgreytextheader'> Transfer Type</p>
                    <p className='successtxblacktextheader'> {transactionDetails["transfer_type"]}</p>
                    <p className='successtxgreytextheader'> Your Comments</p>
                    <p id="yourcomments" className='successtxblacktextheaderbottom'> {transactionDetails["comments"]}</p>
                </div>

                <div className='successtxwrongbox'>
                    <p className='successtxwrongtx'> Made a wrong transfer?</p>
                    <Link className='successtxclicklink'  to={`/${userID}/raiseFTD/${transactionID}`} state={TransactionDetails }> Click here</Link>
                </div>

                <button onClick={() => {}} className='sharetransferdetailspaynow'>SHARE TRANSFER DETAILS</button>
                <button onClick={() => navigate(`/${userID}/paynowrecipient`)} className='anothertransferpaynow'>MAKE ANOTHER TRANSFER</button>

                
            </div>
    ));
};
export default TransactionSucess;