import React, { useState, useEffect , useRef} from 'react';
import '../components/styles/RaiseFTDStyles.css';
import '../components/styles/others/NormalTransactionDetailsStyles.css';
import { useLocation, useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from './others/Loader';

const RaiseFTDScreen = () => {
    const {userID, transactionID} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const TransactionDataOver = location.state
    console.log(TransactionDataOver)
    const TransactionData = TransactionDataOver.transaction
    const totalAmount = TransactionData['total amount']
    const commentsInputRef = useRef(null);

    const [cleaningComments, setCleaningComments] = useState(false)
    const [csrfToken, setCsrfToken] = useState('')
    
    const [reason, setReason] = useState('');
    const [comment, setComment] = useState('');
    const [emptyComment, setemptyComment] = useState(false);
    const [emptyCheckbox, setemptyCheckbox] = useState(false);
    const [invalidContact, setinvalidContact] = useState(false);
    const [invalidamount, setinvalidAmount] = useState(false);
    const [emptydetails, setemptyDetails] = useState(false);
    const [wrongAmount, setWrongAmount] = useState(false);
    const [correctAmount, setCorrectAmount] = useState('');
    const [contactDetails, setContactDetails] = useState('');

    
    useEffect(() => {
        const fetchCSRFData = async () => {
          try {
            const response = await axios.get('https://dbs-backend-service-ga747cgfta-as.a.run.app/csrf_token'); // update link to get new csrftoken?
            const Token = response.data.csrfToken;
            setCsrfToken(Token);
          } 
          
          catch (error) {
            console.log(error)
          }
        };
    
        fetchCSRFData();
      }, []);


    useEffect(() => {
        const textarea = commentsInputRef.current;
        adjustTextareaHeight(textarea)
        updateCharacterCount(textarea)
      }, [comment]);

    const handleSubmit = async(event) => {
        event.preventDefault(); 

        if (reason === ''){
            setemptyComment(false);
            setemptyCheckbox(true);
        }
        else if (comment.length === 0) {
            setemptyComment(true);
            setemptyCheckbox(false);
        } 
        else if (reason === 'Transfer Wrong Amount' && (correctAmount.length == 0 || contactDetails.length == 0 )) {
            setemptyDetails(true)
        }
        else if (reason === 'Transfer Wrong Amount' && (contactDetails.length < 8  && contactDetails.length > 0 || contactDetails[0] != 9 && contactDetails[0] != 8 && contactDetails[0] != 6 )) {
            setinvalidContact(true)
        }
        else {
            TransactionDataOver.transaction['user'] = totalAmount > 0 ? "Recipient" : "Sender"
            TransactionDataOver.transaction['reason'] = reason
            TransactionDataOver.transaction['comments'] = comment
            TransactionDataOver.transaction['raiseFTD'] = true
            TransactionDataOver.transaction['transaction ID'] = transactionID
            TransactionDataOver.transaction['correct amount'] = correctAmount
            TransactionDataOver.transaction['contact details'] = contactDetails
            navigate(`/${userID}/review`, {state: TransactionDataOver})
        }
    };

    const adjustTextareaHeight = (textarea) => {
        textarea.style.height = '20px';
        textarea.style.height = `${textarea.scrollHeight}px`;
        document.getElementById('loadingOverlay').style.height = `${textarea.scrollHeight + 12}px`;
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


    function handleCorrectAmount(event) {
        const { value } = event.target;
        if (value > -totalAmount) {
            setinvalidAmount(true)
        } else {
            setinvalidAmount(false)
            setCorrectAmount(value) 
        }
      };

    
    const handleContactDetails = (event) => {
        const contact = event.target.value.replace(/\D/g, '').slice(0, 8);
        setContactDetails(contact);
    };

    const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

    const cleanComments = async () => {
        if (comment.length <= 0) {
            setemptyComment(true)
            setemptyCheckbox(false)
        } else if (reason.length <= 0) {
            setemptyComment(false);
            setemptyCheckbox(true)
        } else {
            setemptyComment(false)
            setCleaningComments(true)

            document.getElementById('loadingcursor').style.visibility = 'visible';
            document.getElementById('Aitext').textContent = 'AI is working ';
            sleep(1000).then( async () => {
                try{
                    const commentData = {}

                    commentData['transactionAmt'] = totalAmount
                    commentData['reason'] = reason
                    commentData['correctamount'] = parseFloat(correctAmount)
                    commentData['comment'] = comment
                    console.log(commentData)
                    
                    const response = await axios.post(
                        `https://dbs-backend-service-ga747cgfta-as.a.run.app/disputes/generate_dispute_comment`, //link to axios
                        JSON.stringify(commentData),
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'X-CSRF-Token': csrfToken,
                                'X-Requested-With': 'XMLHttpRequest'
                            }
                        }
                    );
                    if (response.data.success) {
                        console.log(response.data)
                        sleep(2000).then(() => {
                            document.getElementById('loadingcursor').style.visibility = 'hidden';
                            document.getElementById('Aitext').textContent = 'Comments is cleaned!';
                            setComment(response.data.result);
                            sleep(1500).then(() => {
                                setCleaningComments(false)            
                            })
                        })

                    }
                    else{
                    }
                }
                catch (error) {
                    console.log('Error:', error.toJSON());
                }
            });
        };
    }




    return(
        <div className='raiseFTDcontainermain'>
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
              <p className='txdatetext'> {TransactionDataOver['date']}</p>
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

            {emptyCheckbox && (
                <p className='flashmessagetext'>* PLEASE SELECT A REASON</p>
            )}

            <div className='reasonFTD'>
                <p className='reasonFTDtext'> Reason for Fund Transfer Dispute</p>
            </div>

            {totalAmount < 0 ? (
            <div>

                <div className='FTDcheckbox1'>
                    <input
                        type='radio'
                        id='transferWrongAccountCheckbox'
                        checked={reason === 'Transfer to Wrong Account'}
                        onChange={(event) => {
                        const isChecked = event.target.checked;
                        const updatedReason = isChecked ? 'Transfer to Wrong Account' : '';
                        setWrongAmount(!isChecked)
                        setReason(updatedReason);
                        }}
                    />
                    <label className="checkboxtext" htmlFor='transferWrongAccountCheckbox'>Transfer to Wrong Account</label>
                </div>

                <div className='FTDcheckbox2'>
                    <input
                    type='radio'
                    id='transferWrongAmountCheckbox'
                    checked={reason === 'Transfer Wrong Amount'}
                    onKeyDown={blockInvalidChar}
                    onChange={(event) => {
                        const isChecked = event.target.checked;
                        const updatedReason = isChecked ? 'Transfer Wrong Amount' : '';
                        setWrongAmount(isChecked)
                        setReason(updatedReason);
                    }}
                    />
                    <label className="checkboxtext" htmlFor='transferWrongAmountCheckbox'>Transfer Wrong Amount</label>
                </div>

                { wrongAmount &&
                    <div>
                        { invalidContact ? (
                                <p className='flashmessagetext2'>* PLEASE ENTER A VALID PHONE NUMBER</p>
                            ) : emptydetails ? (
                                <p className='flashmessagetext2'>* THESE FIELDS CANNOT BE LEFT BLANK</p>
                            ) : invalidamount ? (
                                <p className='flashmessagetext2'>* CORRECT AMOUNT SHOULD NOT EXCEED TRANSACTION AMOUNT</p>
                            ): (null)}

                        <div className='expandingcontainer'>
                            <input
                                type="number"
                                id="correctAmount"
                                onChange={handleCorrectAmount}
                                value={correctAmount}
                                onKeyDown={blockInvalidChar}
                                className='detailscontainer'
                                placeholder='Correct Amount Of Transaction' />
                        
                            <input
                                type="number"
                                id="contactDetails"
                                onChange={handleContactDetails}
                                value={contactDetails}
                                className='detailscontainer'
                                placeholder='Your Phone Number' 
                                />
                        </div>
                    </div>
                }

                {emptyComment && (
                    <p className='flashmessagetextcomments'>* COMMENTS FIELD CANNOT BE LEFT BLANK</p>
                )}

                
                <div className='commentsBox'>
                    <div className='loadingScreen' id='loadingOverlay' style={{visibility: cleaningComments ? 'visible' : 'hidden'}}> 
                        <div id='loadingcursor'><LoadingScreen/></div>
                        <p className='Aitext' id='Aitext'>AI is working <span className="dotAnimation" id='dotanimation'> </span></p>
                    </div>

                    <textarea
                    className="commentsTextBox" 
                    name="comment" 
                    placeholder="Comments for Recipient"
                    ref={commentsInputRef} 
                    value={comment}
                    onInput={(event) => setComment(event.target.value)}
                    maxLength={250}
                    ></textarea>
                    <div className='AIassist' style={{top: wrongAmount ? '75vh' : '65vh'}} onClick={cleanComments}>
                        <span className="hovertext">AI Assist: Help me clean</span>
                    </div>
                    <p className="commentcharacterCount">/<span id="characterCount">250</span></p>
                </div>
            </div>
            ) : (
            <div>
                {emptyComment && (
                        <p className='flashmessagetextcomments'>* COMMENTS FIELD CANNOT BE LEFT BLANK</p>
                    )}
                <div className='FTDcheckbox3'>
                <input
                    type='radio'
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
                    <div className='loadingScreen' id='loadingOverlay' style={{visibility: cleaningComments ? 'visible' : 'hidden'}}> 
                        <div id='loadingcursor'><LoadingScreen/></div>
                        <p className='Aitext' id='Aitext'>AI is working <span className="dotAnimation" id='dotanimation'> </span></p>
                    </div>
                    <textarea
                    className="commentsTextBox" 
                    name="comment" 
                    placeholder="Comments to Sender" 
                    value={comment}
                    ref={commentsInputRef} 
                    onInput={(event) => {
                        adjustTextareaHeight(event.target);
                        updateCharacterCount(event.target);
                        setComment(event.target.value);
                    }}
                    maxLength={250}
                    ></textarea>
                    <div className='AIassist' style={{top: '60.5vh'}} onClick={cleanComments}>
                        <span className="hovertext">AI Assist: Help me clean</span>
                    </div>
                    <p className="commentcharacterCount">/<span id="characterCount">250</span></p>
                </div>
            </div>
            )}

            <button className='RaiseFTDButton' onClick={handleSubmit}>RAISE FUND TRANSFER DISPUTE</button>

        </div>
    
    );
};

export default RaiseFTDScreen;
