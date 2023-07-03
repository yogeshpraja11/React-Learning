import {useState} from 'react';
import classes from './Input.module.css';


const Input=(props)=>{
   const initialUserInput={       //initial dummy array
   "current-savings":10000,
   "yearly-contribution":1200,
   "expected-return":7,
    "duration":10,            
  };

  const[userInput,setUserInput]=useState(initialUserInput); // using single state to instead of creating many states  using array

  const sumbitHandler=(event)=>{
    event.preventDefault();
   props.onCalculate(userInput);    // passing props to use In App.js
   };

  const resetHandler=()=>{
   setUserInput(initialUserInput);
  };
  
  
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };
            
    return( 
               // in <input> we are passing data onChange and after changing it via state we are acessing and changing data 
               // through value prop value={userInput["current-savings"]}
         <div>
          <form className={classes.form} onSubmit={sumbitHandler}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label> 
            <input onChange={(event)=>inputChangeHandler("current-savings",event.target.value)} value={userInput["current-savings"]} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={(event)=>inputChangeHandler("yearly-contribution",event.target.value)} value={userInput["yearly-contribution"]} type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={(event)=>inputChangeHandler("expected-return",event.target.value)} value={userInput["expected-return"]} type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(event)=>inputChangeHandler("duration",event.target.value)} value={userInput["duration"]} type="number" id="duration" />
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>  
      </div>
    );
};

export default Input;