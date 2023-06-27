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
        </div>

    );
};
export default ReviewTransfer;