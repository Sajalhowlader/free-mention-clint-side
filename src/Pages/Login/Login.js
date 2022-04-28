import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='solid-container'>
                <div className="login-container">
                    <h2>Log In</h2>
                    <input type="text" name="" placeholder='Name' />
                    <input type="email" name="" placeholder='Email' />
                    <button>LOG IN</button>
                    <strong>or</strong>
                    <button className='google-btn'>Continue With google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;