import React, { Component } from 'react';
import './place.sass';

import avatar from '../../../userProfile/img/avatar.png';
import award1 from '../../../userProfile/img/Medal_Icon.svg';
import award2 from '../../../userProfile/img/Lightning_Icon.svg';
import award3 from '../../../userProfile/img/Quiz2_Icon.svg';

class Top1_3 extends Component {
    render() {
        const { desktopOnly } = this.props;
        return (
            <div className={`rankPanelTop3Place ${desktopOnly === true ? 'rankPanel__desktopOnly' : ''}`}>
                <img src={avatar} alt="avatar" className="rankPanelTop3Place__avatar" />
                <p className="rankPanelTop3Place__username">AlicjaS</p>
                <p className="rankPanelTop3Place__level">1299pkt. <span></span> Poziom 23</p>
                <div className="rankPanelTop3Place__scoreContainer">
                    <div className="rankPanelTop3Place__score">
                        <p className="rankPanelTop3Place__scoreName">Odpowiedzi</p>
                        <p className="rankPanelTop3Place__scoreCount">26</p>
                    </div>
                    <div className="rankPanelTop3Place__score">
                        <p className="rankPanelTop3Place__scoreName">Pytania</p>
                        <p className="rankPanelTop3Place__scoreCount">9</p>
                    </div>
                    <div className="rankPanelTop3Place__score">
                        <p className="rankPanelTop3Place__scoreName">Polubienia</p>
                        <p className="rankPanelTop3Place__scoreCount">6</p>
                    </div>
                </div>
                <div className="rankPanelTop3Place__awards">
                    <img src={award1} alt="award" />
                    <img src={award2} alt="award" />
                    <img src={award3} alt="award" />
                </div>
                <button className="g-btn">
                    Zobacz profil
                </button>
            </div>
        )
    }
}
export default Top1_3;
