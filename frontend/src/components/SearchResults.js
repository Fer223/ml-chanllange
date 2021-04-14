import React from 'react';
import { useHistory } from 'react-router-dom';
import ProductCardsList from './ProductCardsList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../redux/thunks/resultsThunk';

import './SearchResults.scss';

export default function SearchResult() {
    const history = useHistory();
    const dispatch = useDispatch();
    const items = useSelector(state => state.results);

    const handleProductCardClick = (productId, item) => {
        dispatch({ type: 'SAVE_PRODUCT_DETAILS', payload: item });
        dispatch(fetchProductDetails(productId));
        history.push('/item-details');
    }

    return (
        <div className="search-results">
            <div style={{marginTop: '8rem'}}>
                <ProductCardsList items={items} handleProductCardClick={handleProductCardClick} />
            </div>
        </div>
    );
}
