import {useState } from 'react';

const useInput=(validateValue)=>{    //validate value function is only change for using this custom hook in email & username

    const [enteredValue, setEnteredValue] = useState('');
    const [enteredValueTouched, setEnteredValueTouched] = useState(false);
    
    const valueValid=validateValue(enteredValue);
    const hasError=!valueValid&&enteredValueTouched;   //instead of using haserror  State we can do this

    const inputChangeHandler=(event)=>{
        setEnteredValue(event.target.value);
        };

      const inputBlurHandler=()=>{
        setEnteredValueTouched(true);
      };
      const reset = () => {       // seting enteredName to empty when form have been sumbitted
        setEnteredValue('');
        setEnteredValueTouched(false);
      };
   
 return ({
        value:enteredValue,
        isValid:valueValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
 }
 );
};

export default useInput;