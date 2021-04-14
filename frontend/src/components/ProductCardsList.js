import React from 'react';
import ProductCard from './ProductCard';

export default function ProductCardsList(props) {
    return (
        <div className="product-cards-list">
            {props.items && props.items.map((item, index) => 
                <ProductCard item={item} key={index} handleProductCardClick={props.handleProductCardClick} />
            )}
            {!props.items && '...loading'}
        </div>
    );
}
