
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Desknav from './Components/Navbar/Desktop/Desknav';
import { Home } from './Pages/Home';
import { Notificationn } from './Pages/Notificationn';
import { Jobs } from './Pages/Jobs';
import { Network } from './Pages/Network';
import { Messaging } from './Pages/Messaging';


function App() {
  return (
   <>
   <Desknav/>



   


  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/notifications' element={<Notificationn/>}></Route>
    <Route path="/jobs" element={<Jobs/>}></Route>
    <Route path="/messaging" element={<Messaging/>}></Route> 
    <Route path="/my-network" element={<Network/>}></Route>
     </Routes>
   </>
    
  );
}

export default App;
