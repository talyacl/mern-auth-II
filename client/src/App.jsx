import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';
import './App.css'; 
import './index.css';

const App = () => {
  return (
    <>
      <h1 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">Authentication App</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Protected" element={<Protected />} />
      <Route/>
      </Routes>
    </>
  );
}

export default App;
