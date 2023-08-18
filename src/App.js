import { Routes, Route, Navigate } from 'react-router-dom';
import "./i18n";

import Home from './pages/home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMode } from './redux/globalReducer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if(!localStorage.theme){
      localStorage.theme = "dark"
    }
    dispatch(setMode(localStorage.theme))

  }, [])

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
