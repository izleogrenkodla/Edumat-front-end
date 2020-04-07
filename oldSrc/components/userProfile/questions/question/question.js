
import React, { Component } from 'react';
import './question.sass';

import avatar from '../../img/avatar.png';
import type from '../../img/type.svg';

class Question extends Component {
    render() {
        return (
            <div className="userProfileQuestion">
                <div className="userProfileQuestion__time">
                    <p>25 min. temu</p>
                </div>
                <div className="userProfileQuestion__user">
                    <img src={avatar} alt="user avatar" />
                    <p>Julix</p>
                </div>
                <div className="userProfileQuestion__content">
                    <p>Iloczyn wielomianowy u(x)=x3-x2+2 i w(x)=x2+2x+5 jest równy:</p>
                    <p>A.v(x)=x5+4x+3x3-3x2+7</p>
                    <p>B.v(x)=x5+4x+3x3-3x2+4x+10</p>
                    <p>C.v(x)=x5+4x+3x3-3x2+4x+10</p>
                </div>
                <div className="userProfileQuestion__footer">
                    <div className="userProfileQuestion__type">
                        <img src={type} alt="type" />
                        <p>Graniastosłupy</p>
                    </div>
                    <button className="g-btn">
                        Odpowiedz
                    </button>
                </div>
            </div>
        )
    }
}
export default Question;
