import React, { useState, useEffect , useRef} from 'react';
import '../components/styles/RaiseFTDStyles.css';
import '../components/styles/others/TransactionDetailsStyles.css';
import { useLocation, useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';

const RaiseFTDScreen = () => {
    const {userID, transactionID} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const TransactionData = location.state
    const totalAmount = TransactionData['total amount']
    const commentsInputRef = useRef(null);

    const [reason, setReason] = useState('')
    const [emptyComment, setemptyComment] = useState(false)
    const [emptyCheckbox, setemptyCheckbox] = useState(false)

    // const [TransactionData, setTransactionData] = useState([])
    // const [csrfToken, setCsrfToken] = useState('');
    // useEffect(() => {
    //     const fetchTransactionData = async () => {
    //       try {
    //         const response = await axios.get('https://dbs-backend-service-ga747cgfta-as.a.run.app/csrf_token'); //link to total amount
    //         setTransactionData(response.data);
    //       const response2 = await axios.get('https://dbs-backend-service-ga747cgfta-as.a.run.app/csrf_token'); //new link
    //       const Token = response2.data.csrfToken;
    //       setCsrfToken(Token);
    //       } 
          
    //       catch (error) {
    //         console.log(error)
    //       }
    //     };
    //     fetchTransactionData();
    //   }, []);

    
    const handleSubmit = async(event) => {
        event.preventDefault(); 
        const commentValue = commentsInputRef.current.value.trim();
        if (reason === ''){
            setemptyComment(false);
            setemptyCheckbox(true);
        }
        else if (commentValue === '') {
            setemptyComment(true);
            setemptyCheckbox(false);
        } 
        else {
            TransactionData['user'] = totalAmount > 0 ? "Recipient" : "Sender"
            TransactionData['reason'] = reason
            TransactionData['comments'] = commentValue
            TransactionData['raiseFTD'] = true
            TransactionData['transaction ID'] = transactionID
            console.log(TransactionData)
            navigate(`/${userID}/review`, {state: TransactionData})
        }
    };

    function adjustTextareaHeight(textarea) {
        textarea.style.height = '20px';
        textarea.style.height = `${textarea.scrollHeight}px`;
        if (textarea.value.length > 250) {
            textarea.value = textarea.value.slice(0, 250);
          }
      };
    
    function updateCharacterCount(textarea) {
    const maxLength = parseInt(textarea.maxLength);
    const currentLength = textarea.value.length;
    const charactersLeft = maxLength - currentLength;
    
    document.getElementById('characterCount').textContent = charactersLeft;
    };

    return(
        <div className='raiseFTDcontainer'>
            <div className='RefuteDisputeHeader'>
                <button onClick={() => navigate(`/${userID}/${transactionID}`)} className='transparent'>
                    <img src='/assets/back.png' className='back' />
                </button>
                <p className='RefuteDisputeHeaderText'>Raise A Fund Transfer Dispute</p>
            </div>

            <div className='moneyinarow'>
                <p className='moneytext'> SGD</p>
                <p className={totalAmount< 0 ? "moneytext2spend" : "moneytext2receive"}>{totalAmount.toFixed(2)}</p>            
            </div>
            
            <div>
              <p className='txdatetext'> {TransactionData['date']}</p>
            </div>

            <div className='scriptbox1'>
                <div className='textcontainerdetail'>
                    <p className='descriptext1'> Description</p>
                    <p className='descriptext2'> {TransactionData['transaction name']}</p>
                </div>

                <div className='textcontainerdetail'>
                    <p className='transactiontext1'> Transaction Type</p>
                    <p className='descriptext3'>{TransactionData['transaction type']}</p>
                </div>
            </div>

            { emptyComment ? (
                <p className='flashmessagetext'>* COMMENTS FIELD CANNOT BE LEFT BLANK</p>
            ) : emptyCheckbox ? (
                <p className='flashmessagetext'>* PLEASE SELECT A REASON</p>
            ) : (null)}

            <div className='reasonFTD'>
                <p className='reasonFTDtext'> Reason for Fund Transfer Dispute</p>
            </div>

            {totalAmount < 0 ? (
            <div>
                <div className='FTDcheckbox1'>
                    <input
                        type='checkbox'
                        id='transferWrongAccountCheckbox'
                        checked={reason === 'Transfer to Wrong Account'}
                        onChange={(event) => {
                        const isChecked = event.target.checked;
                        const updatedReason = isChecked ? 'Transfer to Wrong Account' : '';
                        setReason(updatedReason);
                        }}
                    />
                    <label className="checkboxtext" htmlFor='transferWrongAccountCheckbox'>Transfer to Wrong Account</label>
                </div>

                <div className='FTDcheckbox2'>
                    <input
                    type='checkbox'
                    id='transferWrongAmountCheckbox'
                    checked={reason === 'Transfer Wrong Amount'}
                    onChange={(event) => {
                        const isChecked = event.target.checked;
                        const updatedReason = isChecked ? 'Transfer Wrong Amount' : '';
                        setReason(updatedReason);
                    }}
                    />
                    <label className="checkboxtext" htmlFor='transferWrongAmountCheckbox'>Transfer Wrong Amount</label>
                </div>

                <div className='commentsBox'>
                    <textarea
                    className="commentsTextBox" 
                    name="comment" 
                    placeholder="Comments for Recipient"
                    ref={commentsInputRef} 
                    onInput={(event) => {
                        adjustTextareaHeight(event.target);
                        updateCharacterCount(event.target);
                    }}
                    maxLength={250}
                    ></textarea>
                    <p className="commentcharacterCount">/<span id="characterCount">250</span></p>
                </div>
            </div>
            ) : (
            <div>
                <div className='FTDcheckbox3'>
                <input
                    type='checkbox'
                    id='unknowntransaction'
                    checked={reason === 'Unknown Transaction'}
                    onChange={(event) => {
                    const isChecked = event.target.checked;
                    const updatedReason = isChecked ? 'Unknown Transaction' : '';
                    setReason(updatedReason);
                    }}
                />
                <label className="checkboxtext" htmlFor='unknowntransaction'>Unknown Transaction</label>
                </div>

                <div className='commentsBox'>
                    <textarea
                    className="commentsTextBox" 
                    name="comment" 
                    placeholder="Comments to Sender" 
                    ref={commentsInputRef} 
                    onInput={(event) => {
                        adjustTextareaHeight(event.target);
                        updateCharacterCount(event.target);
                    }}
                    maxLength={250}
                    ></textarea>
                    <p className="commentcharacterCount">/<span id="characterCount">250</span></p>
                </div>
            </div>
            )}

            <button className='RaiseFTDButton' onClick={handleSubmit}>RAISE FUND TRANSFER DISPUTE</button>

        </div>
    );
};

export default RaiseFTDScreen;
