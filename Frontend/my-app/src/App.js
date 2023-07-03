import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footers from './Components/Footers';
import { Route, Routes } from 'react-router-dom';
import Indian from './Components/Indian';
import Chineese from './Components/Chineese';
import Add  from "./Components/Add";
import Home from "./Components/Home";


function App() {
  return (
    
    <div className="App">
      <Header/>
       <Routes>
       

        <Route path='/' element={<Indian/>}/>
        <Route path='/chineese' element={<Chineese/>}/>

         <Route path='/add' element={<Add Cuisine data={{Name:"",duration:"",number:"",image:""}} method="post"/>} />
         
         
        
      </Routes>
      <Footers/>
      
    </div>
    
  );
}

export default App;
