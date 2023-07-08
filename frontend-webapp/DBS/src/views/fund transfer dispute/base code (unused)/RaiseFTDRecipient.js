import React, { useState, useEffect } from 'react';
import '../../../components/styles/fund transfer dispute/RaiseFTDUserRecipientStyles.css';

function RaiseFTDRecipient() {
  //-------------------------------- Code for State Variables -----------------------------------
  //---------------------------------------------------------------------------------------------

  const [isUnknownTransactionChecked, setIsUnknownTransactionChecked] = useState(false);
  const [commentsForRecipients, setCommentsForRecipients] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  //-------------------------------- Code for Event Handlers -----------------------------------
  //--------------------------------------------------------------------------------------------

  const handleUnknownTransactionCheckboxChange = () => {
    setIsUnknownTransactionChecked(!isUnknownTransactionChecked);
  };

  const handleCommentsForRecipientsChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 250) {
      setCommentsForRecipients(inputText);
    }
  };

  const remainingCharacters = 250 - commentsForRecipients.length;

  //---------------------------- Code for pushing the form data to JSON ------------------------
  //--------------------------------------------------------------------------------------------

//   const [formData, setFormData] = useState({
//     isTransferWrongAccountChecked: false,
//     isTransferWrongAmountChecked: false,
//     modeOfPayment: '',
//     correctNumberRecipient: '',
//     correctAmountToTransfer: '',
//     commentsForRecipients: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const inputValue = type === 'checkbox' ? checked : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: inputValue
//     }));
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('link???', formData); // HELP
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const fetchCSRFData = async () => {
//       try {
//         const response = await axios.get('link???'); // HELP
//         const Token = response.data.csrfToken;
//         setCsrfToken(Token);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCSRFData();
//   }, []);

  //-------------------------------- Code for JSX -----------------------------------------------
  //---------------------------------------------------------------------------------------------

  return (
    <div className='ftdbase'>
      <div className='RFTDbox'>
        <button onClick={() => {}} className='transparentt'>
          <img src='/assets/back.png' className='back' />
        </button>
          <p className='RaiseFTDHeader'> RAISE A FUND DISPUTE </p>

      </div>

      <div className='transactionDetailsHeader'>
        <p className='transactionDetailsText'> TRANSACTION DETAILS </p>
      </div>

      <div className='txnMoney'>
        <p className='currencyText'> SGD </p>
        <p className='amount1'> 8 </p>
        <p className='amount2'> .42 </p>
      </div>

      <div>
        <p className='txnDate'> 1 Jul </p>
      </div>

      <div className='theBoxforTrfDescription'>
        <p className='description'> DESCRIPTION </p>
        <p className='descriptionText'> TOP-UP TO PAYLAH! : BRIGHTON </p>
        <p className='transactionTypeHeader'>TRANSACTION TYPE</p>

        <p className='transactionTypeText'>Funds Transfer</p>
      </div>

      <div className='reasonFTD'>
          <p className='reasonFTDtext'> Reason for Fund Transfer Dispute</p>
      </div>

        <div>
            <div className='checkbox3'><input
                type='checkbox'
                id='unknowntransaction'
                checked={isUnknownTransactionChecked}
                onChange={handleUnknownTransactionCheckboxChange}
                />
                <label htmlFor='unknowntransaction'>Unknown Transaction</label>
            </div>
        </div>

      <div>
        <div className='commentsBox'>
          <div className='commentsLiterally'>
            <input
              type='text'
              value={commentsForRecipients}
              onChange={handleCommentsForRecipientsChange}
              placeholder='Add comments for recipient'
              className='borderless-input'
              />
          </div>

          <div className='remainingCharacters'>
            <p>/{remainingCharacters}</p>
          </div>
          
        </div>
      </div>

      <div className='container6'>
        <label className='submitButton'>
          <button className='transparent-button'> SUBMIT </button>
        </label>
      </div>

      
    
    </div>
  );
}

export default RaiseFTDRecipient;
