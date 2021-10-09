import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectuser } from './features/UserSlice';
import { auth } from './firebase';
import './Sidebar.css';

function Sidebar() {
    const user = useSelector(selectuser);

    const RecentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="recentItem_hash">#</span>
            <p>{ topic }</p>
        </div>
     );
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                <Avatar className="sidebar_avatar" src={auth.currentUser.photoURL}> 
                { user.email[0] }
                </Avatar>
                <h2>{ auth.currentUser.displayName }</h2>
                <h4>{ user.email }</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNum">2.543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNum">2.483</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {RecentItem("react.js")}
                {RecentItem("Programming")}
                {RecentItem("SoftwareEnginnering")}
                {RecentItem("design")}
                {RecentItem("developer")}

                
            </div>  
        </div>
    )
}

export default Sidebar;