import React, { Component } from 'react';
import './quest.scss';

import help from './img/help.png'
import kuba from './img/kuba.png'
import rules from './img/rules.png'
import chat from './img/chat.png'



class Quest extends Component {
    render() {
        return (
            <div className="quest  g-maxWwidth">
                <div className="quest__header">
                    <div className="quest__headerbox">
                        <div className="quest__rectangle"><img src={help} alt="help icon"></img></div>
                        <h4>Ostatnie </h4>
                        <p>pytanie</p>
                    </div>
                    <p className="g-btn quest__showmore">Zobacz więcej</p>
                </div>
                <div className="quest__content">
                    <div className="quest__contentbox">
                        <div className="contentbox__date">
                            <div className="contentbox__time"><p>3 sek. temu</p></div>
                        </div>
                        <div className="contentbox__avatar">
                            <div className="contentbox__avatarbox">
                                <img src={kuba} alt="avatar"></img>
                                <p>Kuba 21</p>
                            </div>
                            <div className="contentbox__more btn">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <p className="contentbox__text">
                            1. Punkt N lezy na boku LM trojkata równoramiennego KLM w taki sposób | KM |= | LM | .Odcinek KN dzieli ten trojkąt na dwa
                                </p>
                        <div className="contentbox__categories">
                            <div><img src={rules} alt="icon"></img><p>Graniastosłupy</p></div>
                            <div><img src={chat} alt="icon"></img><p>2 Odpowiedzi</p></div>
                        </div>
                    </div>
                    <div className="quest__contentbox">
                        <div className="contentbox__date">
                            <div className="contentbox__time"><p>3 sek. temu</p></div>
                        </div>
                        <div className="contentbox__avatar">
                            <div className="contentbox__avatarbox">
                                <img src={kuba} alt="avatar"></img>
                                <p>Kuba 21</p>
                            </div>
                            <div className="contentbox__more btn">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <p className="contentbox__text">
                            1. Punkt N lezy na boku LM trojkata równoramiennego KLM w taki sposób | KM |= | LM | .Odcinek KN dzieli ten trojkąt na dwa
                                </p>
                        <div className="contentbox__categories">
                            <div><img src={rules} alt="icon"></img><p>Graniastosłupy</p></div>
                            <div><img src={chat} alt="icon"></img><p>2 Odpowiedzi</p></div>
                        </div>
                    </div>
                    <div className="quest__contentbox">
                        <div className="contentbox__date">
                            <div className="contentbox__time"><p>3 sek. temu</p></div>
                        </div>
                        <div className="contentbox__avatar">
                            <div className="contentbox__avatarbox">
                                <img src={kuba} alt="avatar"></img>
                                <p>Kuba 21</p>
                            </div>
                            <div className="contentbox__more btn">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <p className="contentbox__text">
                            1. Punkt N lezy na boku LM trojkata równoramiennego KLM w taki sposób | KM |= | LM | .Odcinek KN dzieli ten trojkąt na dwa
                                </p>
                        <div className="contentbox__categories">
                            <div><img src={rules} alt="icon"></img><p>Graniastosłupy</p></div>
                            <div><img src={chat} alt="icon"></img><p>2 Odpowiedzi</p></div>
                        </div>
                    </div>
                    <div className="content__space"></div>
                </div>
            </div>
        )
    }
}
export default Quest;
