import React from 'react';
import '../../components/styles/fund transfer dispute/ResolveSuccessStyles.css'
import { useNavigate } from 'react-router-dom';

const ResolveSuccess = () => {
    const navigate = useNavigate();
    return (
        <div className='successtxbase'>
            <button onClick={() => navigate()} className='successtxtransparent'>
                <p className='successtxcross'> X</p>
            </button>
            <div className='successtxgreenbox'>
                <img src='/assets/greentick.png' className='successtxgreentick' />
            </div>

            <p className='successheadertext'> Successful</p>
            <p className='successtxdate'>on 26 Jun 2023 12:35pm</p>

            <div className='successtxdescriptbox'>
                <div className='successtxdescriptboxblack'>
                    <p className='successtxdescriptboxblacktextop'> Amount in</p>
                    <div className='successtxdescriptboxtransparent'>
                        <p className='successtxdescriptboxtransparentleft'> SGD</p>
                        <p className='successtxdescriptboxtransparentright'> XX.XX</p>
                    </div>
                </div>
                <p className='successtxgreytextheader'> From</p>
                <p className='successtxblacktextheader'> RECIPIENT ACCOUNT</p>
                <p className='successtxgreytextheader2'> XXX-XXXXX-X</p>
                <p className='successtxgreytextheader'> To</p>
                <p className='successtxblacktextheader'> SENDER ACCOUNT</p>
                <p className='successtxgreytextheader2'> XXX-XXXXX-Y</p>
                <p className='successtxgreytextheader'> Transfer Type</p>
                <p className='successtxblacktextheader'> FAST/IMMEDIATE</p>
                <p className='successtxgreytextheader'> Your Comments</p>
                <p className='successtxblacktextheader'> Resolving Dispute</p>
            </div>

            <button onClick={() => {}} className='successtxtransparentbutton2'>
                <div className='sharetxdetailsbutton2'>
                    <p className='sharetxdetailsbuttontext'> SHARE TRANSFER DETAILS </p>
                </div>
            </button>

        </div>
    );
};
export default ResolveSuccess;