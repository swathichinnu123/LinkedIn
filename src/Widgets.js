import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading,subtitle) => (
        <div className="widgets_article">
            <div className="article_left">
                <FiberManualRecordIcon />
            </div>
            <div className="article_right">
                <h4>{ heading }</h4>
                <p>{ subtitle }</p>
            </div>
        </div>
    );
    


    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("PAPA react is back",'Top news - 9099 readers')}
            {newsArticle("Coronavirus: UK updates",'Top news - 886 readers')}
            {newsArticle("Hello, mojo? It's time to come back",'Top news - 2099 readers')}
            {newsArticle("Auto makers hunt for tech talent",'Top news - 8999 readers')}
            {newsArticle("It's women only at Ola's mega plant",'Top news - 7009 readers')}
            {newsArticle("Feeling stuck? Switch your thinking",'Top news - 7779 readers')}
            {newsArticle("Watch out micro-stress",'Top news - 599 readers')}
        </div>
    )
}

export default Widgets
