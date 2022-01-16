import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase'

import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const register = () => {
        if (!name) return alert('Please enter your Full Name');
        auth.createUserWithEmailAndPassword(email, password).
            then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    dispalyName: name,
                    photoUrl: profilePic
                }))
            })
    }
    const loginToApp = (e) => { }
    return (
        <div className='login'>
            <image src='login512.png' alt='Logo' />
            <form>
                <input value={name} onChange={e => setName(e.target.value)}
                type='text' placeholder='Full name (required if registering)' />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} 
                type='text' placeholder='Profile pic URL (Optional)' />
                <input value={email} onChange={e => setEmail(e.target.value)} 
                type='email' placeholder='Email' />
                <input  value={password} onChange={e => setPassword(e.target.value)} 
                type='password' placeholder='Password' />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a memeber?{''}
                <span onClick={register} className='login_register'>Register Now</span>
            </p>
        </div>
    )
}
export default Login