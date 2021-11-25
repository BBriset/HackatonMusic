import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import './App.css';
import Background from './components/Background/Background';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
