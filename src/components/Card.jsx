import React from 'react'

const Card = () => {
  return (
    <div className="recognition card">
      <span className="card-img">
        <img src={recognition} alt="brand recognition icon" />
      </span>
      <h4>Brand Recognition</h4>
      <p>
        Boost your brand recognition with each click. Generic links don’t mean a
        thing. Branded links help instil confidence in your content.
      </p>
    </div>
  );
}

export default Card