import { useNavigate, useParams } from 'react-router-dom';
import '../../components/styles/bank account/BankAccRecipientStyles.css';
import '../../components/styles/paynow/EnterRecipientStyles.css';
import { useState, useEffect } from 'react';


const BankAccRecipientScreen = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const [recipientName, setRecipientName] = useState()
    const [recipientAccNum, setRecipientAccnum] = useState()
          
    const handleSubmit = async(event) => {
        event.preventDefault();            
      
    };

    const handleInputChangeName = (e) => {
        setRecipientName(e.target.value)
        console.log(recipientName)
    };
    
    const blockInvalidChar =(e) => {
        const input = e.target.value;
        const regex = /^[a-zA-Z\s]*$/; 
        if (!regex.test(input)) {
          e.preventDefault(); 
        }
    }

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
                    <form className='formcontainer'>
                        <input
                            type="text"
                            className="bankaccdetails"
                            placeholder="Enter recipient's name"
                            />
                    </form>

                    <button className='transparentcontainerfull'>
                        <p className='BankType'>Select Bank</p>
                        <img src='/assets/expand.png' className='expand'/>
                    </button>

                    <p className='protiptext'> Pro tip! You can COPY and PASTE the bank account number :)</p>
                    <form className='formcontainer'>
                        <input
                            type="text"
                            className="bankaccdetails"
                            placeholder="Enter account no."
                            onKeyDown={blockInvalidChar}
                            value={recipientName}
                            onInput={handleInputChangeName}
                            />
                    </form>
            </div>

            <button id='pntsubmitbutton' className='pntsubmitbuttonER' onClick={handleSubmit}>
                <p className='pntsubmitER'>NEXT</p>
            </button>
        </div>
    );

};

export default BankAccRecipientScreen;