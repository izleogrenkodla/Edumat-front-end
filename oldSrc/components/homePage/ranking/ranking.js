import React, { Component } from 'react';
import './ranking.scss';

import icon from './img/icon.png'
import avatar from './img/avatar.png'
import alpha from './img/alpha.svg'
import question from './img/question.svg'
import test from './img/test.svg'

const pkt = "1889"
const lvl = "23"
const manyAnswers = "26"
const manyQuestion = "9"
const manyLiked = "6"
const nick = "Alicja Mrrr"

const numberGen = () => {
    const numberP = document.querySelectorAll(".ranking__personnr")
    for (let i = 0; i < numberP.length; i++) {
        numberP[i].textContent = i + 1 + "."
    }

}



class Ranking extends Component {
    componentDidMount() {
        numberGen()
    }

    render() {
        return (
            <section className="ranking  g-maxWwidth">
                <div className="ranking__headerbox">
                    <h2 className="ranking__header">
                        <span className="ranking__icon-bg">
                            <img src={icon} className="ranking__icon" alt="ikona pucharu" />
                        </span>
                        <span className="ranking__section-name">
                            Ranking
                                <span className="lighter"> użytkowników</span>
                        </span>
                    </h2>
                    <div className="g-btn ranking__showmore"><p>Zobacz więcej</p></div>
                </div>

                <div className="ranking__drag">


                    <div className="ranking__dragitem">
                        <p className="ranking__personnr"></p>
                        <img className="ranking__avatar" src={avatar} alt="avatar"></img>
                        <p className="ranking__nick">{nick} </p>
                        <div className="ranking__pktbox">

                            <p> {pkt + " pkt."}</p>
                            <div></div>
                            <p>{"Poziom " + lvl}</p>
                        </div>
                        <div className="ranking__answearsbox">
                            <div>
                                <h5>Odpowiedzi</h5>
                                <p>{manyAnswers}</p>
                            </div>
                            <div className="ranking__answearsboxspace">
                                <h5>Pytania</h5>
                                <p>{manyQuestion}</p>
                            </div>
                            <div>
                                <h5>Polubione</h5>
                                <p>{manyLiked}</p>
                            </div>
                        </div>
                        <div className="ranking__medal">
                            <img src={alpha} alt="icon"></img>
                            <img src={question} alt="icon"></img>
                            <img src={test} alt="icon"></img>
                        </div>
                        <div className="g-btn ranking__btn"><p>Zobacz profil</p></div>
                    </div>

                    <div className="ranking__dragitem">
                        <p className="ranking__personnr"></p>
                        <img className="ranking__avatar" src={avatar} alt="avatar"></img>
                        <p className="ranking__nick">{nick} </p>
                        <div className="ranking__pktbox">

                            <p> {pkt + " pkt."}</p>
                            <div></div>
                            <p>{"Poziom " + lvl}</p>
                        </div>
                        <div className="ranking__answearsbox">
                            <div>
                                <h5>Odpowiedzi</h5>
                                <p>{manyAnswers}</p>
                            </div>
                            <div className="ranking__answearsboxspace">
                                <h5>Pytania</h5>
                                <p>{manyQuestion}</p>
                            </div>
                            <div>
                                <h5>Polubione</h5>
                                <p>{manyLiked}</p>
                            </div>
                        </div>
                        <div className="ranking__medal">
                            <img src={alpha} alt="icon"></img>
                            <img src={question} alt="icon"></img>
                            <img src={test} alt="icon"></img>
                        </div>
                        <div className="g-btn ranking__btn"><p>Zobacz profil</p></div>
                    </div>

                    <div className="ranking__dragitem">
                        <p className="ranking__personnr">{}</p>
                        <img className="ranking__avatar" src={avatar} alt="avatar"></img>
                        <p className="ranking__nick">{nick} </p>
                        <div className="ranking__pktbox">

                            <p> {pkt + " pkt."}</p>
                            <div></div>
                            <p>{"Poziom " + lvl}</p>
                        </div>
                        <div className="ranking__answearsbox">
                            <div>
                                <h5>Odpowiedzi</h5>
                                <p>{manyAnswers}</p>
                            </div>
                            <div className="ranking__answearsboxspace">
                                <h5>Pytania</h5>
                                <p>{manyQuestion}</p>
                            </div>
                            <div>
                                <h5>Polubione</h5>
                                <p>{manyLiked}</p>
                            </div>
                        </div>
                        <div className="ranking__medal">
                            <img src={alpha} alt="icon"></img>
                            <img src={question} alt="icon"></img>
                            <img src={test} alt="icon"></img>
                        </div>
                        <div className="g-btn ranking__btn "><p>Zobacz profil</p></div>
                    </div>
                    <div className="ranking__dragitem">
                        <p className="ranking__personnr">{}</p>
                        <img className="ranking__avatar" src={avatar} alt="avatar"></img>
                        <p className="ranking__nick">{nick} </p>
                        <div className="ranking__pktbox">

                            <p> {pkt + " pkt."}</p>
                            <div></div>
                            <p>{"Poziom " + lvl}</p>
                        </div>
                        <div className="ranking__answearsbox">
                            <div>
                                <h5>Odpowiedzi</h5>
                                <p>{manyAnswers}</p>
                            </div>
                            <div className="ranking__answearsboxspace">
                                <h5>Pytania</h5>
                                <p>{manyQuestion}</p>
                            </div>
                            <div>
                                <h5>Polubione</h5>
                                <p>{manyLiked}</p>
                            </div>
                        </div>
                        <div className="ranking__medal">
                            <img src={alpha} alt="icon"></img>
                            <img src={question} alt="icon"></img>
                            <img src={test} alt="icon"></img>
                        </div>
                        <div className="g-btn ranking__btn "><p>Zobacz profil</p></div>
                    </div>
                    <div className="ranking__dragitem">
                        <p className="ranking__personnr">{}</p>
                        <img className="ranking__avatar" src={avatar} alt="avatar"></img>
                        <p className="ranking__nick">{nick} </p>
                        <div className="ranking__pktbox">

                            <p> {pkt + " pkt."}</p>
                            <div></div>
                            <p>{"Poziom " + lvl}</p>
                        </div>
                        <div className="ranking__answearsbox">
                            <div>
                                <h5>Odpowiedzi</h5>
                                <p>{manyAnswers}</p>
                            </div>
                            <div className="ranking__answearsboxspace">
                                <h5>Pytania</h5>
                                <p>{manyQuestion}</p>
                            </div>
                            <div>
                                <h5>Polubione</h5>
                                <p>{manyLiked}</p>
                            </div>
                        </div>
                        <div className="ranking__medal">
                            <img src={alpha} alt="icon"></img>
                            <img src={question} alt="icon"></img>
                            <img src={test} alt="icon"></img>
                        </div>
                        <div className="g-btn ranking__btn "><p>Zobacz profil</p></div>
                    </div>


                </div>

            </section>
        )
    }
}
export default Ranking;