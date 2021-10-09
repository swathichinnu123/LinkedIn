import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/UserSlice';
import './Login.css';
import { auth } from './firebase';

function Login() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [profilePic,setProfilePic] = useState("");
    const dispatch = useDispatch();
 

    const register = () => {
        if (!name) {
            return alert("Please Enter Full name");
        }
        auth.createUserWithEmailAndPassword(email,password).then(() => 
        auth.currentUser.updateProfile({
            displayName: name,
            photoURL: profilePic,
        })
        )
        .then(() => {
            alert("registered");
            dispatch(login({
                email: email,
                uid: auth.currentUser.uid,
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.profilePic,
            }));
        }
        )
        .catch((error) => { alert(error.message) });
    };
        
    const LoginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(() => {
            dispatch(login({
                email: email,
                uid: auth.currentUser.uid,
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.profilePic,
            }));
        })
        .catch((error) => { alert(error.message)});
       
    };

    return (
        <div className="login">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbssiodp2RBBcb2OEJDcSYHQl9BdamrEbq_A&usqp=CAU" alt=""/>

            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (if your registering)" />

                <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic Url (register)" />

                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email address" />

                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="password" />

                <button type="submit" onClick={LoginToApp}>Sign-In</button>
            </form>
            <p>Not a Member?{" "}
                <span className="Login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login;
