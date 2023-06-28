import { useNavigate } from 'react-router-dom';
import '../components/styles/EnterRecipientStyles.css';

const EnterRecipient = () => {
    const navigate = useNavigate();
    return(
        <div classname = "overall">
            <div className='pad'>
                <div className = 'paynowheadercontainer'>
                    <button id ='backarrow' className= 'transparent' onClick= {() => {}}>
                        <img src = './assets/back.png' className = 'backarrow'></img>
                    </button>
                    <p className='headertitle'>PayNow to Mobile</p>
                </div>
                <p className='pntentermobile'>ENTER MOBILE NO.</p>
            </div>

            <div className = 'inputbox'>
                <div className='prompt'>
                    <p className='entername'>Enter name or mobile no.</p>
                </div>
                <div className='mobilenumber'>
                    <div className='phonenumber'>
                        <p className='plussixfive'>+65</p>
                    </div>
                    <div className='forwardarrowbackground'>
                        <img src = './assets/expand.png'className='forwardarrow'></img>
                    </div>
                    <div className='phonenumber'>
                        <p className='eightdigit'>XXXXXXXX</p>
                    </div>
                </div>
            </div>


            <div className='senderbox'>
                <div className='recipientdeets'>
                    <p className='recipientnick'>Recipient's Nickname</p>
                    <p className='recipientname'>VINNY KOH</p>
                </div>
                <div className='pntsubmitbutton'>
                    <button id='pntsubmitbutton' className='transparent' onClick={()=>{}}>
                        <p className='pntsubmit'>SUBMIT</p>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default EnterRecipient;