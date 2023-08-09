import React from 'react'
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
}) => {
  const handleSubmit = async () => {
    if (reason === '') {
      setemptyComment(false);
      setemptyCheckbox(true);
    } else if (comment.length === 0) {
      setemptyComment(true);
      setemptyCheckbox(false);
    } else if (
      reason === 'Transfer Wrong Amount' &&
      (correctAmount.length === 0 || contactDetails.length === 0)
    ) {
      setemptyDetails(true);
    } else if (
      reason === 'Transfer Wrong Amount' &&
      (contactDetails.length < 8 ||
        (contactDetails[0] !== '9' &&
          contactDetails[0] !== '8' &&
          contactDetails[0] !== '6'))
    ) {
      setinvalidContact(true);
    } else {
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
  };

  return (
    <button className='RaiseFTDButton' onClick={handleSubmit}>
      RAISE FUND TRANSFER DISPUTE
    </button>
  );
};

export default RaiseFTDButton;