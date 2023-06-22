import React, {useState, useEffect} from 'react';
import '../components/styles/LoginScreenStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Loginscreen = () => {
    const navigate = useNavigate();
    const [empty, SetEmpty] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission
    
        const username = document.getElementById('username').value;
        const pin = document.getElementById('pin').value;
    
        if (!username || !pin) {
          SetEmpty(true)
        } else {
            //send code to backend??
        }
      };
    
    
    return (
        <div className='loginbackground'>
            <img src="/assets/dbslogo.png" className='DBS'/>
            <form className='form_styling' onSubmit={handleSubmit}>
                {empty &&                 
                <p className="alert">* Please fill in the required fields.</p>
                }
                <input type="text" id="username" class="inputdata" placeholder="ENTER USERNAME" />
                <input type="password" id="pin" class="inputdata" placeholder="ENTER PIN" />
                <p className='forgot'> Forgot your  <u>PIN</u>?</p>
                <input type="submit" value="LOGIN" className='login'/>
            </form>
        </div>
    );
  };
  
  export default Loginscreen;