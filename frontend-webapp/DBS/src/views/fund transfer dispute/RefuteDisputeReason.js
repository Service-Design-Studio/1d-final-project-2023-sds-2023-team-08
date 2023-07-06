import React, { useState, useEffect } from 'react';
import '../../components/styles/fund transfer dispute/RefuteDisputeReasonStyles.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const RefuteDisputeReason = () => {
    const navigate = useNavigate();
    const {userID, transactionID} = useParams();
    const [refutereason, setRefuteReason] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault(); // Prevent form submission
        const reasonInput = event.target.elements.refuteReason;
        const reasonValue = reasonInput.value.trim();
        if (reasonValue === '') {
            setRefuteReason(true);
        } 
        
        else {
            navigate(`/${userID}/reviewdispute`, {state : reasonValue});
            }
    };

    function adjustTextareaHeight(textarea) {
        textarea.style.height = '20px';
        textarea.style.height = `${textarea.scrollHeight}px`;
        if (textarea.value.length > 250) {
            textarea.value = textarea.value.slice(0, 250);
          }
      }
    
    function updateCharacterCount(textarea) {
    const maxLength = parseInt(textarea.maxLength);
    const currentLength = textarea.value.length;
    const charactersLeft = maxLength - currentLength;
    
    document.getElementById('characterCount').textContent = charactersLeft;
    }

    return (
        <div className='RefuteDisputeMain'>
            <div className='RefuteDisputeHeader'>
                <button onClick={() => navigate(`/${userID}/${transactionID}`)} className='transparent'>
                    <img src='/assets/back.png' className='back' />
                </button>
                <p className='RefuteDisputeHeaderText'>Refute Dispute</p>
            </div>
            <div className='RefuteDisputeBody'>
                <form className='RefuteDisputeForm' onSubmit={handleSubmit}>
                    {refutereason && (
                    <div className='RefuteDisputeWarning'>
                        <p className='warningtext'>* THIS FIELD CANNOT BE LEFT BLANK</p>
                    </div>
                    )}
                    <div className='textareacontainer'>
                        <textarea className="RefuteDisputeReason" 
                        name="refuteReason" 
                        placeholder="Reason for Refuting Dispute" 
                        onInput={(event) => {adjustTextareaHeight(event.target);
                                            updateCharacterCount(event.target);}}
                        maxLength={250}></textarea>
                        <p className="characterCount">/<span id="characterCount">250</span></p>
                    </div>
                    <p className='note1'>Note: It is an offense under the Penal Code 
                         for the recipient to retain or use the funds after being informed that it
                        was sent by mistake. The sender may consider lodging a police report.</p>
                    <p className='note2'>Your reason can be seen by the sender.</p>
                    <button className='SubmitButton'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
};
export default RefuteDisputeReason;