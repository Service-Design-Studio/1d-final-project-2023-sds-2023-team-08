import React, { useState, useEffect } from 'react';
import '../components/styles/FTDForm_Bton.css';

function MyComponent() {
  //-------------------------------- Code for State Variables -----------------------------------
  //---------------------------------------------------------------------------------------------

  const [isTransferWrongAccountChecked, setIsTransferWrongAccountChecked] = useState(false);
  const [isTransferWrongAmountChecked, setIsTransferWrongAmountChecked] = useState(false);
  const [modeOfPayment, setModeOfPayment] = useState('');
  const [correctNumberRecipient, setCorrectNumberRecipient] = useState('');
  const [correctAmountToTransfer, setCorrectAmountToTransfer] = useState('');
  const [commentsForRecipients, setCommentsForRecipients] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  //-------------------------------- Code for Event Handlers -----------------------------------
  //--------------------------------------------------------------------------------------------

  const handleTransferWrongAccountCheckboxChange = () => {
    setIsTransferWrongAccountChecked(!isTransferWrongAccountChecked);
    setIsTransferWrongAmountChecked(false);
  };

  const handleTransferWrongAmountCheckboxChange = () => {
    setIsTransferWrongAmountChecked(!isTransferWrongAmountChecked);
    setIsTransferWrongAccountChecked(false);
  };

  const handleModeOfPaymentChange = (e) => {
    setModeOfPayment(e.target.value);
  };

  const handleCorrectNumberRecipientChange = (e) => {
    setCorrectNumberRecipient(e.target.value);
  };

  const handleCorrectAmountToTransferChange = (e) => {
    setCorrectAmountToTransfer(e.target.value);
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

  // const [formData, setFormData] = useState({
  //   isTransferWrongAccountChecked: false,
  //   isTransferWrongAmountChecked: false,
  //   modeOfPayment: '',
  //   correctNumberRecipient: '',
  //   correctAmountToTransfer: '',
  //   commentsForRecipients: ''
  // });

  // const handleInputChange = (event) => {
  //   const { name, value, type, checked } = event.target;
  //   const inputValue = type === 'checkbox' ? checked : value;

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: inputValue
  //   }));
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post('link???', formData); // HELP
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchCSRFData = async () => {
  //     try {
  //       const response = await axios.get('link???'); // HELP
  //       const Token = response.data.csrfToken;
  //       setCsrfToken(Token);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchCSRFData();
  // }, []);

  //-------------------------------- Code for JSX -----------------------------------------------
  //---------------------------------------------------------------------------------------------

  return (
    <div className='ftdbase'>
      <div className='RFTDbox'>
        <button onClick={() => {}} className='transparentt'>
          <img src={require('../../src/components/assets/back.png')} className='back' />
        </button>
          <p className='RaiseFTDHeader'> RAISE A FUND DISPUTE </p>

      </div>

      <div className='transactionDetailsHeader'>
        <p className='transactionDetailsText'> TRANSACTION DETAILS </p>
      </div>

      <div className='txnMoney'>
        <p className='currencyText'> SGD </p>
        <p className='amount1'> 150 </p>
        <p className='amount2'> .00 </p>
      </div>

      <div>
        <p className='txnDate'> 1 Jul </p>
      </div>

      <div className='theBoxforTrfDescription'>
        <p className='description'> DESCRIPTION </p>
        <p className='descriptionText'> PAYNOW TRANSFER: VALENCIA </p>
        <p className='transactionTypeHeader'>TRANSACTION TYPE</p>

        <p className='transactionTypeText'>Funds Transfer</p>
      </div>

      <div className='reasonFTD'>
          <p className='reasonFTDtext'> Reason for Fund Transfer Dispute</p>
      </div>

      <div>
        <div className='expandable-container'>
          <div className='checkbox1'>
              <input
              type='checkbox'
              id='transferWrongAccountCheckbox'
              checked={isTransferWrongAccountChecked}
              onChange={handleTransferWrongAccountCheckboxChange}
              />
            <label htmlFor='transferWrongAccountCheckbox'>Transfer to wrong account</label>
          </div>
          
          {isTransferWrongAccountChecked && (
            <>
            <div className='expandable-content-mode-of-payment'>
              <input
                type='text'
                id='modeOfPaymentInput'
                value={modeOfPayment}
                onChange={handleModeOfPaymentChange}
                placeholder='Mode of Payment'
                className='borderless-input' />
            </div>
          
            <div className='expandable-content-correct-no-of-recipient'>
                <input
                  type='text'
                  id='correctNumberRecipientInput'
                  value={correctNumberRecipient}
                  onChange={handleCorrectNumberRecipientChange}
                  placeholder='Correct Number of Recipients'
                  className='borderless-input'
                  />
              </div>
            </>
          )}
        </div>
      </div>

      <div>
        <div className='expandable-container'>
          <div className='checkbox2'>
            <input
            type='checkbox'
            id='transferWrongAmountCheckbox'
            checked={isTransferWrongAmountChecked}
            onChange={handleTransferWrongAmountCheckboxChange}
          />
          <label htmlFor='transferWrongAmountCheckbox'>Transfer wrong amount</label>
          </div>
          
          {isTransferWrongAmountChecked && (
            <div className='expandable-content-correct-amt-to-transfer'>
              <input
                type='text'
                id='correctAmountToTransferInput'
                value={correctAmountToTransfer}
                onChange={handleCorrectAmountToTransferChange}
                placeholder='Correct Amount to Transfer'
                className='borderless-input'
              />
            </div>
          )}
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

export default MyComponent;
