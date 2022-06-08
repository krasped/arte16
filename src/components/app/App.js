import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import MainPage from '../mainPage';
import FormPage from '../formPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="form" element={<FormPage />} />
    </Routes>
  );
}

export default App;
