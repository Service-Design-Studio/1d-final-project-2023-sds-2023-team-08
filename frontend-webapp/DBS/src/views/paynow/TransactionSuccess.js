import React, { useState, useEffect } from 'react';
import '../../components/styles/fund transfer dispute/ResolveSuccessStyles.css'
import { useNavigate, useParams } from 'react-router-dom';

const TransactionSucess = (props) => {
    const navigate = useNavigate();
    const {userID} = useParams();
    const {transactionDetails} = props;

    return (
        <div className='RefuteDisputeMain'>
            <button onClick={() => navigate(`/${userID}/home`)} className='successtxtransparent'>X</button>
            <div className='successtxgreenbox'>
                <img src='/assets/greentick.png' className='successtxgreentick' />
            </div>

            <p className='successheadertext'> Successful</p>
            <p className='successtxdate'>on {transactionDetails["date and time"]}</p>

            <div className='successtxdescriptboxblack'>
                <p className='successtxdescriptboxblacktextop'> Amount in</p>
                <div className='successtxdescriptboxtransparent'>
                    <p className='successtxdescriptboxtransparentleft'> SGD</p>
                    <p className='successtxdescriptboxtransparentright'> {transactionDetails["total amount"].toFixed(2)}</p>
                </div>
            </div>

            <div className='successtxdescriptbox'>

                <p className='successtxgreytextheadertitle'> From</p>
                <p className='successtxblacktextheader'> {transactionDetails["transfer from acc name"]}</p>
                <p className='successtxgreytextheader2'> {transactionDetails["transfer from acc number"]}</p>
                <p className='successtxgreytextheader'> To</p>
                <p className='successtxblacktextheader'> {transactionDetails["recipient name"]}</p>
                <p className='successtxgreytextheader2'> {transactionDetails["recipient acc"]}</p>
                <p className='successtxgreytextheader'> Transfer Type</p>
                <p className='successtxblacktextheader'> {transactionDetails["transfer type"]}</p>
                <p className='successtxgreytextheader'> Your Comments</p>
                <p className='successtxblacktextheaderbottom'> {transactionDetails["comments"]}</p>
            </div>

            <div className='successtxwrongbox'>
                <p className='successtxwrongtx'> Made a wrong transfer?</p>
                <a className='successtxclicklink' href=''> Click here</a>
            </div>

            <button onClick={() => {}} className='sharetransferdetailspaynow'>SHARE TRANSFER DETAILS</button>
            <button onClick={() => {}} className='anothertransferpaynow'>MAKE ANOTHER TRANSFER</button>

            
        </div>
    );
};
export default TransactionSucess;