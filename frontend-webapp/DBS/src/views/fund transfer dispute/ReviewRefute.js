import React from 'react';
import '../../components/styles/fund transfer dispute/ReviewRefuteStyles.css';
import { useNavigate } from 'react-router-dom';

const ReviewRefute = () => {
    const navigate = useNavigate();

    return (
        <div className='rerebase'> 
            <div className='reretopbar'>
                <button onClick={() => {}} className='reretransparent'>
                    <img src='/assets/back.png' className='rerebacktx' />
                </button>
                <p className='reretopbartext'> Review Refute</p>
            </div>

            <div className='reremoneyinarow'>
                <p className='reremoneytext'> SGD</p>
                <p className='reremoneytext2'> 20.50</p>
            </div>

            <div className='reredescriptionbox'>
                <p className='rereboxtextheader'> Raised On</p>
                <p className='rereboxtextcontent'> DATE OF DISPUTE</p>
                <p className='rereboxtextheader'> Transaction Type</p>
                <p className='rereboxtextcontent'> Funds Transfer</p>
                <p className='rereboxtextheader'> Reason of Transfer Dispute</p>
                <p className='rereboxtextcontent'> Transfer to Wrong Account</p>
                <p className='rereboxtextheader'> Comments from Recipient</p>
                <p className='rereboxtextcontent'> Was suppose to transfer to xxx instead</p>
                <p className='rereboxtextheader'> Reason for refuting dispute</p>
                <p className='rereboxtextcontent'> XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            </div>

            <p className='rerewarntext'> Note: It is an offence under the Penal Code for the 
            recipient to retain or use the funds after being informed that it was sent by mistake. 
            The sender may consider lodging a police report. <br></br> <br></br> 
            Your reason can be seen by the sender.
            </p>

            <button onClick={() => {}} className='reretransparentbutton'>
                <div className='rerefutebutton'>
                    <p className='rerefutebuttontext'> REFUTE DISPUTE </p>
                </div>
            </button>
        </div>
    );

};

export default ReviewRefute;