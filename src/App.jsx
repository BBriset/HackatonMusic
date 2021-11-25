import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import './App.css';
import Background from './components/Background/Background';

function App() {
  return (
    <div>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
