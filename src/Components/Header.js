import React from 'react';
import '../Style/Header.css'

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <h1><i className="far fa-clock"></i>React Clock</h1>
            </div>
        );
    }
}

export default Header;