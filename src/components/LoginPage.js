import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../components/styles/login-page.css';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function generateString(email, unixTime) {
        const encodedUnixTime = unixTime.toString(16);
        const dayNumber = new Date(unixTime * 1000).getDate();
        let lengthOfEmailPart;
        if (dayNumber < 10) {
            lengthOfEmailPart = 1;
        } else if (dayNumber < 20) {
            lengthOfEmailPart = 2;
        } else if (dayNumber < 30) {
            lengthOfEmailPart = 3;
        } else {
            lengthOfEmailPart = 4;
        }
        const userEmailPart = email.slice(0, lengthOfEmailPart);
        return encodedUnixTime + '$' + userEmailPart;
    }

    const userEmail = "example@example.com";
    const unixTime = Math.floor(Date.now() / 1000);
    const generatedString = generateString(userEmail, unixTime);
    console.log(generatedString);

        const myHeaders = new Headers();
        myHeaders.append("x-fair-man", "66584717$exam");
        myHeaders.append("token", "ddddd");
        const formdata = new FormData();
        formdata.append("forms_field", `{"code": "no forms_field"}`);
        formdata.append("user_id", "84555");
        const requestOptions = {method: "POST", headers: myHeaders, body: formdata, redirect: "follow"};
        fetch("https://itv.ngo2.ru/wp-json/citv/v1/users?page=30&count=2", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));


        const goToTablePage = (e) => {
            // e.preventDefault();
            //
            // // const hardcodedUsername = 'cbyntpfnjh163@mail.com';
            // // const hardcodedPassword = 'cbyzhjafpfnhjy!2334?';
            //
            // if () {
            //     navigate('/data_table');
            //     setError('');
            // } else {
            //     setError('Invalid username or password');
            //     console.log(error)
            // }
            navigate('/data_table');
        };


        return (
            // <div className='main-container'>
            //     <div className='title-container'>
            //         <div>
            //             Login
            //         </div>
            //     </div>
            //     <br/>
            //
            //     <form onSubmit={goToTablePage}>
            //         <div className='input-container'>
            //             <input
            //                 value={email}
            //                 placeholder="Enter your email"
            //                 onChange={(e) => setEmail(e.target.value)}
            //                 required
            //                 className={'input-box'}
            //             />
            //         </div>
            //
            //         <br/>
            //         <div className='input-container'>
            //             <input
            //                 value={password}
            //                 placeholder="Enter your password"
            //                 onChange={(e) => setPassword(e.target.value)}
            //                 className={'input-box'}
            //             />
            //         </div>
            //     </form>
            //     <br/>
            //     <div className='input-container'>
            //         <input className={'input-button'} type="button" onClick={goToTablePage} value={'Log in'}/>
            //     </div>
            //
            // </div>

            <div className="form-block">
                <form onSubmit={goToTablePage} className="login-form">
                <h1 className="form-title">Войти в админ панель</h1>
                <div className="form-group">
                    <label htmlFor="username" >Email</label>
                    <input
                                    value={email}
                                    placeholder="Enter your email"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-button">Войти</button>
            </form>
</div>

        )

    };

    export default LoginPage;

