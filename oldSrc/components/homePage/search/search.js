import React, { Component } from 'react';
import './search.scss';

import Select from '../../global/select/select.js'


import background from './img/background.svg'
import loupe from './img/loupe.png'
import person from './img/person.png'

class Search extends Component {
    render() {
        return (
            <div>
 
                <div className="search g-maxWwidth">
                    <div className="search__background">
                        <img className="search__personimg" src={person} alt="person"></img>
                        <img className="search__backgroundimg" src={background} alt="background"></img>
                        <div className="search__text">
                            <div>
                                <h2 className="search__texth2"> Znajdź odpowiedź</h2>
                                <p className="search__textp">na swoje pytanie.</p>
                            </div>
                            <label className="search__label" htmlFor="search">
                                <input id="search" className="search__input" placeholder="Wpisz pytanie, które chcesz zadać..." type="text" ></input>
                                <img className="search__loupe btn" src={loupe} alt='loupe'></img>
                            </label>
                        </div>
                    </div>
                </div>

                <Select />

            </div>
        )
    }
}
export default Search;