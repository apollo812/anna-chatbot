import { Routes, Route, Navigate } from 'react-router-dom';
import "./i18n";

import Home from './pages/home';

function App() {
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
