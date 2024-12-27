import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ExerciseDetails from './components/ExerciseDetails';
import Footer from './components/Footer';
import Facilities from './components/Facilities';
import ExerciseAvailable from './components/ExerciseAvailable';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetails />} />
          </Routes>
        </main>
        <Routes>   
            <Route path="/" element={<ExerciseAvailable/>} />
        </Routes>
        <Routes>    
            <Route path="/" element={<Facilities/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;