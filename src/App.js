import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';

function App() {
  
  return (
    <div className="App">
      {/* <AddTask/> */}
      <ListTask />
      
    </div>
  );
}

export default App;
