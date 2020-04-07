import React from 'react';

import './addQuestion.sass';

class AddQuestion extends React.Component {

    state = {
        content: ''
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    submitAddQuestionForm(e) {
        e.preventDefault();
    }

    render() {
        const { content } = this.state;

        return (
            <div className="addQuestionSection">
                <div className="addQuestionSection__container">
                    <h2 className="addQuestionSection__header">Tutaj zadaj pytanie!</h2>
                    <button className="addQuestionSection__closeBtn"></button>
                    <form onSubmit={this.submitAddQuestionForm.bind(this)} className="addQuestionSection__form">
                        <textarea
                            placeholder="To jest przykładowy tekst"
                            className={content !== '' ? 'empty' : ''}
                            value={content}
                            onChange={this.handleInputChange.bind(this)}
                            id="content"
                        ></textarea>
                        <select name="category">
                            <option value="none">Wybierz kategorię</option>
                            <option value="prisms">Graniastosłupy</option>
                            <option value="fractions">Ułamki</option>
                            <option value="roots">Pierwiastki</option>
                            <option value="functions">Funkcje</option>
                        </select>
                        <button type="submit" className="g-fillbtn">Zadaj pytanie</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddQuestion;
