import React from 'react'
import '../styles/fund transfer dispute/ReviewRefuteStyles.css'

const SubmitButtonRed = ({ onClick }) => {
    return (
        <button onClick={onClick} className='SubmitButtonRed'>
            RAISE DISPUTE
        </button>
    )
}

export default SubmitButtonRed