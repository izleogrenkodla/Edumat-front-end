import React, { Component } from 'react';
import './statistics.sass';

import AsideUserInfo from './asideUserInfo/asideUserInfo';
import Calendar from '../calendar/calendar';

import arrowLeft from '../../img/arrowLeft.svg';
import cup from '../../img/cup.svg';
import arrowGrey from '../../img/greyArrow.svg';
import award1 from '../../img/Lightning_Icon.svg';
import award2 from '../../img/Medal_Icon.svg';
import award3 from '../../img/Planet_Icon.svg';
import award4 from '../../img/Proffesor_Icon.svg';
import award5 from '../../img/Quiz2_Icon.svg';
import award6 from '../../img/Student3_Icon.svg';

class Statistics extends Component {
    render() {
        return (
            <section className="userProfileStatistics g-maxWwidth">
                <h2 className="userProfile__mobile">Twoje statystyki</h2>
                <div className="userProfileStatistics__container">
                    <div className="userProfileStatistics__rank">
                        <AsideUserInfo />
                        <div className="userProfileStatistics__rankElement">
                            <div className="userProfileStatistics__rankElementTitle">
                                <p>Znajomość matematyki</p>
                                <p>80%</p>
                            </div>
                            <div className="userProfileStatistics__progressBar"></div>
                            <button className="userProfileStatistics__button">
                                <p>Ranking</p>
                                <img src={arrowLeft} alt="arrow" className="userProfileStatistics__arrowLeft" />
                            </button>
                        </div>
                        <hr />
                        <div className="userProfileStatistics__currentRank">
                            <img src={cup} />
                            <p>273 pkt. do <span className="gold">1 miejsca!</span></p>
                        </div>
                    </div>
                    <button className="userProfileStatistics__button userProfileStatistics__button--marginTop">
                        <p>Odznaki za odpowiedzi</p>
                        <img src={arrowLeft} alt="arrow" className="userProfileStatistics__arrowLeft" />
                    </button>
                    <hr />
                    <div className="userProfileStatistics__answerAwards">
                        <div className="userProfileStatistics__award">
                            <img src={award1} alt="award" className="userProfileStatistics__award" />
                        </div>
                        <div className="userProfileStatistics__award">
                            <img src={award2} alt="award" className="userProfileStatistics__award" />
                        </div>
                        <div className="userProfileStatistics__award">
                            <img src={award3} alt="award" className="userProfileStatistics__award" />
                        </div>
                        <div className="userProfileStatistics__award">
                            <img src={award4} alt="award" className="userProfileStatistics__award" />
                        </div>
                        <div className="userProfileStatistics__award">
                            <img src={award5} alt="award" className="userProfileStatistics__award" />
                        </div>
                        <div className="userProfileStatistics__award">
                            <img src={award6} alt="award" className="userProfileStatistics__award" />
                        </div>
                    </div>
                    <div className="userProfile__mobile">
                        <p className="userProfileStatistics__sectionHeader userProfileStatistics__sectionHeader--mobile">Aktywność</p>
                        <hr />
                        <div className="userProfileStatistics__activityContainer">
                            <div className="userProfileStatistics__activity">
                                <h2><span>23</span> Pytania</h2>
                                <p>Ilość pytań, które zadałeś na naszej platformie</p>
                            </div>
                            <div className="userProfileStatistics__activity">
                                <h2><span>12</span> Odpowiedzi</h2>
                                <p>Ilość odpowiedzi, które udzieliłeś na naszej platformie</p>
                            </div>
                            <div className="userProfileStatistics__activity">
                                <h2><span>54</span> Polubienia</h2>
                                <p>Ilość zebranych polubień na naszej platformie</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ad userProfile__mobile">
                    Reklama
                </div>
                <div className="userProfileStatistics__container">
                    <Calendar />
                    <p className="userProfileStatistics__sectionHeader">Najbliższe zaliczenia</p>
                    <hr />
                    <div className="userProfileStatistics__upcomingEvents">
                        <img src={arrowGrey} alt="arrow" className="userProfileStatistics__arrowTop" />
                        <div className="userProfileStatistics__event userProfileStatistics__event--active">
                            <div className="userProfileStatistics__eventDate">
                                <p className="userProfileStatistics__eventDay">17</p>
                                <p>Luty</p>
                            </div>
                            <p className="userProfileStatistics__eventDescription">kartkówka wielomiany</p>
                        </div>
                        <div className="userProfileStatistics__event">
                            <div className="userProfileStatistics__eventDate">
                                <p className="userProfileStatistics__eventDay">17</p>
                                <p>Luty</p>
                            </div>
                            <p className="userProfileStatistics__eventDescription">sprawdzian, dział 1 i 2</p>
                        </div>
                        <div className="userProfileStatistics__event">
                            <div className="userProfileStatistics__eventDate">
                                <p className="userProfileStatistics__eventDay">17</p>
                                <p>Luty</p>
                            </div>
                            <p className="userProfileStatistics__eventDescription">sprawdzian, dział 1 i 2</p>
                        </div>
                        <div className="userProfileStatistics__event">
                            <div className="userProfileStatistics__eventDate">
                                <p className="userProfileStatistics__eventDay">17</p>
                                <p>Luty</p>
                            </div>
                            <p className="userProfileStatistics__eventDescription">sprawdzian, dział 1 i 2</p>
                        </div>
                        <img src={arrowGrey} alt="arrow" className="userProfileStatistics__arrowBottom" />
                    </div>
                </div>
            </section>
        )
    }
}
export default Statistics;
