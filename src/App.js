import logo from './logo.svg';
import './App.css';
import './index.css'
import React, {useState} from 'react';

function App() {

  //state
  const {message, setMassage} = useState('')
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [bmiRange, setBmiRange] = useState('');
  const [lowerWeight, setLowerWeight] = useState('');
  const [upperWeight, setUpperWeight] = useState('');

  let calcBmi = (event) => {
    //prevent submitting of page
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let BMI = ((weight / (height * height)) * 10000);
      setBmi(BMI.toFixed(1));

      setBmiMessage(`Your BMI is: `);
      // console.log(bmi);
      // Logic for BMI range & suggestion
      if (BMI < 18.5) {
        setLowerWeight((1  * (height * height) / 10000).toFixed(1) + " - ");
        setUpperWeight((18.4 * (height * height) / 10000).toFixed(1));
        setBmiRange('You are in a low weight range');
      } else if (BMI >= 18.5 && BMI < 23) {
        setLowerWeight((18.5 * (height * height) / 10000).toFixed(1) + " - ");
        setUpperWeight((22.9 * (height * height) / 10000).toFixed(1));
        setBmiRange('You are in a healthy weight range');
      } else if (BMI < 27.5) {
        setLowerWeight((23 * (height * height) / 10000).toFixed(1) + " - ");
        setUpperWeight((27.4 * (height * height) / 10000).toFixed(1));
        setBmiRange('You are in a overweight weight range');
      } else {
        setLowerWeight((27.5 * (height * height) / 10000).toFixed(1) + " - ");
        setUpperWeight('above');
        setBmiRange('You are in a obese weight range');
      }
      // console.log(bmiRange);
      setSuggestion(`Your suggested weight range is between `);
    }
  }


  return (
    <div className="App">
      <div className='container'>
        <h1 className='center1'>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Enter your height in cm:</label><br></br>
            <input value={weight} onChange={(e)=> setWeight(e.target.value)} />
          </div>
          <div>
            <label>Enter your weight in kg</label><br></br>
            <input value={height} onChange={(e)=> setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit' onClick={calcBmi}>Submit</button>
          </div>
        </form>
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
