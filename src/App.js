import { Route, Routes } from 'react-router-dom';
import './App.css';
import './components/Header'
import Edit from './components/Edit';
import Add from './components/Add';
import Footer from './components/Footer';
import Eadmin from './components/Eadmin';
import View from './components/View';
import Header from './components/Header';

function App() {
  return (
    <>
   <Header/>
  
   <Routes>
    <Route path='/' element={<Eadmin/>}/>   
    <Route path='/edit' element={<Edit/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/add' element={<Add/>}/>

   </Routes>

   <Footer/>
    </>
  );
  }

export default App;
