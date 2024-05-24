import { useState } from 'react';
import { Link } from 'react-router-dom';
import './createaccount.css';

const Createaccount = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => { // เพิ่ม handle function สำหรับการเปลี่ยนชื่อ
        setName(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => { // เพิ่ม handle function สำหรับการเปลี่ยนรหัสผ่านที่ยืนยัน
        setConfirmPassword(e.target.value);
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Password and Confirm Password do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/register', { // เปลี่ยน 'your_api_endpoint' เป็น URL ของ API ของคุณ
                name: name,
                email: email,
                password: password
            });
            console.log(response.data); // แสดงข้อมูลที่ได้จากการสร้างบัญชีผู้ใช้สำเร็จ
            alert('Account created successfully');
        } catch (error) {
            console.error(error);
            setErrorMessage('Failed to create account');
        }
    };
    return (
        <>
        <div className='container-register'>
            
            <h2>
                Create Account
            </h2>
            
                <form onSubmit={handleSubmit} >
                <div className='text2'>
                    Name
                </div>
                <input type="name" placeholder="Enter your name" value={name} onChange={handleNameChange}></input>
                <br />
                <br />

                <div className='text2'>
                    Email Address
                </div>
                <input type="email" id='email' value={email} onChange={handleEmailChange} placeholder="Enter email Address" required />

                <br />
                <br />

                <div className='text2'>
                    Password
                </div>
                <input type="password" id='password' value={password} onChange={handlePasswordChange} placeholder="Enter your password" required />
                <br />
                <br />

                <div className='text2'>
                    Confirm password
                </div>
                <input type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Enter your confirm password"></input>
                <br /><br />
                <Link to='/uplode'>
                <button type='submit' onClick={handleSubmit}>
                    Create Account
                </button>
                </Link>
                <div className='error'>{errorMessage && <p>{errorMessage}</p>}</div>
                </form>
            
            
            
            <div className='text5'>Already have an account? 
            <Link to='/' className='text4'> Login</Link> </div>
        </div>
            

        </>

    )
}

export default Createaccount