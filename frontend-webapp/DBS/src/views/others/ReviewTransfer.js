import '../../components/styles/others/ReviewTransferStyles.css';
import jsonData from '../../testdata/reviewtransferdata.json';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ReviewTransfer = () => {
    const navigate = useNavigate();
    const {userID} = useParams();
    const location = useLocation();
    const transactionData = location.state;
    const isDispute = transactionData['dispute']


    const handleSubmit = async(event) => {
        event.preventDefault();
    }
    
    return (
        <div className='overall1'>
            <div className='header2transaction'>
                <button id = 'backarrow' onClick={() => navigate(`/${userID}/refunddispute/${transactionData['transaction id']}`)} className='transparent'>
                    <img src='/assets/back.png' className='back' />
                </button>
                <p className='headertext'>Review Transfer</p>
            </div>

            <div className='ReviewTransferBody'>
                <div className='ReviewTransferBox'>
                    <div className='ReviewTransferBoxBlueText'>
                        <p className='amountin'>Amount in</p>
                        <div className='ReviewTransferBoxBlueSubText'>
                            <p className='ReviewTransferBoxBlueSubTextLeft'>SGD</p>
                            <p className='ReviewTransferBoxBlueSubTextRight'>{transactionData['total amount']}</p>
                        </div>
                    </div>
                    <div className="ReviewTransferBoxWhite">

                        <div className='Chunk1'>
                            <p className='reviewtext'>From</p>
                            <p className='accounttextname'>{transactionData['transfer from acc name']}</p>
                            <p className='reviewtext'>{transactionData['transfer from acc number']}</p>
                        </div>
                        
                        <div className='Chunk'>
                            <p className='reviewtext'>To</p>
                            <p className='accounttextname'>{transactionData['recipient name']}</p>
                            <p className='reviewtext'>{transactionData['recipient acc']}</p>
                        </div>

                        <div className='Chunk'>
                            <p className='reviewtext'>Transfer Type</p>
                            <p className='accounttextname'>FAST/IMMEDIATE</p>
                        </div>

                        <div className='Chunk2'>
                            <p className='reviewtext'>Your Comments</p>
                            <p className='accounttextname'>{transactionData['comments']}</p>
                        </div>

                    </div>
                </div>
            </div>

            <button className= { isDispute ? 'TransferNow' : 'TransferPayNow'} onClick={() => navigate()}>{ isDispute ? 'TRANSFER NOW' : 'NEXT'}</button>

        </div>

    );
};
export default ReviewTransfer;