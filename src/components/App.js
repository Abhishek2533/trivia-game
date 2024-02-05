import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Certificates } from './Certificates/Certificates';
import { Leaderboard } from './Leaderboard/Leaderboard';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='certificates' Component={Certificates}/>
        <Route path='leaderboard' Component={Leaderboard}/>
      </Routes>
    </div>
  );
}

export default App;
