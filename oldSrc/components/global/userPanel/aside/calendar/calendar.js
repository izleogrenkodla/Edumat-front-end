import React, { Component } from 'react';
import './calendar.sass';

import arrow from '../../img/calendarArrow.svg';

class Calendar extends Component {
    render() {
        return (
            <div className="calendarContainer">
                <div className="calendarHeader">
                    <div>
                        <p>Luty 2020</p>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <button className="g-btn">
                        Dodaj zaliczenie
                    </button>
                </div>
                <table className="calendar">
                    <tr className="calendar__days">
                        <td>Pon</td>
                        <td>Wt</td>
                        <td>Śr</td>
                        <td>Czw</td>
                        <td>Pt</td>
                        <td>Sob</td>
                        <td>Nd</td>
                    </tr>
                    <tr>
                        <td className="calendar__grey">1</td>
                        <td className="calendar__grey">2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>16</td>
                        <td className="calendar__smallCircle calendar__bigCircle">17</td>
                        <td>18</td>
                        <td className="calendar__smallCircle">19</td>
                        <td>20</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td className="calendar__grey">1</td>
                        <td className="calendar__grey">2</td>
                        <td className="calendar__grey">3</td>
                        <td className="calendar__grey">4</td>
                        <td className="calendar__grey">5</td>
                        <td className="calendar__grey">6</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Calendar;