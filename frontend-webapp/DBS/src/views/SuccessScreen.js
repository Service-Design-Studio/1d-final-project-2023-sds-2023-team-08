import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, useLocation  } from 'react-router-dom';
import axios from 'axios';
import RefuteSuccess from './fund transfer dispute/RefuteSuccess';
import TransferSuccessScreen from './others/TransferSuccessScreen';

const SuccessScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userID } = useParams();

    const isRefute = location.state['refute']

    return (
      isRefute ? (
        <RefuteSuccess/>
      ) : (
        <TransferSuccessScreen/>
      )
    );
  };
  

export default SuccessScreen;