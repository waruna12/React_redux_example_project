import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { StateType, decrementNumber, incrementNumber } from './store/reducer/number';

function App() {

  const number = useSelector((store: StateType) => store.number)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{number}</h1>
      <div>
        <button onClick={() => {
          dispatch(incrementNumber(1000))
        }}>Increment</button>
        <button onClick={() => {
          dispatch(decrementNumber(50))
        }}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
