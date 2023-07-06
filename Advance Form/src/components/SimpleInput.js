import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  // const [enteredName,setEnteredName]=useState(''); using custom hook instead of two hooks of name and email
  //const [enteredNameValid,setEnteredNameValid]=useState(false); state to provide validation feedback  
  //const [wasTouched,setWasTouched]=useState(false);       state used to not show invalid on first load
  
 const {
        value:enteredName,
        isValid:enteredNameValid,
        hasError:nameHasError,
        inputChangeHandler:nameChangeHandler,
        inputBlurHandler:nameBlurHandler,
        reset:resetNameInput
        }=useInput((value) => value.trim() !== '');

    const {
          value:enteredEmail,
          isValid:enteredEmailValid,
          hasError:emailHasError,
          inputChangeHandler:emailChangeHandler,
          inputBlurHandler:emailBlurHandler,
          reset:resetEmailInput
          }=useInput((value) => value.includes('@'));
  



  let formIsValid = false;

  if (enteredNameValid && enteredEmailValid) {
    formIsValid = true;
  }

  const sumbitHandler=(event)=>{
   event.preventDefault();
   if(!enteredNameValid){
    return;
   }
   resetNameInput();
   resetEmailInput();
  //we should not use ref becoz it makes changes in DOM
};
  
   const nameInputClasses= nameHasError? 'form-control invalid':'form-control'; //changing css depening on state inputs 
   const emailInputClasses =emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={sumbitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
