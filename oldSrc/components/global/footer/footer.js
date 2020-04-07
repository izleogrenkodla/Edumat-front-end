import React, { Component } from 'react';
import './footer.scss';

import facebookIcon from './img/facebook.png';
import youtubeIcon from './img/youtube.png';
import instagramIcon from './img/instagram.png';

class App extends Component {

    submitNewsletterForm(e) {
        e.preventDefault();
    }

    render() {
        return (
            <footer className="footer g-maxWwidth">
                <div className="footer__here-we-are-container footer__container">
                    <h3 className="footer__here-we-are">Tutaj jesteśmy</h3>
                    <div className="footer__icon-we-are-container">
                        <img className="footer__icon-we-are" src={facebookIcon} alt="facebook icon" />
                        <img className="footer__icon-we-are" src={instagramIcon} alt="instagram icon" />
                        <img className="footer__icon-we-are" src={youtubeIcon} alt="youtube icon" />
                    </div>
                    <p className="footer__cookies">Strona korzysta z plików cookie w celu realizacji usług zgodnie z polityką cookie . Możesz określić warunki przechowywania lub dostępu do cookie w Twojej przeglądarce.</p>
                </div>
                <div className="footer__about-as-container footer__container">
                    <h3 className="footer__about-as">O nas</h3>
                    <ul className="footer__about-as-list">
                        <li>Zespół</li>
                        <li>Kontakt</li>
                        <li>Preferencje cookie</li>
                    </ul>
                </div>
                <div className="footer__help-container footer__container">
                    <h3 className="footer__help">Pomoc</h3>
                    <ul className="footer__help-list">
                        <li>Regulamin</li>
                        <li>Reklama</li>
                        <li>Polityka prywatności</li>
                    </ul>
                </div>
                <div className="footer__newsletter-container footer__container">
                    <h3 className="footer__newsletter">Zapisz się do Newslettera</h3>
                    <form onSubmit={this.submitNewsletterForm.bind(this)}>
                        <div className="newsletter-input">
                            <input className="newsletter-input__input-text" type="text" placeholder="Podaj adres e-mail" />
                            <input className="newsletter-input__input-submit" type="submit" value="Subskrybuje!" />
                        </div>
                    </form>
                    <p className="footer__newsletter-cancel">Możesz anulować, klikając Informacje o koncie w zakładce Profil i ustawienia.</p>
                </div>
                <p className="footer__cookies--rwd">Strona korzysta z plików cookie w celu realizacji usług zgodnie z polityką cookie . Możesz określić warunki przechowywania lub dostępu do cookie w Twojej przeglądarce.</p>
            </footer>
        )
    }
}
export default App;