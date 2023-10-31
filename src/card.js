import React from 'react';

function Card() {
  return (
    <div>
      <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Card 01</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      
      <div className="card text-white bg-danger mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Card 02</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Card 03</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
