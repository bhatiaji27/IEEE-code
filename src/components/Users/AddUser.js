import React, { useState } from 'react';
import "../../index.css"
import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [nameInput,setNameInput] = useState('');
  const [gradYearInput,setGradYearInput] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    
    props.onAddUser(nameInput, gradYearInput);
    setGradYearInput('');
    setNameInput('');
  };

  const setNameHandler =(event) =>{
    setNameInput(event.target.value);
  }
  const setGradYearHandler=(event) =>{
    setGradYearInput(event.target.value);
  }
  
  return (
    <Wrapper>
      
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <h3>Enter your details to generate your card.</h3>
          <label htmlFor="username">Member Name</label>
          <input
            id="username"
            type="text"
            placeholder='Enter your fullname'
            onChange={setNameHandler}
            value={nameInput}
          />
          <label htmlFor="age">Graduation Year</label>
          <input
            id="age"
            type="number"
            placeholder='Enter your passout year'
            onChange={setGradYearHandler}
            value={gradYearInput}
          />
          <Button type="submit">Display Membership card</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;