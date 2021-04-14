import React from 'react';

import './ProductCard.scss';

export default function ProductCard(props) {
    const { item } = props;
    const { thumbnail, title, price, address: { state_name }, shipping: { free_shipping }, id: productId } = item;

    function handleClick() {
        props.handleProductCardClick(productId, item);
    }

    return (
        <div className="product-card" onClick={handleClick}>
            <img className="product-card__image" src={thumbnail} alt={title} />
            <div className="product-card__details">
                <div className="details__information">
                    <div>$ {price}{free_shipping && <img src={'/images/ic_shipping.png'} alt="envio gratis" />}</div>
                    <div>{title}</div>
                </div>
                <div className="details__location">{state_name}</div>
            </div>
        </div>
    );
}
