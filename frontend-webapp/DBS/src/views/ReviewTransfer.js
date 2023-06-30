import '../components/styles/ReviewTransferStyles.css';
import jsonData from '../testdata/reviewtransferdata.json';
import { useNavigate } from 'react-router-dom';

const ReviewTransfer = () => {
    const navigate = useNavigate();
    const recipientAccount = jsonData[0]['username'];
    const recipientAccountNo = jsonData[0]['account number'];
    const senderAccount = jsonData[0].transaction.transactiondetails["transaction name"];
    const senderAccountNo = jsonData[0].transaction.transactiondetails["account number"];
    const transferType = jsonData[0].transaction.transactiondetails["transaction type"];
    const yourComments = jsonData[0].transaction.FTDdetails["comments"];
    const handleSubmit = async(event) => {
        event.preventDefault();
    }
    return (
        <div className='ReviewTransferMain'>
            <div className='ReviewTransferHeader'>
                <button onClick={() => navigate('/')} className='transparent'>
                    <img src={require('../../src/components/assets/back.png')} className='back' />
                </button>
                <p className='ReviewTransferHeaderText'>Review Transfer</p>
            </div>
            <div className='ReviewTransferLine'></div>
            <div className='ReviewTransferBody'>
                <div className='ReviewTransferBox'>
                    <div class="ReviewTransferBoxBlue">
                        <div className='ReviewTransferBoxBlueText'>
                            <p className='amountin'>Amount in</p>
                            <div className='ReviewTransferBoxBlueSubText'>
                                <p className='ReviewTransferBoxBlueSubTextLeft'>SGD</p>
                                <p className='ReviewTransferBoxBlueSubTextRight'>XX.XX</p>
                            </div>
                        </div>
                    </div>
                    <div class="ReviewTransferBoxWhite">

                        <div className='Chunk'>
                            <p className='from'>From</p>
                            <p className='RecipientAccount'>{recipientAccount}</p>
                            <p className='RecipientAccountNo'>{recipientAccountNo}</p>
                        </div>
                        
                        <div className='Chunk'>
                            <p className='to'>To</p>
                            <p className='SenderAccount'>{senderAccount}</p>
                            <p className='SenderAccountNo'>{senderAccountNo}</p>
                        </div>

                        <div className='Chunk'>
                            <p className='transfertype'>Transfer Type</p>
                            <p className='TransferType'>{transferType}</p>
                        </div>

                        <div className='Chunk'>
                            <p className='yourcomments'>Your Comments</p>
                            <p className='YourComments'>{yourComments}</p>
                        </div>

                    </div>
                    <form className='ReviewTransferForm' onSubmit={handleSubmit}>
                        <button className='TransferNow'>TRANSFER NOW</button>
                    </form>
                </div>
            </div>
        </div>

    );
};
export default ReviewTransfer;