import React, { Component } from 'react';
import './nav.sass';

import logo from './img/logo.svg';
import arrow from './img/arrow.svg';
import avatar from './img/avatar.png';
import bell from './img/bell.svg';
import search from './img/search.svg';

class Nav extends Component {
    render() {
        const { type } = this.props;
        return (
            <>
                <nav className="userProfileNavMobile g-maxWwidth">
                    <div className="userProfileNav__myAccountBtn">
                        <p>
                            {type === 'userpanel' && 'Moje konto'}
                            {type === 'rank' && 'Ranking'}
                        </p>
                        <img src={arrow} alt="arrow" className="userProfileNav__arrow" />
                    </div>
                    <img src={avatar} alt="avatar" className="userProfileNav__avatar" />
                </nav>
                <nav className="userProfileNavDesktop">
                    <div className="userProfileNavDesktop__wraper g-maxWwidth">
                        <div className="userProfileNavDesktop__logo">
                            <img src={logo} alt="edumat" />
                            <p>edumat.pl</p>
                        </div>
                        <div className="userProfileNavDesktop__other">
                            <form>
                                <input type="text" placeholder="Wyszukaj" />
                                <button>
                                    <img src={search} alt="" />
                                </button>
                            </form>
                            <div className="userProfileNavDesktop__profile">
                                <div className="userProfileNavDesktop__bell">
                                    <img src={bell} alt="bell" />
                                </div>
                                <img src={avatar} alt="avatar" className="userProfileNavDesktop__avatar" />
                                <p>Julia Kowalska</p>
                                <img src={arrow} alt="arrow" className="userProfileNavDesktop__arrow" />
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Nav;
