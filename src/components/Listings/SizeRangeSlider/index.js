import React, { useState } from 'react';

const SizeRangeSlider = () => {
  const min = 20;
  const max = 200;
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${((value - min) * 100) / (max - min)}% 100%` };
  };

  return (
    <div className="d-flex align-items-center" style={{ gap: '10px' }}>
      <p className="mb-0" style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>{min}sqm</p>
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
            background: 'linear-gradient(to right, #031B28dc 0%, #031B28dc 50%, #dee2e6 50%, #dee2e6 100%)',
          }}
        />
        <div 
          className="position-absolute translate-middle" 
          style={{ 
            left: `${((value - min) * 100) / (max - min)}%`, 
            top: '50%',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '2px 6px',
            borderRadius: '10px',
            backgroundColor: '#031B28dc',
            color: 'white',
          }}
        >
          {value}
        </div>
      </div>
      <p className="mb-0" style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>{max} sqm</p>
    </div>
  );
};

export default SizeRangeSlider;
