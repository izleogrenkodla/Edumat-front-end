import React, { Component } from 'react';
import './aside.sass';

import Select from '../../select/select';
import Statistics from './statistics/statistics';

class Aside extends Component {
    render() {
        const { onlyDesktop } = this.props;
        return (
            <>
                <Select />
                <div className={onlyDesktop === true ? 'userPanelOnlyDesktop' : ''}>
                    <Statistics />
                </div>
            </>
        )
    }
}
export default Aside;
