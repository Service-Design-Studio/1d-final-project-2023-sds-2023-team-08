import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, useLocation  } from 'react-router-dom';
import axios from 'axios';
import ReviewTransfer from './others/ReviewTransfer';
import ReviewRefute from './fund transfer dispute/ReviewRefute';
import ReviewFTD from './fund transfer dispute/ReviewFTD';

const ReviewScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userID } = useParams();
    
    const isRefute = location.state['refute']
    let isRaiseFTD = false;

    try {
      isRaiseFTD = location.state.transaction['raiseFTD'];
    } catch (error) {
    }
    
    return (
      isRefute ? (
        <ReviewRefute/>
      ) : isRaiseFTD ? (
        <ReviewFTD/>
      ) : (
        <ReviewTransfer/>
      )
    );
  };
  

export default ReviewScreen;