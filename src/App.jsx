import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import './App.css';
import Background from './components/Background/Background';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Background />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
