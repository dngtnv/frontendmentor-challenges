import React from 'react';

export default function Shorten({ isEmpty, isPending, error, handleInput, handleChange }) {
  return (
    <>
      <div className="shorten-form" id="shortening">
        <input type="text" className={`input-url ${isEmpty ? 'invalid' : 'valid'}`} onChange={handleChange} placeholder="Shorten a link here..." />
        {isEmpty && <p className="error-message">Please add a link</p>}
        {error && <p className="error-message">{error}</p>}
        <button className={`shortening-btn ${isPending ? 'disable' : ''}`} onClick={() => handleInput()}>
          Shorten It!
        </button>
      </div>
    </>
  );
}
