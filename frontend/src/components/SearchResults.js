import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchResult() {
    const history = useHistory();

    return <button onClick={() => history.push('/item-details')}>ir a descripcion</button>;
}
