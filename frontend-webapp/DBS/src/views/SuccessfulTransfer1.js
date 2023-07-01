import React, { useState, useEffect } from 'react';
import '../components/styles/SuccessfulTransferStyles.css'
import { useNavigate } from 'react-router-dom';

import successtransfer1 from '../testdata/successtransfer1.json'

const SuccessfulTransfer1 = () => {
    const navigate = useNavigate();

    const [stx1user, setstx1user] = useState("");
    const [stx1success, setstx1success] = useState("");
    const [stx1date, setstx1date] = useState("");
    const [stx1time, setstx1time] = useState("");
    const [stx1totalamt, setstx1totalamt] = useState('');
    const [stx1reANa, setstx1reANa] = useState("");  // reANa = Recipient Account Name
    const [stx1reANo, setstx1reANo] = useState("");  // reANo = Recipient Account Number
    const [stx1seANa, setstx1seANa] = useState("");  // seANa = Sender Account Name
    const [stx1seANo, setstx1seANo] = useState("");  // seANo = Sender Account Number
    const [stx1txtype, setstx1txtype] = useState("");
    const [stx1comment, setstx1comment] = useState("");
    
    // Change the constant [0,1] to see between successful & failure difference
    const stx1useridx = 0;

    useEffect(() => {
        const stx1selectedTransaction = successtransfer1[stx1useridx];
        setstx1user(stx1selectedTransaction.user);
        setstx1date(stx1selectedTransaction.transaction['date']);
        setstx1time(stx1selectedTransaction.transaction['time']);
        setstx1totalamt(stx1selectedTransaction.transaction['total amount']);
        setstx1reANa(stx1selectedTransaction.transaction['Recipient Account Name']);
        setstx1reANo(stx1selectedTransaction.transaction['Recipient Account Number']);
        setstx1seANa(stx1selectedTransaction.transaction['Sender Account Name']);
        setstx1seANo(stx1selectedTransaction.transaction['Sender Account Number']);
        setstx1txtype(stx1selectedTransaction.transaction['transaction type']);
        setstx1comment(stx1selectedTransaction.transaction['comments']);
        setstx1success(stx1selectedTransaction.success);

        if (stx1selectedTransaction.success !== "Successful") {
            navigate('/'); // If not successful, navigate to the home page
          }
        }, [stx1useridx, navigate]);


    return (
        <div className='successtxbase'>
            <button onClick={() => navigate()} className='successtxtransparent'>
                <p className='successtxcross'> X</p>
            </button>
            <div className='successtxgreenbox'>
                <img src={require('../../src/components/assets/icons/greentick.png')} className='successtxgreentick' />
            </div>

            <p className='successheadertext'> Successful</p>
            <p className='successtxdate'>on {stx1date} {stx1time}</p>

            <div className='successtxdescriptbox'>
                <div className='successtxdescriptboxblack'>
                    <p className='successtxdescriptboxblacktextop'> Amount in</p>
                    <div className='successtxdescriptboxtransparent'>
                        <p className='successtxdescriptboxtransparentleft'> SGD</p>
                        <p className='successtxdescriptboxtransparentright'> {stx1totalamt}</p>
                    </div>
                </div>
                <p className='successtxgreytextheader'> From</p>
                <p className='successtxblacktextheader'> {stx1reANa}</p>
                <p className='successtxgreytextheader2'> {stx1reANo}</p>
                <p className='successtxgreytextheader'> To</p>
                <p className='successtxblacktextheader'> {stx1seANa}</p>
                <p className='successtxgreytextheader2'> {stx1seANo}</p>
                <p className='successtxgreytextheader'> Transfer Type</p>
                <p className='successtxblacktextheader'> {stx1txtype}</p>
                <p className='successtxgreytextheader'> Your Comments</p>
                <p className='successtxblacktextheader'> {stx1comment}</p>
            </div>

            <div className='successtxwrongbox'>
                <p className='successtxwrongtx'> Made a wrong transfer?</p>
                <a className='successtxclicklink' href=''> Click here</a>
            </div>

            <button onClick={() => {}} className='successtxtransparentbutton'>
                <div className='sharetxdetailsbutton'>
                    <p className='sharetxdetailsbuttontext'> SHARE TRANSFER DETAILS </p>
                </div>
            </button>

            <button onClick={() => {}} className='successtxtransparentbuttonB'>
                <div className='makertxbutton'>
                    <p className='makertxbuttontext'> MAKE ANOTHER TRANSFER </p>
                </div>
            </button>
            
        </div>
    );
};
export default SuccessfulTransfer1;