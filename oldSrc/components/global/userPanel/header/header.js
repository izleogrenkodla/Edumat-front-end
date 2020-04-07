import React, { Component } from 'react';
import './header.sass';

import headerShadow from '../img/headerShadow.svg';
import headerImage from '../img/headerImage.svg';

class Header extends Component {
    render() {
        const { type } = this.props;
        return (
            <header className="userProfileHeader g-maxWwidth">
                <h1>
                    {type === 'userpanel' && 'Dzień dobry Julia!'}
                    {type === 'rank' && 'Do dzieła, Julka!'}
                </h1>
                <p>
                    {type === 'userpanel' && 'Jak Ci mija dzień?'}
                    {type === 'rank' && 'Jakie miejsce zajmujesz?'}
                </p>
                <button className="g-btn">
                    {type === 'userpanel' && 'Zadaj pytanie'}
                    {type === 'rank' && 'Wróć'}
                </button>
                <img src={headerImage} alt="header image" className="userProfileHeader__image" />
                <img src={headerShadow} alt="shadow" className="userProfileHeader__shadow" />
            </header>
        )
    }
}
export default Header;
