const ResultsDisplay = ({ bmi, bmiMessage }) => (
    <section className="hero-welcome">
        {bmi ? (
            <div className='bmi-results-meaning'>
            <div>
                <h3>Your BMI is...</h3>
                <h1>{bmi}</h1>
            </div>
            <p id="bmi-message">{bmiMessage}</p>
            </div>
        ) : (
            <div>
            <h3>Welcome!</h3>
            <p>Enter your height and weight and you’ll see your BMI result here</p>
            </div>
        )}
        </section>
    );
export default ResultsDisplay;