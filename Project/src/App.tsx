import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import HomePage from './pages/HomePage';*/
/*import LinkPage from './pages/LinkPage';*/
import SignUpPage from './pages/SignUpPage';
import './App.css';

function App() {
  return (
    <div id="App">
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<SignUpPage />} />
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
