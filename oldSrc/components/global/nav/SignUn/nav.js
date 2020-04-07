import React, { Component } from 'react';
import './nav.scss';

import logo from './img/logo.png'

class Nav extends Component {
    render() {
        return (
            <div className="max-width g-maxWwidth">
                <div className="nav">
                    <div className="nav-logobox">
                        <img className="nav-logo" src={logo} alt="logo edumat"></img>
                        <h2>edumat.pl</h2>
                    </div>
                    <div className="nav-box">
                        <div className="g-btn g-fillbtn nav-signin">zaloguj się</div>
                        <div className="g-btn nav-signun ">zarejestruj się</div>
                    </div>
                </div>
                <div className="nav--rwd">
                    <h1>Logo.</h1>
                    <button className="navrwd__collapse">
                        <div className="navrwd__collapseitem"></div>
                        <div className="navrwd__collapseitem"></div>
                        <div className="navrwd__collapseitem"></div>
                    </button>
                </div>
            </div>
        )
    }
}
export default Nav;