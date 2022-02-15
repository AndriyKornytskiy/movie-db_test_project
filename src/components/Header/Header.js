import {NavLink} from "react-router-dom";

import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import logo from './logo.jpg';
import avatar from './avatar.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <NavLink to={'movies?page='} className='header_logo' onClick={window.location.reload}>
                <img src={logo} alt="logo"/>
                <h2>movieland</h2>
            </NavLink>
            <div className='header_input'>
                <input type="text" placeholder="find movie..."/>
            </div>
            <div className='header_day-night'>
                <ThemeSwitcher/>
            </div>
            <div className='user_info'>
                <img src={avatar} alt="avatar"/>
                <div>AnKo</div>
            </div>
        </div>
    );
};

export {Header};