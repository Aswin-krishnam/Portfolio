import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Portfolio from './component/Portfolio';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Portfolio />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
