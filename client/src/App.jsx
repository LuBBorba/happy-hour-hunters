import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Search from './Components/Search-Section/Search-Section';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <Search />
          </>
        } />
        <Route path="/deals" element={
          <>
            <Header />
            <Hero />
            <Search />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
