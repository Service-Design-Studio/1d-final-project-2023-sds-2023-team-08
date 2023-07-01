import React from 'react';
import '../../components/styles/fund transfer dispute/ResolveSuccessStyles.css'
import { useNavigate } from 'react-router-dom';

const TransactionSucess = () => {
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
                <p className='successtxblacktextheader'> PayNow Transfer</p>
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
export default TransactionSucess;