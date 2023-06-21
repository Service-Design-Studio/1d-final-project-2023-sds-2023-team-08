// navigationutils.js
import { useNavigate, useLocation } from 'react-router-dom';

async function navigateTo(route) {
        // Implement code to navigate to the specified route
        try {
                const navigate = useNavigate();
                navigate(route);
            
                // You can add an optional delay if necessary
                await delay(1000); // Wait for 1 second (1000 milliseconds) before proceeding
        }
        catch (error) {
                console.error('Error navigating to route:', error);
                throw error; // Propagate the error to the caller
        }
}
            
            // Utility function for delaying execution
function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
}

export { navigateTo };

//async function clickOnLink(linkText) {
        // Implement code to click on the link with the given text
        //try{
                //const navigate = 
        //}
//}
      
async function getCurrentRoute() {
        // Implement code to retrieve the current route
        const location = useLocation();
        return location.pathname; // Return the current route pathname
}
export { getCurrentRoute };


