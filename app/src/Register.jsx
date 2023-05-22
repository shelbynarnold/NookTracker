import React, { useState } from "react";

export const Register = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
    <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="name"/>
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"/>
            <label for="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
            <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign in here!</button>
    </div>
    )
}