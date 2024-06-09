import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Search from './Components/Search-Section/Search-Section';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollButton from './Components/ScrollButton/ScrollButton';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Search />
          </>
        } />
        <Route path="/deals" element={
          <>
            <Hero />
            <Search />
            < ScrollButton />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
