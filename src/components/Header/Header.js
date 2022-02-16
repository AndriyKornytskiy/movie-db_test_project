import {NavLink, Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";

import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {getSearchValue} from "../../store";
import logo from './logo.jpg';
import avatar from './avatar.jpg'
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();

    const location = useLocation();

    // const click =(e) => {
    //     console.log(e.target.offsetParent[0].value);
    //     dispatch(getSearchValue(e.target.offsetParent[0].value));
    // }

    return (
        <div className='header'>
            <NavLink to={'movies?page='} className='header_logo' onClick={location.pathname=('/')}>
                <img src={logo} alt="logo"/>
                <h2>movieland</h2>
            </NavLink>
            <div className='header_input'>
                <form>
                    <input type="text" placeholder="find movie..." name='search'/>
                    <Link to={'movies/search'} >
                        <button
                            className='header_input_btn'
                            onClick={(e)=>dispatch(getSearchValue(e.target.offsetParent[0].value))}
                        >Search
                        </button>
                    </Link>
                </form>
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