
const HeightInput = ({ units, height, handleHeightChange, handleKeyUp }) => (

  <div className="input-container">
    <label>Height</label>
    {units === 'Metric' ? (
      <div className="input-with-unit">
        <input 
          type="number"
          id="height-input"
          placeholder="0"
          value={height.cm || ''}
          onChange={handleHeightChange('cm')}
          onKeyUp={handleKeyUp}
        />
        <span  className="unit">cm</span>
      </div>
    ) : (
      <div className="input-with-unit">
        <input 
          type="number"
          id="height-input-ft"
          placeholder="0"
          value={height.ft || ''}
          onChange={handleHeightChange('ft')}
          onKeyUp={handleKeyUp}
        />
        <span  className="unit">ft</span>
        <input 
          type="number"
          id="height-input-in"
          placeholder="0"
          value={height.in || ''}
          onChange={handleHeightChange('in')}
          onKeyUp={handleKeyUp}
        />
        <span  className="unit">in</span>
      </div>
    )}
  </div>
);
export default HeightInput;


