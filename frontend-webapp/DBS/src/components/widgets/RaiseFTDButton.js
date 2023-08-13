import React from 'react'
import axios from 'axios';

import '../styles/RaiseFTDStyles.css'

const RaiseFTDButton = ({
  reason,
  comment,
  correctAmount,
  contactDetails,
  TransactionDataOver,
  userID,
  navigate,
  transactionID,
  totalAmount,
  setemptyComment,
  setemptyCheckbox,
  setemptyDetails,
  setinvalidContact,
  isProfanity,
  setIsProfanity,
  csrfToken,
}) => {
  const handleSubmit = async () => {
    if (reason === '') {
      setemptyComment(false);
      setemptyCheckbox(true);
    } 
    
    else if (comment.length === 0) {
      setemptyComment(true);
      setemptyCheckbox(false);
    } 
    
    else if (
      reason === 'Transfer Wrong Amount' &&
      (correctAmount.length === 0 || contactDetails.length === 0)
    ) {
      setemptyDetails(true);
    } 
    
    else if (
      reason === 'Transfer Wrong Amount' &&
      (contactDetails.length < 8 ||
        (contactDetails[0] !== '9' &&
          contactDetails[0] !== '8' &&
          contactDetails[0] !== '6'))
    ) {
      setinvalidContact(true);
    } 
    
    else if (isProfanity === true) {
      return null
    }

    else {
      TransactionDataOver.transaction['user'] =
        totalAmount > 0 ? 'Recipient' : 'Sender';
      TransactionDataOver.transaction['reason'] = reason;
      TransactionDataOver.transaction['comments'] = comment;
      TransactionDataOver.transaction['raiseFTD'] = true;
      TransactionDataOver.transaction['transaction ID'] = transactionID;
      TransactionDataOver.transaction['correct amount'] = correctAmount;
      TransactionDataOver.transaction['contact details'] = contactDetails;
      navigate(`/${userID}/review`, { state: TransactionDataOver });
    }
    
    const profanityChecker = async () => {
      console.log('checking for profanities')
      try {
          const response = await axios.post('https://dbs-backend-service-ga747cgfta-as.a.run.app/disputes/check_for_profanity',
          JSON.stringify({'comment' : comment}),
          {
              headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': csrfToken,
              'X-Requested-With': 'XMLHttpRequest',
          }})
          console.log(response)
          if (response.data.profanity_detected) {
              console.log(response.data)
              setIsProfanity(true)
              }   
          else {
              setIsProfanity(false)
          }}
      catch (error) {
          console.log('Error:', error.toJSON());
          setIsProfanity(true)
      }
  }

  };

  return (
    <div>
        <button className='RaiseFTDButton' onClick={handleSubmit} disabled={isProfanity} style={{ backgroundColor: isProfanity ? '#AFAFAF' : '' }}>
            RAISE FUND TRANSFER DISPUTE
        </button>
    </div>

  );
};

export default RaiseFTDButton;