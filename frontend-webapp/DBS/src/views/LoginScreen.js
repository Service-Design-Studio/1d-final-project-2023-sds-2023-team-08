import React, {useState, useEffect} from 'react';
import '../components/styles/LoginScreenStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Loginscreen = () => {
    const navigate = useNavigate();
    
    return (
        <div className='loginbackground'>
            <img src="/assets/dbslogo.png" className='DBS'/>
            <form className='form_styling'>
                <input type="text" id="username" class="inputdata" placeholder="ENTER USERNAME" required/>
                <input type="password" id="pin" class="inputdata" placeholder="ENTER PIN" required/>
                <p className='forgot'> Forgot your  <u>PIN</u>?</p>
                <input type="submit" value="LOGIN" className='login'/>
            </form>
        </div>
    );
  };
  
  export default Loginscreen;