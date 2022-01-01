import { Search, Home, SupervisorAccount, BusinessCenter, Chat, Notifications } from '@material-ui/icons';
import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';

const Header = () => {
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
                <HeaderOption  title="Messaging"  Icon={Chat}/>
                <HeaderOption title="Notifications"  Icon={Notifications} />
                <HeaderOption avatar="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg" title="me"
                />
            </div>
        </div>
    );
}
export default Header