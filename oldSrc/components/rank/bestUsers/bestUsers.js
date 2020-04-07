import React, { Component } from 'react';
import './bestUsers.sass';

import Place from './place/place';
import arrow from '../../userProfile/img/greyArrow.svg';

class BestUsers extends Component {
    render() {
        return (
            <div className="rankPanel__bestUsers">
                <h2>Najlepsi użytkownicy</h2>
                <hr className="rankPanel__headerLine" />
                <div>
                    <img src={arrow} alt="arrow" className="rankPanel__arrowTop" />
                    <Place id="4" />
                    <Place id="5" />
                    <Place id="6" />
                    <Place id="7" />
                    <Place id="8" />
                    <Place id="9" />
                    <Place id="10" />
                    <div className="rankPanel__desktopOnly"> {/*temporary class name*/}
                        <Place id="11" />
                        <Place id="12" />
                        <Place id="13" />
                        <Place id="14" />
                        <Place id="15" />
                    </div>
                    <img src={arrow} alt="arrow" className="rankPanel__arrowBottom" />
                </div>
            </div>
        )
    }
}
export default BestUsers;
