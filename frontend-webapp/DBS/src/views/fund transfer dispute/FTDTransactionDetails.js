import React, {useState, useEffect} from 'react';
import '../../components/styles/fund transfer dispute/FTDTransactionDetailsStyles.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import WithdrawDisputePopUp from '../others/WithdrawDisputePopUp';

function getFTDTransactionsByDate(transactions, specificDate) {
  return transactions.filter(transaction => transaction.disputedate === specificDate);
}


const FTDTransactionDetails = ({FTDtransactions, prevpathname}) => {
  const navigate = useNavigate();
  const { userID, transactionID } = useParams();
  console.log(FTDtransactions)
  const refuted = FTDtransactions.transaction?.FTDdetails?.refutereason != null;
  const isrecipient = FTDtransactions.transaction.FTDdetails["user"] === "Recipient";
  const actionneeded = FTDtransactions.transaction.FTDdetails["status"] === "Dispute Filed";
  const withdrawable = FTDtransactions.transaction.FTDdetails["withdrawable"];
  const partialrefund = FTDtransactions.transaction.FTDdetails["correct amount"];
  const contact_details = FTDtransactions.transaction.FTDdetails["contact details"];
//   const partialrefund = 4
//   const contact_details = 88888887
  
  const [wdpopshowPopup, setwdpopShowPopup] = useState(false);

  const withdrawConfirm = () => {
        setwdpopShowPopup(true);
  };

  const withdrawData = {}
  withdrawData['disputedate'] = FTDtransactions.disputedate;
  withdrawData['total amount'] = FTDtransactions.transaction.transactiondetails.transaction['total amount'];
  withdrawData['transaction type'] = FTDtransactions.transaction.transactiondetails.transaction['transaction type'];
  withdrawData['reason'] = FTDtransactions.transaction.FTDdetails["reason"];
  withdrawData['comments'] = FTDtransactions.transaction.FTDdetails["comments"];
  withdrawData['withdrawn'] = true;

  return (
    <div className='RefuteDisputeMain'>
        <div className='RefuteDisputeHeader'>
          <button id = 'backarrow' onClick={() => navigate(prevpathname || `/${userID}/FTDtransactionsall`)} className='transparent'>
            <img src='/assets/back.png' className='back' />
          </button>
          <p className='RefuteDisputeHeaderText'>Dispute Details</p>
        </div>

        <div className='disputecontainer'>
            <div className='transactionmoney'>
                <p className='sgddispute'>SGD</p>
                <p className={FTDtransactions.transaction.transactiondetails.transaction["total amount"] < 0 ? "moneydispute" : "moneydisputein"}>{FTDtransactions.transaction.transactiondetails.transaction["total amount"].toFixed(2)}</p>
            </div>

            <div className='transactdatecontainer' style={{marginBottom : contact_details != undefined ? '1.5vh': '3vh' }}>
                <p className='transactiondatefordispute'>{FTDtransactions.transaction.transactiondetails["date"]}</p>
            </div>

            <div className='transactiondetailscontainerbox'>
                <div className='spacing' style={{padding : contact_details != undefined ? '0.5vh': '1vh' }}></div>
                <p className='transactiondetailstitlestext'>Raised On</p>
                <p className='transactiondetailsbodytext'>{FTDtransactions.disputedate}</p>

                <p className='transactiondetailstitlestext'>Transaction Type</p>
                <p className='transactiondetailsbodytext'>{FTDtransactions.transaction.transactiondetails.transaction["transaction type"]}</p>

                <p className='transactiondetailstitlestext'>Reason For Transfer Dispute</p>
                <p className='transactiondetailsbodytext'>{FTDtransactions.transaction.FTDdetails["reason"]}</p>

                {contact_details != undefined && (
                
                <div>
                    <p className='transactiondetailstitlestext'>Correct Amount Of Transaction</p>
                    <p id = 'correctamount' className='transactiondetailsbodytext'>SGD {partialrefund}</p>

                    <p className='transactiondetailstitlestext'>Disputee's Contact Details</p>
                    <p className='transactiondetailsbodytext'>{contact_details}</p>
                </div>
                )}

                <p className='transactiondetailstitlestext'>Comments From Sender</p>
                <p id="commentstome" className='transactiondetailsbodytext'>{FTDtransactions.transaction.FTDdetails["comments"]}</p>
                <div className='spacing' style={{padding : contact_details != undefined ? '0.5vh': '1vh' }}></div>
            </div>

            <div className='transactiondetailsstatusbox'>
                <p className='transactiondetailsstatus'>STATUS</p>
                <p className='transactiondetailsstatusexplained'>{FTDtransactions.transaction.FTDdetails["status"]}</p>
            </div>

            { isrecipient && actionneeded && contact_details != undefined ? (
                <div>
                    <div className='transactiondetailedexplained'>
                        <p className='transactiondetailsstatusdetailsimportant'>{FTDtransactions.transaction.FTDdetails["status detailed"]}</p>
                        <p className='partialrefund'>Refunding will lead to a <b>partial refund</b> of the difference between the amount transferred and the correct amount. If you disagree with the supposed correct amount, please contact the disputee through their contact number.</p>
                        <p className='police'>Note: It is an offence under the Penal Code for the recipient to retain or use the funds after being informed that it was sent by mistake. The sender may consider lodging a police report.</p>
                    </div>

                    <button className='refundbutton' onClick={() => navigate(`/${userID}/refunddispute/${transactionID}`)}><b>YES</b> - REFUND</button>
                    <button className='refutebutton' onClick={() => navigate(`/${userID}/refutedispute/${transactionID}`)}><b>NO</b> - REFUTE</button>
                </div>
            ): isrecipient && actionneeded ? (
                <div>
                    <div className='transactiondetailedexplained'>
                        <p className='transactiondetailsstatusdetailsimportant'>{FTDtransactions.transaction.FTDdetails["status detailed"]}</p>
                        <p className='police'>Note: It is an offence under the Penal Code for the recipient to retain or use the funds after being informed that it was sent by mistake. The sender may consider lodging a police report.</p>
                    </div>

                    <button className='refundbutton' onClick={() => navigate(`/${userID}/refunddispute/${transactionID}`)}><b>YES</b> - REFUND</button>
                    <button className='refutebutton' onClick={() => navigate(`/${userID}/refutedispute/${transactionID}`)}><b>NO</b> - REFUTE</button>
                </div>
            ) : isrecipient && refuted ? (
                <div className='reasoncontainer'>
                    <p className='refutereasoning'>REASON</p>
                    <p className='refutereasoningdetailed'>{FTDtransactions.transaction.FTDdetails["refutereason"]}</p>
                </div>
            ) : refuted ? (
                <div>
                    <div className='reasoncontainer'>
                        <p className='refutereasoning'>REASON</p>
                        <p className='refutereasoningdetailed'>{FTDtransactions.transaction.FTDdetails["refutereason"]}</p>
                    </div>
                    <p className='police2'>If you are certain that this is an erroneous transfer and the recipient is unwilling to refund you the money, please consider lodging a police report. </p>
                </div>
            ) : withdrawable ? (
                <div>
                    <div className='transactiondetailedexplained'>
                        <p className='transactiondetailsstatusdetails'>{FTDtransactions.transaction.FTDdetails["status detailed"]}</p>
                    </div>
                    <button className='withdrawbutton' onClick={withdrawConfirm}>WITHDRAW DISPUTE</button>
                    { wdpopshowPopup && (<WithdrawDisputePopUp onClose={() => setwdpopShowPopup(false)} data = {withdrawData}/>)}
                </div>
            ) : (
                <div className='transactiondetailedexplained'>
                        <p className='transactiondetailsstatusdetails'>{FTDtransactions.transaction.FTDdetails["status detailed"]}</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default FTDTransactionDetails;
