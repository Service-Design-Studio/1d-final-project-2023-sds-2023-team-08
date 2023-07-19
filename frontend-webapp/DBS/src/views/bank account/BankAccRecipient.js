import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../../components/styles/bank account/BankAccRecipientStyles.css';
import '../../components/styles/paynow/EnterRecipientStyles.css';
import { useState, useEffect } from 'react';


const BankAccRecipientScreen = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const [recipientName, setRecipientName] = useState('');
    const [recipientAccNum, setRecipientAccnum] = useState('');
    const [clipboardText, setClipboardText] = useState('');
    const [showBottomSection, setShowBottomSection] = useState(false);
    const [warningMessage, setWarningMessage] = useState('')
    const location = useLocation()
    const bankType = location.state
    
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
        } else if (bankType == undefined) {
            setWarningMessage('* Please chose a Bank')
        } else if (recipientAccNum.length == 0) {
            setWarningMessage('* Please fill in your Recipient Bank Account Number')
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
        if (clipboardText.length >= 7 && clipboardText.length <=11 && /^[0-9-]+$/.test(clipboardText) && recipientAccNum.length == 0) {
            setShowBottomSection(true)
        }
    };

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
                    <form className='formcontainer'>
                        <input
                            type="text"
                            className="bankaccdetails"
                            placeholder="Enter recipient's name"
                            value={recipientName}
                            onInput={handleInputChangeName}
                            />
                    </form>

                    <button className='transparentcontainerfull'>
                        <p className='BankType'>{bankType == undefined ? "Select Bank" : bankType}</p>
                        <img src='/assets/expand.png' className='expand'/>
                    </button>

                    <p className='protiptext'> Pro tip! You can COPY and PASTE the bank account number :)</p>
                    <form className='formcontainer'>
                        <input
                            type="text"
                            className="bankaccdetails"
                            placeholder="Enter account no."
                            value={recipientAccNum}
                            onInput={handleInputChangeAccNum}
                            onFocus={readClipBoard}
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