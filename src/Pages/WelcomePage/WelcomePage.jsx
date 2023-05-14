
import {Link} from 'react-router-dom'
import {useAuth} from "../../hooks/use-auth"

const WelcomePage = () => {
    
    
    const {isAuth , email , displayName , photoURL} = useAuth();
    
    return (
        <div className='Welcome_Container'>
            <div className='Welcome_Content'>
                <h1>Thank`s For Registration</h1>
                <div>Dear {displayName} thank you for registering your data is saved.<p>As the main mail you use : {email}</p></div>
                <Link to="/Login">Let's go to main page</Link>
            </div>
        </div>
    )
    
  }

  export {WelcomePage};