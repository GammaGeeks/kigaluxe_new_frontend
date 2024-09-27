import React from 'react';

const SizeRangeSlider = ({ onChange, value }) => {
  const min = 20;
  const max = 200;

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    onChange({ min: newValue, max: value.max });
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${((value.min - min) * 100) / (max - min)}% 100%` };
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
          value={value.min}
          onChange={handleChange}
          id="customRange2"
          style={{
            height: '4px',
            WebkitAppearance: 'none',
            backgroundImage: 'linear-gradient(to right, #031B28dc 0%, #031B28dc 50%, #dee2e6 50%, #dee2e6 100%)',
            backgroundRepeat: 'no-repeat',
            ...getBackgroundSize(),
          }}
        />
        <div 
          className="position-absolute translate-middle" 
          style={{ 
            left: `${((value.min - min) * 100) / (max - min)}%`, 
            top: '50%',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '6px 6px',
            borderRadius: '5px',
            backgroundColor: '#031B28dc',
            color: 'white',
          }}
        >
          {value.min}
        </div>
      </div>
      <p className="mb-0" style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>{max} sqm</p>
    </div>
  );
};

export default SizeRangeSlider;