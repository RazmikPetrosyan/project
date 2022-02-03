import react from "react";
import './header.scss';
import { NavLink } from "react-router-dom";

class Header extends react.Component {

    render() {

        const logOut = () => {
            this.props.history.push('/');
        }

        const path = this.props.path;
        const header = react.createRef();

        return (
            <header className="header" ref={header}>
                <div className="container">
                    <div className="header__inner">
                        <nav className="nav">
                            <NavLink to={`${path}/task`} className="nav__link">Խնդիր</NavLink>
                            <NavLink to={`${path}/advice`} className="nav__link">Օրվա Խորհուրդ</NavLink>
                            <NavLink to={`${path}/help`} className="nav__link">Օգնություն</NavLink>
                            <NavLink to={`${path}/`} className="nav__link">Փակել բոլորը</NavLink>
                            <NavLink to={`${path}/info`} className="nav__link">Հեղինակ</NavLink>
                            <div className="logout">
                                <button type="button" onClick={logOut}>Ելք</button>
                            </div>
                        </nav>
                        
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;