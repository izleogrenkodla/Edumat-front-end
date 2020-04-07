import React, { Component } from 'react';
import './latestQuestionSelect.sass';

class LatestQuestionSelect extends Component {
    render() {
        return (
            <>
                <h2>Ostatnie pytania</h2>
                <div className="userPanel__latestQuestionSelect">
                    <select>
                        <option>Wszystkie poziomy</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <select>
                        <option>Każda kategoria</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <select>
                        <option>Wszystko</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </>
        )
    }
}
export default LatestQuestionSelect;
