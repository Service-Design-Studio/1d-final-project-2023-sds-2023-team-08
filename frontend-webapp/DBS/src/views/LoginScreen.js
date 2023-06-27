import React, {useState, useEffect} from 'react';
import '../components/styles/LoginScreenStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Loginscreen = () => {
    const navigate = useNavigate();
    const [empty, SetEmpty] = useState(false);
    const [flashmessage, SetFlashMessage] = useState('');

    const handleSubmit = async (event) => {

        event.preventDefault(); // Prevent form submission
    
        const username = document.getElementById('username').value;
        const pin = document.getElementById('pin').value;
    
        if (!username || !pin) {
          SetEmpty(true)
          SetFlashMessage("* Please fill in the required fields.")

        } 
        
        else {
          const data = {
            username,
            pin
          };

          console.log('Data to be sent to the backend:', data);
          console.log('Data to be sent to the backend:',  JSON.stringify(data));

          try {

            const response = await axios.post('https://dbs-backend-service-ga747cgfta-as.a.run.app/users/login', {username, pin})
      
            // Assuming your server responds with a success message or a redirect URL
            if (response.data.success) {
              const UserID = response.data.userid;
              navigate(`/${UserID}/home`);
            } 
            
            else {
              SetEmpty(true)
              SetFlashMessage("Incorrect username or pin.")
            }
          } 
          
          catch (error) {
            console.log('Error:', error.toJSON());
          }
        }
      };
    
    
    return (
        <div className='loginbackground'>
            <img src="/assets/dbslogo.png" className='DBS'/>
            <form className='form_styling' onSubmit={handleSubmit}>
                {empty &&                 
                <p className="alert">{flashmessage}</p>
                }
                <input type="text" id="username" className="inputdata" placeholder="ENTER USERNAME" />
                <input type="password" id="pin" className="inputdata" placeholder="ENTER PIN" />
                <p className='forgot'> Forgot your  <u>PIN</u>?</p>
                <input type="submit" value="LOGIN" className='login'/>
            </form>
        </div>
    );
  };
  
  export default Loginscreen;