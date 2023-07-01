import { useNavigate, useParams } from 'react-router-dom';
import '../components/styles/EnterRecipientStyles.css';
import paynowdetailsjson from '../testdata/paynowdetails.json';


const EnterRecipient = () => {
    const navigate = useNavigate();
    const { userID, accountNumber } = useParams();
    const paynowtxn = paynowdetailsjson[0];

    return(
        <div className = 'overall1'>
            <div className='padforER1'>
                <div className = 'paynowheadercontainer1'>
                    <button id ='backarrow' className= 'transparent' onClick= {() => {}}>
                        <img src = './assets/back.png' className = 'back'/>
                    </button>
                    <p className='headertitle5'>Enter Recipient's Details</p>
                </div>
                <p className='pntentermobileER'>ENTER MOBILE NO.</p>
            </div>

            <div className = 'inputboxER'>
                <div className='transparent'>
                    <p className='enternameER'>Enter name or mobile no.</p>
                </div>
                <div className='mobilenumberER'>
                    <div className='phonenumberER'>
                        <p className='plussixfiveER'>+65</p>
                    </div>
                    <div className='forwardarrowbackgroundER'>
                        <img src = './assets/expand.png'className='forwardarrowER'></img>
                    </div>
                    <div className='phonenumberER'>
                        <p className='eightdigitER'>{paynowtxn.recipientdetails["recipient mobile"]}</p>
                    </div>
                </div>
            </div>


            <div className='senderboxER'>
                <div className='recipientdeets'>
                    <p className='recipientnickER'>Recipient's Nickname</p>
                    <p className='recipientnameER'>{paynowtxn.recipientdetails["recipient name"]}</p>
                </div>
                <button id='pntsubmitbutton' className='pntsubmitbuttonER' onClick={()=>{}}>
                    <p className='pntsubmitER'>SUBMIT</p>
                </button>
            </div>
        </div>
    );

};

export default EnterRecipient;