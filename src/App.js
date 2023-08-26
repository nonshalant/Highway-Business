import { Routes } from 'react-router-dom';
import './App.css';
import Left from './Components/ColumnLeft/Left';
import Right from './Components/ColumnRight/Right';

function App() {
  return (
    <div className='app'>
      <div className='app-container'>
          <Left />
          <Right />
      </div>
    </div>
  );
}

export default App;
