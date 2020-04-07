import React, { Component } from 'react';
import './about.scss';

import avatar from "./img/magda.png"
import check from "./img/check.png"
import yellow from "./img/yellow.png"
import red from "./img/red.png"
import blue from "./img/blue.png"


const createdTime = "3 sek. temu"
const nick = "Madix"
const textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. aliqua.  enim ad minim veniam."

class About extends Component {
    render() {
        return (
            <section className="about g-maxWwidth">

                <div className="about__item">
                    <div className="about__date">
                        <p>{createdTime}</p>
                    </div>
                    <div className="about__personalbox">
                        <div>
                            <img src={avatar} alt="avatar"></img>
                            <p>{nick}</p>
                        </div>
                        <div className="about__showmore">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="about__text"><p>{textContent}</p></div>
                    <div className="g-btn g-fillbtn about__btn about__btn--marginleft"><p>Odpowiedz</p></div>
                    <img className="about__imgblock about__imgblock--first" src={yellow} alt="yellow block"></img>
                </div>


                <div className="about__item">
                    <div className="about__personalbox">
                        <div>
                            <img src={avatar} alt="avatar"></img>
                            <p>{nick}</p>
                        </div>
                        <div className="about__showmore">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="about__text"><p>{textContent}</p></div>
                    <div className="about__btnbox">
                        <div className="g-btn g-fillbtn about__btn"><p>Dziękujemy!</p></div>
                        <div className="g-btn g-fillbtn about__btn"><p>Eghh...</p></div>
                    </div>
                    <img className="about__imgblock about__imgblock--second" src={red} alt="red block"></img>
                </div>
                <div className="about__item">
                    <img src={check} className="about__check" alt="check"></img>
                    <div className="about__date">
                        <p>{createdTime}</p>
                    </div>
                    <div className="about__personalbox">
                        <div>
                            <img src={avatar} alt="avatar"></img>
                            <p>{nick}</p>
                        </div>
                        <div className="about__showmore">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="about__text"><p>{textContent}</p></div>
                    <div className="about__btnbox">
                        <div className="g-btn g-fillbtn about__btn"><p>Dziękujemy!</p></div>
                        <div className="g-btn g-fillbtn about__btn"><p>Eghh...</p></div>
                    </div>
                    <img className="about__imgblock about__imgblock--third" src={blue} alt="blue block"></img>
                </div>
            </section>
        )
    }
}
export default About;