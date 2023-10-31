import React from 'react';

function Card() {
  return (
    <div className="card-deck">
      <div className="card">
        <img src="card-image-1.jpg" className="card-img-top" alt="Card 1" />
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">Content for Card 1.</p>
        </div>
      </div>
      <div className="card">
        <img src="card-image-2.jpg" className="card-img-top" alt="Card 2" />
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">Content for Card 2.</p>
        </div>
      </div>
      <div className="card">
        <img src="card-image-3.jpg" className="card-img-top" alt="Card 3" />
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">Content for Card 3.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
