// src/StaticSelectDropdown.js
import React from 'react';

const StaticSelectDropdown = () => {
  // Static options for the dropdown
  const options = [
    'Breakfats',
    'Lunch',
    'Dinner',
    'Cafes',
    'Delivery',
  ];

  return (
    <div className="dropdown-banner custom-dropdown">
      <select id="static-dropdown">
        <option>Quick Searches</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StaticSelectDropdown;
