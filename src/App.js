import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterState';

import './App.css';

function App() {
  const { count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment Me</button>
      <button onClick={() => dispatch(decrement())}>Decrement Me</button>
    </div>
  );
}

export default App;
