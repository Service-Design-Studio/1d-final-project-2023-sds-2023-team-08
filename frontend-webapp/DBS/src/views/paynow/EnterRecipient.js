import { useNavigate, useParams } from 'react-router-dom';
import '../../components/styles/paynow/EnterRecipientStyles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const EnterRecipient = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const [csrfToken, setCsrfToken] = useState('');
    const [ recipientNickname, setrecipientNickname ] = useState('');
    const [ recipientPhoneNumber, setrecipientPhoneNumber] = useState('');
    const [ invalidmessage, setinvalidmessage] = useState('')
    const [recipientAccnum, setrecipientAccnum] = useState('');
    const [senderAccnum, setsenderAccnum] = useState('')
    const [senderAccname, setsenderAccname] = useState('')

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

    const getNickname = async () => {
        if (recipientPhoneNumber.length >= 8) {
            try {
                const data = { "phonenumber": recipientPhoneNumber }
                console.log(data)
                const response = await axios.get(
                    `https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/paynows/search_by_phone/+65${recipientPhoneNumber}`,
                    { data },
                    {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': csrfToken,
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                    }
                );
                if (response.data.nickname.length > 0) {
                    setrecipientNickname(response.data.nickname);
                    setrecipientAccnum(response.data.accnum);
                    setsenderAccname(response.data.usraccname);
                    setsenderAccnum(response.data.usraccnum)
                } else {
                }

            } catch (error) {
                console.log('Error:', error.toJSON());
                setrecipientNickname("Vinny Koh");
            }
        } 
        else {
            setinvalidmessage("* Please Enter A Valid Phone Number")
        }
    };
          
      
    const handleSubmit = async(event) => {
        event.preventDefault();            
        getNickname();
        if (recipientPhoneNumber.length === 0) {
            setinvalidmessage("* Please Enter A Phone Number")
        }
        else if (recipientNickname === '') {
            setinvalidmessage("* Please Enter A Valid PayNow Phone Number")
        }
        else {
            navigate(`/${userID}/paynow`, {state: {"phonenumber": recipientPhoneNumber, "nickname":recipientNickname, "accnum":recipientAccnum, "usraccnum":senderAccnum, "usraccname":senderAccname }})
        }
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, '').slice(0, 8);
        setrecipientPhoneNumber(inputValue)
        //console.log(recipientPhoneNumber)
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

            <p className='pntentermobileER'>ENTER MOBILE NO.</p>

            <div className = 'inputboxER'>
                <p className='enternameER'>Enter name or mobile no.</p>
                <div className='mobilenumberER'>
                    <div className='phonenumberER'>
                        <p className='plussixfiveER'>+65</p>
                    </div>
                    <div className='forwardarrowbackgroundER'>
                        <img src = '/assets/expand.png'className='forwardarrowER'></img>
                    </div>
                    <form className='formcontainer'>
                        <input
                            type="number"
                            className="eightdigitER"
                            placeholder="Recipient's Mobile No."
                            onKeyDown={blockInvalidChar}
                            value={recipientPhoneNumber}
                            onInput={handleInputChange}
                            onBlur={getNickname}
                            />
                    </form>
                </div>
            </div>

            {invalidmessage.length > 0 ? (<p className='WarningMessagePaynow'>{invalidmessage}</p>
            ) : (<div></div>)}

            <div className='senderboxER'>
                <div className='recipientdeets'>
                    <p className='recipientnickER'>Recipient's Nickname</p>
                    <p className='recipientnameER'>{recipientNickname}</p>
                </div>
                <button id='pntsubmitbutton' className='pntsubmitbuttonER' onClick={handleSubmit}>
                    <p className='pntsubmitER'>SUBMIT</p>
                </button>
            </div>
        </div>
    );

};

export default EnterRecipient;