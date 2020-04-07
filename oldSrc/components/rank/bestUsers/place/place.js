import React, { Component } from 'react';
import './place.sass';

import avatar from '../../../userProfile/img/avatar.png';
import award1 from '../../../userProfile/img/Medal_Icon.svg';
import award2 from '../../../userProfile/img/Lightning_Icon.svg';
import award3 from '../../../userProfile/img/Quiz2_Icon.svg';

class Top1_3 extends Component {
    render() {
        const { id } = this.props;
        return (
            <div className="rankPanelBestUsers">
                <p className="rankPanelBestUsers__id">{id}.</p>
                <div className="rankPanelBestUsers__container">
                    <div className="rankPanelBestUsers__userInfo">
                        <img src={avatar} alt="avatar" className="rankPanelBestUsers__avatar" />
                        <div className="rankPanelBestUsers__text">
                            <p className="rankPanelBestUsers__username">Klaudia</p>
                            <hr />
                            <p className="rankPanelBestUsers__score">1299 pkt.</p>
                        </div>
                    </div>
                    <div className="rankPanelBestUsers__awards">
                        <img src={award1} alt="award" />
                        <img src={award2} alt="award" />
                        <img src={award3} alt="award" />
                    </div>
                    <button className="g-btn">
                        Zobacz profil
                    </button>
                </div>
            </div>
        )
    }
}
export default Top1_3;
