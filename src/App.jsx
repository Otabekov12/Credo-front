import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home  from './pages/home/home';
import Admin from './pages/admins/admins';

const App = () => {

  return (<>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
  </>)
}

export default App;