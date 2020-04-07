import React, { Component } from 'react';
import './button.scss';

class Button extends Component {
    render() {
        const { answerLetter, answer } = this.props;
        return (
            <label htmlFor={answerLetter} className="answer-button">
                <input id={answerLetter} type="radio" name="answer" value={answerLetter} className="answer-button__input-radio"></input>
                <div className="answer-button__container">
                    <p className="answer-button__answer-letter"><div className="answer-shadow"></div>{answerLetter}</p>
                    <div className="answer-button__line"></div>
                    <p className="answer-button__answer">{answer}</p>
                </div>
            </label>
        )
    }
}
export default Button;