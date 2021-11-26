import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import './App.css';
import Background from './components/Background/Background';
import Calendar from './components/Calendar/Calendar';
import Gift from './components/Gift/Gift';

function App() {
  return (
    <div>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Gift/:url" element={<Gift />} />
      </Routes>
    </div>
  );
}

export default App;
