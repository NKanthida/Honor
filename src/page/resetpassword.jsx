import { useState } from 'react';
import './forgot.css';
const Resetpassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log('Submit button clicked');
        if (password !== confirmPassword) {
            setErrorMessage('Password and Confirm Password do not match');
            console.log('Error message set');
        }
        else{
            setErrorMessage("");
            console.log('Password match, error message cleared');
        }
    };

    return (
        <div className="container-forgot">

            <div className='text-reset'>
                Reset Password
            </div>
            <br />

            <form onSubmit={handlesubmit}>
                <input type='password' 
                placeholder='New Password' 
                value={password} 
                onChange={handlePassword}/>

                <br />
                <br />
                <input type='password' 
                placeholder='Confirm Password' 
                value={confirmPassword} 
                onChange={handleConfirmPassword}/>

                <br />
                <div className='error'>{errorMessage && <p>{errorMessage}</p>}</div>
                <br />
                <div className='send'>
                    <button type='submit' >Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Resetpassword