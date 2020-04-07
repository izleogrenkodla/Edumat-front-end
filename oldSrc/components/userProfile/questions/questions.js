import React, { Component } from 'react';
import './questions.sass';

import Question from './question/question';
import Ad from './ad/ad';

class Questions extends Component {
    render() {
        return (
            <>
                <div style={{ marginTop: '50px' }}>
                    <Question />
                    <Ad />
                    <Question />
                    <Question />
                </div>
            </>
        )
    }
}
export default Questions;
