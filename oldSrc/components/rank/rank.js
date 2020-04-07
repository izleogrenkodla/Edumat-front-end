import React, { Component } from 'react';
import './rank.sass';

import Top1_3 from './top1_3/top1_3';
import BestUsers from './bestUsers/bestUsers';

class RankPanel extends Component {
    render() {
        return (
            <div className="rankingPanel">
                <h2>Ranking</h2>
                <Top1_3 />
                <BestUsers />
            </div>
        )
    }
}
export default RankPanel;
