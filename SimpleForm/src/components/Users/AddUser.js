import React ,{useState} from "react";
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/Errormodal';
const AddUser=(props)=>{

    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState('');

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0||enteredAge.trim().length===0){
            setError({
                title:'Invalid Input',
                message:'enter a valid input'
            })
            return;
        }
        if(+enteredAge<0){
            setError({
                title:'Invalid age',
                message:'enter a valid Age'
            })
            return;
        }
        console.log(enteredUsername,enteredAge);
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }

    const errorHandler=()=>{
        setError(null);
    }
    
    return(
        <> 
        {error&&<ErrorModal title={error.title}message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}> 
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input onChange={usernameChangeHandler} value={enteredUsername} id="username" type="text"></input>
            <label htmlFor="age">Age (Years)</label>
            <input onChange={ageChangeHandler} value={enteredAge} id="age" type="number"></input>
            <Button type="sumbit">Add User</Button>
        </form>
        </Card>
        </>
    );
}
export default AddUser;