import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ItemDetails() {
    const history = useHistory();

    return <button onClick={() => history.push('/search-results')}>ir a resultados</button>;
}
