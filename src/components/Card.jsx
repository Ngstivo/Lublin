import React from 'react';
import './Card.css';

const Card = ({ title, description, image, date, category, link }) => {
    return (
        <div className="glass-panel card">
            {image && (
                <div className="card-image-container">
                    <img src={image} alt={title} className="card-image" />
                    {category && <span className="card-category">{category}</span>}
                </div>
            )}
            <div className="card-content">
                {date && <span className="card-date">{date}</span>}
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {link && (
                    <a href={link} className="card-link">
                        Read More &rarr;
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
