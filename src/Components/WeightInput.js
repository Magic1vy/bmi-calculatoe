const WeightInput = ({ units, weight, handleWeightChange, handleKeyUp }) => (
    <div className="input-container">
        <label>Weight</label>
        {units === 'Metric' ? (
            <div className="input-with-unit">
            <input 
                type="number"
                id="weight-input"
                placeholder="0"
                value={weight.kg || ''}
                onChange={handleWeightChange('kg')}
                onKeyUp={handleKeyUp}
            />
            <span  className="unit">kg</span>
            </div>
        ) : (
            <div className="input-with-unit">
            <input 
                type="number"
                id="weight-input-st"
                placeholder="0"
                value={weight.st || ''}
                onChange={handleWeightChange('st')}
                onKeyUp={handleKeyUp}
            />
            <span  className="unit">st</span>
            <input 
                type="number"
                id="weight-input-lbs"
                placeholder="0"
                value={weight.lbs || ''}
                onChange={handleWeightChange('lbs')}
                onKeyUp={handleKeyUp}
            />
            <span  className="unit">lbs</span>
            </div>
        )}
        </div>
    );
    export default WeightInput;
