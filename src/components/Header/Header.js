import './Header.css';
import logo from './logo.jpg';
import avatar from './avatar.jpg'
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={logo} alt="logo"/>
                <h2>movieland</h2>
            </div>
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