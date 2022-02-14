import {useDispatch, useSelector} from "react-redux";

import {changeTheme} from "../../store";
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
    const {darkMode} = useSelector(state => state.theme);
    const dispatch = useDispatch();
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
                <span style={{color: darkMode ? "grey" : "yellow"}}>☀</span>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => dispatch(changeTheme(!darkMode))}/>
                        <span className="slider round"> </span>
                    </label>
                </div>
                <span style={{color: darkMode ? "#c96dfd" : "grey"}}>☽</span>
            </div>
        </div>
    );
};

export {ThemeSwitcher};