import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/UserSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();

    const logoutofApp = () => {
        dispatch(logout())
        auth.signOut();
    };


    return (
        <div className="header">
            <div className="header_left">
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGZKGGJ75S72g/company-logo_200_200/0/1629754938156?e=2159024400&v=beta&t=IBmR7Q39iR_z3FiY6IcQlprM2MrTQxERxe2S1B1GY_M" alt=""/>
                <div className="header_search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={MessageIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notification"/>
                <HeaderOption avatar={true} title="me"
                onClick={logoutofApp}/>
            </div>
            
        </div>
    )
}

export default Header;
