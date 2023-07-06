import React, { useState, useEffect } from 'react';
import '../../components/styles/fund transfer dispute/ResolveSuccessStyles.css'
import { useNavigate, useParams } from 'react-router-dom';

import resolvesuccessjson from '../../testdata/resolvesuccess.json'

const ResolveSuccess = (props) => {
    const navigate = useNavigate();
    const {transactionDetails} = props;
    const {userID} = useParams();
 
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
                    <p className='successtxdescriptboxtransparentright'> {transactionDetails["total amount"]}</p>
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

            <button onClick={() => {}} className='TransferNow'>SHARE TRANSFER DETAILS</button>

        </div>
    );
};
export default ResolveSuccess;