import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Header.scss';

export default function Header() {
    const history = useHistory();
    const [ searchValue, setSearchValue ] = useState('');

    function handleInputChange(event) {
        event.preventDefault();
        setSearchValue(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
    }

    return (
        <form className="header" onSubmit={handleFormSubmit}>
            <img className="header__logo" src="/images/Logo_ML.png" />
            <input className="header__search-bar" onChange={handleInputChange} value={searchValue} ></input>
        </form>
    );
}
