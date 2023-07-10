import React, { useState, useRef, useEffect, Component } from 'react';
import '../../components/styles/paynow/SwipeToPayStyles.css';


const SwipeToPay = () => {


    return (
        <div className='SwipeButtonContainer2'>
            <div className='BasedContainer'>
                <div className='SwiperButton'>
                    <img src='/assets/expand.png' className='swipeimage' />
                </div>
                <p className='swipertext'> Swipe To Pay</p>
            </div>
        </div>
    );
};

export default SwipeToPay;
