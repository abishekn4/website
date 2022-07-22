
import './App.css';
import  React , { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import JsonData from './data/data.json';
import { About } from './components/About';
import { Faculties } from './components/Faculties';
  
const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(JsonData);
    
  }, []);

  return (
    <div className='App'>
      <div className='App-header'>
      <NavigationBar/>
      <About value={JsonData}/>
      <Faculties value={JsonData.Components[1]} />
      
      </div>
    </div>
  );
};

export default App;
