import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchSearchResults } from '../redux/thunks/resultsThunk';
import { useDispatch } from 'react-redux';

import './Header.scss';

export default function Header() {
    const history = useHistory();
    const [ searchValue, setSearchValue ] = useState('');
    const dispatch = useDispatch();

    function handleInputChange(event) {
        event.preventDefault();
        setSearchValue(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        dispatch(fetchSearchResults(searchValue));
        history.push('/search-results');
    }

    return (
        <form className="header" onSubmit={handleFormSubmit}>
            <img className="header__logo" src="/images/Logo_ML.png" alt="logo" />
            <input className="header__search-bar" onChange={handleInputChange} value={searchValue} ></input>
        </form>
    );
}
