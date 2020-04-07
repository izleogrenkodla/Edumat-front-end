import React, { Component } from 'react';
import './asideUserInfo.sass';

import avatar from '../../../img/avatar.png';
import settingsIcon from '../../../img/settings.svg'
import settingsArrowIcon from '../../../img/settingsarrow.svg';

class AsideUserInfo extends Component {
    render() {
        return (
            <div className="userProfileAsideUser">
                <button>
                    <img src={settingsIcon} alt="settings" />
                    <img src={settingsArrowIcon} alt="settings arrow" />
                </button>
                <div className="userProfileAsideUser__description">
                    <img src={avatar} alt="avatar" />
                    <div>
                        <h3>Julia Kowalska</h3>
                        <p className="userProfileAsideUser__italic">Julix</p>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
export default AsideUserInfo;
