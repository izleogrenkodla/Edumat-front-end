import React, { Component } from 'react';
import Button from './Button/Button';
import './quiz.css';

class Quiz extends Component {

    submitAnswerForm(e) {
        e.preventDefault();
    }

    render() {
        return (
            <section className="quiz g-maxWwidth">
                <div className="quiz__container">
                    <p className="quiz__question-number">Pytanie 1 z 10</p>
                    <p className="quiz__question">Ile wynosi pole kwardatu o boku 1,5cm?</p>
                    <p className="quiz__select-correct-answer">Wybierz właściwą odpowiedź</p>
                    <form onSubmit={this.submitAnswerForm.bind(this)}>
                        <div className="quiz__answer-container">
                            <Button answerLetter="A" answer="1,25cm2" />
                            <Button answerLetter="B" answer="1,25cm2" />
                            <Button answerLetter="C" answer="1,25cm2" />
                            <Button answerLetter="D" answer="1,25cm2" />
                        </div>
                        {/* g-btn destroys this btn style */}
                        <input type="submit" className="g-fillbtn quiz__button-next" value="Następne" />
                    </form>
                </div>
            </section>
        )
    }
}
export default Quiz;