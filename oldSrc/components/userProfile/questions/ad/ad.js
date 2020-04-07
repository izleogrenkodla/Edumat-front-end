
import React, { Component } from 'react';
import './ad.sass';

import shop from '../../img/shop.png';

class Ad extends Component {
    render() {
        return (
            <div className="userProfileAd">
                <div className="userProfileAd__header">
                    <p>Reklama</p>
                </div>
                <div className="userProfileAd__shop">
                    <img src={shop} alt="shop icon" />
                    <p>Empik</p>
                </div>
                <div className="userProfileAd__baner">
                    Reklama
                </div>
            </div>
        )
    }
}
export default Ad;
