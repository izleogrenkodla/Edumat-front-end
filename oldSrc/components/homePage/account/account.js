import React, { Component } from 'react';
import './account.scss';
import girlEdumat from './GirlEdumat-01-new.svg';

import check from './img/check.png'
import arrow from './img/arrow.png'


class App extends Component {
    render() {
        return (
            <div>
                <section className="account--rwd g-maxWwidth">
                    <h2>Załóż konto</h2>
                    <p>Otwórz Darmowe Konto w edumat.pl, aby uzyskać dostęp do wszystkich funkcji! Quizy oraz zadania</p>
                    <ul className="account__account-plus-list">
                        <li className="account__account-plus"><img src={check} alt="check icon" className="account__dot"></img>Dodawanie pytań bez limitu</li>
                        <li className="account__account-plus"><img src={check} alt="check icon" className="account__dot"></img>Dostęp do zadań sprawdzających</li>
                        <li className="account__account-plus"><img src={check} alt="check icon" className="account__dot"></img>Quizy, które sprawdzą twoją wiedzę</li>
                    </ul>
                    <img className="account--rwd__arrow" src={arrow} alt="arrow"></img>
                </section>
                <section className="account g-maxWwidth">
                    <div className="account__img-box">
                        <img className="account__img" src={girlEdumat} alt="Girl edumat" />
                    </div>
                    <div className="account__description-container">
                        <h2>Załóż konto</h2>
                        <p>Otwórz darmowe Konto w edumat.pl, aby uzyskać dostęp do wszystkich funkcji! Quizy oraz zadania czekają na Ciebie!</p>
                        <ul className="account__account-plus-list">
                            <li className="account__account-plus"><img src={check} alt="check icon" className="account__dot"></img>Dodawanie pytań bez limitu</li>
                            <li className="account__account-plus"><img src={check} alt="check icon" className="account__dot"></img>Dostęp do zadań sprawdzających</li>
                            <li className="account__account-plus"><img src={check} alt="check icon" className="account__dot"></img>Quizy, które sprawdzą twoją wiedzę</li>
                        </ul>
                        <div className="g-btn g-borderbtn account__button-register">
                            Zarejestruj się
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default App;