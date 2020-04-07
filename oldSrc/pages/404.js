import React from 'react';
import '../components/error404.scss'

import logo from '../images/logo.png'
import errorSvg from '../images/calculator.svg'

function error404() {
  return (
      <div className="pageNotFound">
            <div className="nav-logobox pageNotFound__logo"> 
                <img className="nav-logo" src={logo} alt="logo edumat"></img>
                <h2>edumat.pl</h2>
            </div>  
            <div className="pageNotFound__textBox">
                <img src={errorSvg} alt="error"></img>
                <div className="pageNotFound__insidebox">
                    <h2><span>UPS! </span>            
                        To nie jest szczęśliwy dzień dla tego kalkulatora.
                    </h2>
                    <p className="pageNotFound__insideboxp">
                        Error 404 może oznaczać, że strona, którą próbujesz otworzyć mogła zostać <span>usunięta</span> lub <span>przeniesiona</span>.
                    </p>
                    <a href="/"><div className="g-btn g-fillbtn pageNotFound__btn"> <p className="pageNotFound__btnp">Wróć</p></div></a>
                </div>
            </div>
      </div>
  );
}

export default error404;
