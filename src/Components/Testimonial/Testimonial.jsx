
import React from 'react';

const CardComponent = () => {
  const cardStyle = {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const contentStyle = {
    padding: '16px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '8px',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <img src="https://placekitten.com/300/200" alt="Sample Image" style={imageStyle} />
      <div style={contentStyle}>
        <h2 style={titleStyle}>Sample Title</h2>
        <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export default CardComponent;