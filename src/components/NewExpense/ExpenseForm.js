import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = () => {

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => ({...prevState, enteredTitle: event.target.value}))
  };
  const amountChangeHandler = (event) => {
    setUserInput({...userInput, enteredAmount: event.target.value})
  };
  const dateChangeHandler = (event) => {
    setUserInput({...userInput, enteredDate: event.target.value})
  };

  const submitHandler = (event) => {
    event.preventDefault(); // при клике компонент автоматически рендерится. Предотвращаем это.

    const {enteredTitle, enteredAmount, enteredDate} = userInput;

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    console.log(expenseData);

    setUserInput(
      {
        title: '',
        amount: '',
        date: '',
      }
    )
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={"new-expense__controls"}>
        <div className={"new-expense__control"}>
          <label>Title</label>
          <input type='text' value={userInput.enteredTitle || ''} onChange={titleChangeHandler}/>
        </div>
        <div className={"new-expense__control"}>
          <label>Amount</label>
          <input type='number' min="0.01" step='0.01' value={userInput.enteredAmount || ''}
                 onChange={amountChangeHandler}/>
        </div>
        <div className={"new-expense__control"}>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={userInput.enteredDate || ''}
                 onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className={"new-expense__actions"}>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm;