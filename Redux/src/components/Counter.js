import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);  //used to subscribe the store and getting part of state we want to extract
  const dispatch =useDispatch();     //dispatch is a fuction which will call to dispatch acton against redux store
  const show = useSelector((state) => state.counter.showCounter);


  const incrementHandler=()=>{
    dispatch(counterActions.increment());             //counterActions.increment create an unique identifier with type automatically
  };
  const increaseHandler=()=>{
    dispatch(counterActions.increase(10));    // action payload as an argument
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement()); 
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter()); 
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;