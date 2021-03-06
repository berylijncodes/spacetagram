import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ apiData, index }) => {
  const { url, title, date, explanation } = apiData;
  const [like, setLike] = useState(false);
  //  This hook is used to save liked images to Local storage
  useEffect(() => {
    const data = localStorage.getItem(index);
    if (data) {
      setLike(JSON.parse(data));
    }
  }, [index]);

  return (
    <div key={title} className="card">
      <div className="image__container">
        <img src={url} alt={title} className="card__image" />
      </div>
      <div className="card__content">
        <p className="card__date">{date}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__body">{explanation}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setLike(!like);
            localStorage.setItem(index, JSON.stringify(!like));
          }}
          style={{
            color: like ? '#a51808' : '#555F61',
          }}
        >
          {/* {" "} */}
          <i class="fas fa-heart fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
