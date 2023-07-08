import React, { useState, useEffect } from 'react';
import '../../components/styles/others/WithdrawDisputePopUpStyles.css';
import { useNavigate } from 'react-router-dom';

const WithdrawDisputePopUp = () => {
    const navigate = useNavigate();
    const [wdpopshowPopup, setwdpopShowPopup] = useState(false);

    const wdpopopenPopup = () => {
        setwdpopShowPopup(true);
    };
    
    const wdpopclosePopup = () => {
        setwdpopShowPopup(false);
    };

    return(
        <div className='wdpopbase'>
            <button onClick={wdpopopenPopup} className='tempbutontransparent'>
                <div className='tempbuton'>
                    <p className='tempbutontext'> WITHDRAW DISPUTE</p>
                </div>
            </button>

        {wdpopshowPopup && (
            <div className='wdpopgreyout'>
                <div className='wdpopup'>
                    <p className='wdpopicon'> !</p>
                    <p className='wdpopheader'> Withdraw Dispute</p>
                    <p className='wdpoptext'>
                    Are you sure you want to withdraw this fund transfer dispute? 
                    <span className='wdpopwarn'> This action cannot be undone </span> 
                    and you will not be able to raise a fund transfer dispute for this particular transaction again.
                    </p>

                    {/* Change navigate to whatever is required */}
                    <button onClick={() => navigate(`/plan`)} className='wdpopbuttonblue'>
                        <p className='wdpopbuttontextblue'>OK, PROCEED AND WITHDRAW</p>
                    </button>
                    <button onClick={wdpopclosePopup} className='wdpopbuttonred'>
                        <p className='wdpopbuttontextred'> CANCEL</p>
                    </button>
                </div>
            </div>
            )}
        </div>
    );
};
export default WithdrawDisputePopUp;