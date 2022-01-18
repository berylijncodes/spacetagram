import React, { useState } from 'react';
import './Card.css';

const Card = ({ apiData }) => {
  const { url, title, date, explanation } = apiData;
  const [like, setLike] = useState(false);
  return (
    <div>
      <div key={title} className="card">
        <img src={url} alt={title} className="card__image" />
        <div className="card__content">
          <p className="card__date">{date}</p>
          <h2 className="card__title">{title}</h2>
          <p className="card__body">{explanation}</p>
        </div>
        <div>
          <span
            onClick={() => {
              setLike(!like);
            }}
            style={{
              color: like ? 'grey' : '#a51808',
            }}
          >
            {/* {" "} */}
            <i class="fas fa-heart fa-2x"></i>
            {/* <i class="far fa-heart fa-2x"></i> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
