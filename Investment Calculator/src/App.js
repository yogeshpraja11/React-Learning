import {useState} from 'react';
import Header from './components/Header/Header';
import Input from './components/Input';
import Table from './components/Table/Table';

 const App=()=>{ 

  const[userInput,setUserInput]=useState(null);

  const calculateHandler = (userInput) => {
  setUserInput(userInput);
  };

  const yearlyData = []; // per-year results stored

    if(userInput){ 
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({ //making an output yearly data array using the userInput data arary
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,          
        yearlyContribution: yearlyContribution,
      });
    }
  }

 
  return (
    //passing data via props using onCalculate
    <div> 
     <Header/>
     <Input onCalculate={calculateHandler}/>   
     {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
     {userInput && <Table data={yearlyData} initialInvestment={userInput["current-savings"]}/>}
    </div>
   

  );

 }

export default App;
