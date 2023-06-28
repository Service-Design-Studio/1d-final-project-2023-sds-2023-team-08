import '../components/styles/ReviewTransferStyles.css'
import { useNavigate } from 'react-router-dom';

const ReviewTransfer = () => {
    const navigate = useNavigate();
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
                            <p className='RecipientAccount'>RECIPIENT ACCOUNT</p>
                            <p className='RecipientAccountNo'>XXX-XXXXX-X</p>
                        </div>
                        
                        <div className='Chunk'>
                            <p className='to'>To</p>
                            <p className='SenderAccount'>SENDER ACCOUNT</p>
                            <p className='SenderAccountNo'>XXX-XXXXX-Y</p>
                        </div>

                        <div className='Chunk'>
                            <p className='transfertype'>Transfer Type</p>
                            <p className='TransferType'>FAST/IMMEDIATE</p>
                        </div>

                        <div className='Chunk'>
                            <p className='yourcomments'>Your Comments</p>
                            <p className='YourComments'>Resolving Dispute</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};
export default ReviewTransfer;