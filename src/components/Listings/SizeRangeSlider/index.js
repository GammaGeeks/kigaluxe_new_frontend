import React, { useState } from 'react';

const SizeRangeSlider = () => {
  const [value, setValue] = useState(0);
  const min = 20;
  const max = 200;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / (max - min)}% 100%` };
  };

  return (
    <div className="d-flex align-items-center" style={{ gap: '10px' }}>
      <p className="mb-0" style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>20sqm</p>
      <div className="position-relative flex-grow-1" style={{ margin: '0 10px' }}>
        <input 
          type="range" 
          className="form-range" 
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          id="customRange2"
          style={{
            ...getBackgroundSize(),
            height: '4px',
            WebkitAppearance: 'none',
            background: 'linear-gradient(to right, #007bff 0%, #007bff 50%, #dee2e6 50%, #dee2e6 100%)',
          }}
        />
        <div 
          className="position-absolute translate-middle" 
          style={{ 
            left: `${(value - min) * 100 / (max - min)}%`, 
            top: '50%',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '2px 6px',
            borderRadius: '10px',
            backgroundColor: '#007bff',
            color: 'white',
          }}
        >
          {value}
        </div>
      </div>
      <p className="mb-0" style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>200 sqm</p>
    </div>
  );
};

export default SizeRangeSlider;
