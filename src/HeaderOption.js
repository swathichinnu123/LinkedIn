import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectuser } from './features/UserSlice';

function HeaderOption({ avatar , Icon , title , onClick }) {
    const user = useSelector(selectuser);

    return (
        <div onClick={onClick} className="headerOption">
            { Icon && <Icon className="headerOption_Icon" /> }
            { avatar && <Avatar className="headerOption_Icon" src={user?.photoURL} onClick={onclick}> 
            {user?.email[0]}</Avatar>}
            <h3 className="headerOption_title">{ title }</h3>
        </div>
    )
}

export default HeaderOption;
