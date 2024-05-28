import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login-page.css';


function LoginPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const goToTablePage = () => {
        // if (response.status === 201) {
        //     navigate('/data_table');
        // } else if (response.status === 400) {
        //     return (
        //         <div>Error</div>
        //
        //     )
        // }
        navigate('/data_table');
    }


        return (
            <div className='main-container'>
                <div className='title-container'>
                    <div>
                        Login
                    </div>
                </div>
                <br />
                <div className='input-container'>
                    <input
                        value={email}
                        placeholder="Enter your email"
                        onChange={(ev) => setEmail(ev.target.value)}
                        className={'input-box'}
                    />
                </div>
                <br />
                <div className='input-container'>
                    <input
                        value={password}
                        placeholder="Enter your password"
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={'input-box'}
                    />
                </div>
                <br />
                <div className='input-container'>
                    <input className={'input-button'} type="button" onClick={goToTablePage} value={'Log in'} />
                </div>
            </div>

        )

    };

export default LoginPage;

