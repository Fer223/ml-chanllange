import React from 'react';

import './ItemDetails.scss';
import { useSelector } from 'react-redux';

export default function ItemDetails(props) {
    const details = useSelector(state => state.details);
    const { condition, sold_quantity, title, price, plain_text, pictures } = details;

    function getItemState() {
        const conditionMap = { 'new': 'Nuevo', 'used': 'Usado' };

        return `${conditionMap[condition]} - ${sold_quantity} vendido${sold_quantity>1?'s':''}`
    }

    function handleBuyClick() {
        alert(`Compraste un ${title}`)
    }

    return (
        <div className="item-details">
            <div className="item-details-container">
                <div className="details__top-section">
                    <img src={pictures && pictures[0].url} />
                    <div className="details__submit-section">
                        <div style={{marginBottom: '0.5rem', fontSize: '13px'}}>{getItemState()}</div>
                        <div style={{marginBottom: '0.5rem', fontSize: '16px', fontWeight: 'bold'}}>{title}</div>
                        <div style={{marginBottom: '0.5rem', fontSize: '22px', fontWeight: 'bold'}}> $ {price}</div>
                        <button className="submit-button" onClick={handleBuyClick}>Comprar</button>
                    </div>
                </div>
                <div className="details__bottom-section">
                    <div className="details__title">Descripción del producto</div>
                    <div className="details__description">{plain_text}</div>
                </div>
            </div>
        </div>
    );
}
