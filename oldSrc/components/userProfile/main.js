import React, { Component } from 'react';

import LatestQuestionSelect from './latestQuestionSelect/latestQuestionSelect';
import Questions from './questions/questions';

class Main extends Component {
    render() {
        return (
            <>
                <LatestQuestionSelect />
                <Questions />
            </>
        )
    }
}
export default Main;
