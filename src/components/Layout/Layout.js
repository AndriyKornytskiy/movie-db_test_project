import {Outlet} from "react-router-dom"

import {Header} from "../Header/Header";
import {Genres} from "../Genres/Genres";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {Layout};