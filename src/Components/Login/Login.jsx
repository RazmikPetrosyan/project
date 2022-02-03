import React from 'react';
import './login.scss';
import state from '../../state';

class Login extends React.Component{ 

    state = {
        log: '',
        pass: '',
    }


    render() {
        const log = React.createRef();
        const pass = React.createRef();
        

        const inputUpdateLog = () => {
            let text = log.current.value;
            this.setState({log: text});
        }

        const inputUpdatePass = () => {
            let text = pass.current.value;
            this.setState({pass: text});
        }

        const goToHome = () => {
            if(this.state.log === state.logValue && this.state.pass === state.passValue) {
                this.props.history.push('/home');
            }
            else {
                this.props.history.push('/');
            }
        }
        
        const changeLogin = () => {
            this.props.history.push('/change');
        }
        
        return(
            <div className="login">
                <div className="login__inner">
                    <form action="/" className="login__form">
                        <div className="input__item">
                            <label htmlFor="">Գաղտնանուն</label>
                            <input type="text" className="login__input" ref={log} onChange={inputUpdateLog}/>
                        </div>
                        <div className="input__item">
                            <label htmlFor="">Գաղտնագիր</label>
                            <input type="password" className="login__input"ref={pass} onChange={inputUpdatePass}/>
                        </div>
                    </form>
                    <div className="buttons">
                        <button className='login__btn' onClick={goToHome}>Մուտք</button>
                        <button className='login__btn' onClick={goToHome}>Ելք</button>
                    </div>
                    <p className='change' onClick={changeLogin}>Փոխել գաղտնանունն ու գաղտնագիրը</p>
                </div>
            </div>
        );
    };
};

export default Login;