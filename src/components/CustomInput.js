import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
const CustomInput = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <div className="custom-input-container">
      <input
        type={type}
        placeholder="Enter your delivery location"
        value={value}
        onChange={onChange}
        className="custom-input-field"
      />
      <a className="locate-me" href="/"><FontAwesomeIcon icon={faCrosshairs} /> Locate Me</a>
    </div>
  );
};

export default CustomInput;
