import React, { Component } from 'react';
import './select.scss';


import arrow from './img/arrow.png'
import path from './img/path.png'
import pencil from './img/pencil.png'
import puzel from './img/puzel.png'
import emc2 from './img/emc2.png'
import abc from './img/abc.png'


class Select extends Component {
  render() {
    return (
      <div>
        <div className="select g-maxWwidth">
          <div className="g-btn select__arrowbox">
            <img className="select__arrow arrow-left" src={arrow} alt='arrow left'></img>
          </div>
          <div className="select__itembox">
            <div className="g-btn select__item select__item--red">
              <div className="select__info">
                <div className="select__oval">
                  <img src={pencil} alt="pencil icon"></img>
                </div>
                <p>Zadania</p>
              </div>
              <img className="select__path" src={path} alt="path icon"></img>
            </div>
            <div className="g-btn select__item select__item--yellow">
              <div className="select__info">
                <div className="select__oval">
                  <img src={emc2} alt="icon"></img>
                </div>
                <p>Wzory</p>
              </div>
              <img className="select__path" src={path} alt="path icon"></img>
            </div>
            <div className="g-btn select__item select__item--green">
              <div className="select__info">
                <div className="select__oval">
                  <img src={puzel} alt="icon"></img>
                </div>
                <p>Gry</p>
              </div>
              <img className="select__path" src={path} alt="path icon"></img>
            </div>
            <div className="g-btn select__item select__item--blue">
              <div className="select__info">
                <div className="select__oval">
                  <img src={abc} alt="icon"></img>
                </div>
                <p>Testy</p>
              </div>
              <img className="select__path" src={path} alt="path icon"></img>
            </div>
            <div className="select__space"></div>
          </div>
          <div className="g-btn select__arrowbox">
            <img className="select__arrow arrow-right" src={arrow} alt='arrow right'></img>
          </div>
        </div>
      </div>

    )
  }
}
export default Select;
