import { Search, Home, SupervisorAccount, BusinessCenter, Chat, Notifications } from '@material-ui/icons';
import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';

import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice'
import { auth } from '../firebase'

const Header = () => {
    const dispatch = useDispatch();
    const logoutApp = () => {
        auth.signOut();
        dispatch(logout())
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src='logo192.png' alt='logo' />
                <div className="header__search">
                    <Search />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={Home} />
                <HeaderOption title="My Network" Icon={SupervisorAccount} />
                <HeaderOption title="Jobs" Icon={BusinessCenter} />
                <HeaderOption title="Messaging" Icon={Chat} />
                <HeaderOption title="Notifications" Icon={Notifications} />
                <HeaderOption avatar={true} title="me"
                    onClick={logoutApp} />
            </div>
        </div>
    );
}
export default Header