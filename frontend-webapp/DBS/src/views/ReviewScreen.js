import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, useLocation  } from 'react-router-dom';
import axios from 'axios';
import ReviewTransfer from './others/ReviewTransfer';
import ReviewRefute from './fund transfer dispute/ReviewRefute';

const ReviewScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userID } = useParams();

    const isRefute = location.state['refute']

    return (
      isRefute ? (
        <ReviewRefute/>
      ) : (
        <ReviewTransfer/>
      )
    );
  };
  

export default ReviewScreen;