import React, { useState, useEffect } from 'react';
import '../components/styles/SuccessfulTransferStyles.css'
import { useNavigate } from 'react-router-dom';

import successtransfer2 from '../testdata/successtransfer2.json'

const SuccessfulTransfer2 = () => {
    const navigate = useNavigate();
    
    const [stx2user, setstx2user] = useState("");
    const [stx2success, setstx2success] = useState("");
    const [stx2date, setstx2date] = useState("");
    const [stx2time, setstx2time] = useState("");
    const [stx2totalamt, setstx2totalamt] = useState('');
    const [stx2reANa, setstx2reANa] = useState("");  // reANa = Recipient Account Name
    const [stx2reANo, setstx2reANo] = useState("");  // reANo = Recipient Account Number
    const [stx2seANa, setstx2seANa] = useState("");  // seANa = Sender Account Name
    const [stx2seANo, setstx2seANo] = useState("");  // seANo = Sender Account Number
    const [stx2txtype, setstx2txtype] = useState("");
    const [stx2comment, setstx2comment] = useState("");
        
        // Change the constant [0,1] to see between successful & failure difference
        const stx2useridx = 0;
    
        useEffect(() => {
            const stx2selectedTransaction = successtransfer2[stx2useridx];
            setstx2user(stx2selectedTransaction.user);
            setstx2date(stx2selectedTransaction.transaction['date']);
            setstx2time(stx2selectedTransaction.transaction['time']);
            setstx2totalamt(stx2selectedTransaction.transaction['total amount']);
            setstx2reANa(stx2selectedTransaction.transaction['Recipient Account Name']);
            setstx2reANo(stx2selectedTransaction.transaction['Recipient Account Number']);
            setstx2seANa(stx2selectedTransaction.transaction['Sender Account Name']);
            setstx2seANo(stx2selectedTransaction.transaction['Sender Account Number']);
            setstx2txtype(stx2selectedTransaction.transaction['transaction type']);
            setstx2comment(stx2selectedTransaction.transaction['comments']);
            setstx2success(stx2selectedTransaction.success);
    
            if (stx2selectedTransaction.success !== "Successful") {
                navigate('/'); // If not successful, navigate to the home page
              }
            }, [stx2useridx, navigate]);

    return (
        <div className='successtxbase'>
            <button onClick={() => navigate()} className='successtxtransparent'>
                <p className='successtxcross'> X</p>
            </button>
            <div className='successtxgreenbox'>
                <img src={require('../../src/components/assets/icons/greentick.png')} className='successtxgreentick' />
            </div>

            <p className='successheadertext'> Successful</p>
            <p className='successtxdate'>on {stx2date} {stx2time}</p>

            <div className='successtxdescriptbox'>
                <div className='successtxdescriptboxblack'>
                    <p className='successtxdescriptboxblacktextop'> Amount in</p>
                    <div className='successtxdescriptboxtransparent'>
                        <p className='successtxdescriptboxtransparentleft'> SGD</p>
                        <p className='successtxdescriptboxtransparentright'> {stx2totalamt}</p>
                    </div>
                </div>
                <p className='successtxgreytextheader'> From</p>
                <p className='successtxblacktextheader'> {stx2reANa}</p>
                <p className='successtxgreytextheader2'> {stx2reANo}</p>
                <p className='successtxgreytextheader'> To</p>
                <p className='successtxblacktextheader'> {stx2seANa}</p>
                <p className='successtxgreytextheader2'> {stx2seANo}</p>
                <p className='successtxgreytextheader'> Transfer Type</p>
                <p className='successtxblacktextheader'> {stx2txtype}</p>
                <p className='successtxgreytextheader'> Your Comments</p>
                <p className='successtxblacktextheader'> {stx2comment}</p>
            </div>

            <button onClick={() => {}} className='successtxtransparentbutton2'>
                <div className='sharetxdetailsbutton2'>
                    <p className='sharetxdetailsbuttontext'> SHARE TRANSFER DETAILS </p>
                </div>
            </button>

        </div>
    );
};
export default SuccessfulTransfer2;