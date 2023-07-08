import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, useLocation  } from 'react-router-dom';
import axios from 'axios';
import RefuteSuccess from './fund transfer dispute/RefuteSuccess';
import TransferSuccessScreen from './others/TransferSuccessScreen';
import RaiseFTDSuccess from './fund transfer dispute/RaiseFTDSuccess';

const SuccessScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userID } = useParams();

    const isRefute = location.state['refute']
    const isRaiseFTD = location.state['raiseFTD']

    return (
      isRefute ? (
        <RefuteSuccess/>
      ) : isRaiseFTD ? (
        <RaiseFTDSuccess/>
      ) : (
        <TransferSuccessScreen/>
      )
    );
  };
  

export default SuccessScreen;