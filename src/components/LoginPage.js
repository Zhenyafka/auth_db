import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../components/styles/login-page.css';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const goToTablePage = (e) => {
            e.preventDefault();

            const hardcodedUsername = 'cbyntpfnjh163@mail.com';
            const hardcodedPassword = 'cbyzhjafpfnhjy!2334?';

            if (email === hardcodedUsername && password === hardcodedPassword) {
                navigate('/data_table');
                setError('');
            } else {
                setError('Invalid username or password');
                console.log(error)
            }
        };


    return (
        <div className='main-container'>
            <div className='title-container'>
                <div>
                    Login
                </div>
            </div>
            <br/>

                <form onSubmit={goToTablePage}>
                    <div className='input-container'>
                <input
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={'input-box'}
                />
                    </div>

            <br/>
            <div className='input-container'>
                <input
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={'input-box'}
                />
            </div>
                </form>
            <br/>
            <div className='input-container'>
                <input className={'input-button'} type="button" onClick={goToTablePage} value={'Log in'}/>
            </div>

        </div>

    )

};

export default LoginPage;

