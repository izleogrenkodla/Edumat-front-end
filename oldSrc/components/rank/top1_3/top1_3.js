import React, { Component } from 'react';
import './top1_3.sass';

import Place from './place/place';

class Top1_3 extends Component {
    render() {
        return (
            <>
                <div className="rankPanel__top3Container">
                    <Place desktopOnly={true} />{/*temporary parameter*/}
                    <Place />
                    <Place desktopOnly={true} />{/*temporary parameter*/}
                </div>
            </>
        )
    }
}
export default Top1_3;
