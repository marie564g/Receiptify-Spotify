import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [expense, setExpense] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expense);
  };

 
