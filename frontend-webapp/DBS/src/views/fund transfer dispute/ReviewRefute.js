import React, { useState, useEffect } from 'react';
import '../../components/styles/fund transfer dispute/ReviewRefuteStyles.css';
import { useNavigate } from 'react-router-dom';

import reviewrefutejson from '../../testdata/reviewrefute.json'

const ReviewRefute = () => {
    const navigate = useNavigate();

    const [rereuser, setrereuser] = useState("");
    const [reredisputedate, setreredisputedate] = useState("");
    const [reretotalamt, setreretotalamt] = useState('');
    const [reretxtype, setreretxtype] = useState("");
    const [rerereason, setrerereason] = useState("");
    const [rerecomment, setrerecomment] = useState("");
    const [rererefutereason, setrererefutereason] = useState("");
    
    // Change the constant [0,1] to see between sender & recipient difference
    const rereuseridx = 0;

    useEffect(() => {
        const rereselectedTransaction = reviewrefutejson[rereuseridx];
        setrereuser(rereselectedTransaction.user);
        setreredisputedate(rereselectedTransaction.disputedate);
        setreretotalamt(rereselectedTransaction.transaction['total amount']);
        setreretxtype(rereselectedTransaction.transaction['transaction type']);
        setrerereason(rereselectedTransaction.transaction['reason']);
        setrerecomment(rereselectedTransaction.transaction['comments']);
        setrererefutereason(rereselectedTransaction.transaction['refute reason']);
      }, [rereuseridx]);
    
    return (
        <div className='rerebase'> 
            <div className='reretopbar'>
                <button onClick={() => {}} className='reretransparent'>
                    <img src={require('../../../src/components/assets/back.png')} className='rerebacktx' />
                </button>
                <p className='reretopbartext'> Review Refute</p>
            </div>

            <div className='reremoneyinarow'>
                <p className='reremoneytext'> SGD</p>
                <p className={`reremoneytext2 ${rereuser === 'Sender' ? 'reresender-color' : 'rererecipient-color'}`}>{reretotalamt}</p>
            </div>

            <div className='reredescriptionbox'>
                <p className='rereboxtextheader'> Raised On</p>
                <p className='rereboxtextcontent'> {reredisputedate}</p>
                <p className='rereboxtextheader'> Transaction Type</p>
                <p className='rereboxtextcontent'> {reretxtype}</p>
                <p className='rereboxtextheader'> Reason of Transfer Dispute</p>
                <p className='rereboxtextcontent'> {rerereason}</p>
                <p className='rereboxtextheader'> Comments from Recipient</p>
                <p className='rereboxtextcontent'> {rerecomment}</p>
                <p className='rereboxtextheader'> Reason for refuting dispute</p>
                <p className='rereboxtextcontent'> {rererefutereason}</p>
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