import { useState } from 'react';
import CardFilter from './CardFilter.jsx';

import './Card.css';

const Card = ({card}) => {
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = filter => setFilter(filter)

    const formatAmount = (amount, isCurrency = false) => {
        return isCurrency 
        ? '$' + amount.toLocaleString('en-US')
        : amount.toLocaleString('en-US')
    }

    return(
        <div className="col-xxl-4 col-md-6">
            <div className="card info-card sales-card">
                <CardFilter filterChange={handleFilterChange} />
                <div className="card-body">
                    <h5 className="card-title">
                        {card.name} <span>| {filter}</span>
                    </h5>

                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className={card.icon}></i>
                        </div>

                        <div className="ps-3">
                            <h6>{formatAmount(card.amount, card.name === 'Revenue')}</h6>

                            <span className={`${
                                card.percentage > 0 ? 'text-success' : 'text-danger'
                            } small pt-1 fw-bold`}>

                            {card.percentage > 0 ? card.percentage * 100 : -card.percentage * 100}%

                            </span>

                            <span className="text-muted small pt-2 ps-1">
                                {card.percentage > 0 ? 'increase' : 'decrease'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;