
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/shared/Nav/Navbar';
import TODO from './pages/TODO/TODO';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
    
    <Route path="/" element={<TODO></TODO>} />
    <Route path="/todo" element={<TODO></TODO>} />
    </Routes>
    </div>
  );
}

export default App;
