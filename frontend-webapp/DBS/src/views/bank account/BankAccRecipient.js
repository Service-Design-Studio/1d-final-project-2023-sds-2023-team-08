import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../../components/styles/bank account/BankAccRecipientStyles.css';
import '../../components/styles/paynow/EnterRecipientStyles.css';
import { useState, useEffect } from 'react';


const BankAccRecipientScreen = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const [recipientName, setRecipientName] = useState('');
    const [recipientAccNum, setRecipientAccnum] = useState('');
    const [bankType, setbankType] = useState('');
    const [clipboardText, setClipboardText] = useState('');
    const [showBottomSection, setShowBottomSection] = useState(false);
    const [warningMessage, setWarningMessage] = useState('')
    const location = useLocation()

    useEffect(() => {
        const setData = () => {
            const locationdata = location.state
            setRecipientName(locationdata.name || '')
            setRecipientAccnum(locationdata.acc || '')
            setbankType(locationdata.bank || '')
        };
        setData();
      }, []); 


    useEffect(() => {
        const handleReadClipboard = async () => {
          try {
            const text = await navigator.clipboard.readText();
            setClipboardText(text);
            console.log(clipboardText)
          } catch (error) {
            console.error('Failed to read clipboard:', error);
          }
        };

        handleReadClipboard();
      }, [recipientName, recipientAccNum]); 
    
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        if (recipientName.length == 0) {
            setWarningMessage('* Please fill in your Recipient Name')
        } else if (bankType == '') {
            setWarningMessage('* Please chose a Bank')
        } else if (recipientAccNum.length == 0) {
            setWarningMessage('* Please fill in your Recipient Bank Account Number')
        } else {
            navigate(`/${userID}/accounttransfer`, {state:{name:recipientName, acc:recipientAccNum, bank:bankType}})
        }
    };

    const handleInputChangeName = (e) => {
        const inputValue = e.target.value;
        const cleanedValue = inputValue.replace(/[^a-zA-Z\s]/g, '');
        setRecipientName(cleanedValue);
      };
      

    const handleInputChangeAccNum = (e) => {
        setShowBottomSection(false)
        setRecipientAccnum(e.target.value)
    };

    const setAutofill = () => {
        const cleaned_clipboardText = clipboardText.replace(/-/g, '') 
        setRecipientAccnum(cleaned_clipboardText)
        setShowBottomSection(false)
    };
    
    const readClipBoard = async () =>{
        if (clipboardText.length >= 7 && clipboardText.length <=13 && /^[0-9-]+$/.test(clipboardText) && recipientAccNum.length == 0) {
            setShowBottomSection(true)
        }
    };

    const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

    return(
        <div className = 'overall'>
            <div className = 'RefuteDisputeHeader'>
                <button id ='backarrow' className= 'transparent' onClick= {() => navigate(`/${userID}/home`)}>
                    <img src = '/assets/back.png' className = 'back'/>
                </button>
                <p className='RefuteDisputeHeaderText'>Enter Recipient's Details</p>
            </div>

            <p className='pntentermobileER'>ENTER ACCOUNT DETAILS</p>

            <div className = 'bankacccontainer'>
                { warningMessage.length > 0 && (
                    <p  className='warningbankmessage'>{warningMessage}</p>
                )}
                    <form className='formcontainer2'>
                        <input
                            type="text"
                            className="bankaccdetails"
                            placeholder="Enter recipient's name"
                            value={recipientName}
                            onInput={handleInputChangeName}
                            />
                    </form>

                    <button className='transparentcontainerfull' onClick={() => navigate(`/${userID}/accounttransferrecipient/selectbank`, {state:{name:recipientName, acc:recipientAccNum, bank:bankType}})}>
                        <p className='BankType' style={{color: bankType.length <= 0 ? '#696969' : '#444444'}}>{bankType.length <= 0 ? "Select Bank" : bankType}</p>
                        <img src='/assets/expand.png' className='expandbank'/>
                    </button>

                    <p className='protiptext'> Pro tip! You can COPY and PASTE the bank account number :)</p>
                    <form className='formcontainer2'>
                        <input
                            type="number"
                            className="bankaccdetails"
                            placeholder="Enter account no."
                            value={recipientAccNum}
                            onInput={handleInputChangeAccNum}
                            onFocus={readClipBoard}
                            onKeyDown={blockInvalidChar}
                            />
                    </form>

                    { showBottomSection && 
                        <button className='autofillcontainer' onClick={setAutofill}>
                            <p className='bankaccnumbers'>{clipboardText}</p>
                        </button>
                    }
            </div>
            
            <button id='pntsubmitbutton' className='pntsubmitbuttonER' onClick={handleSubmit}>
                <p className='pntsubmitER'>NEXT</p>
            </button>
        </div>
    );

};

export default BankAccRecipientScreen;