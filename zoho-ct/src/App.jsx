import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Feeds from './components/pages/Feeds';
import Guidance from './components/pages/Guidelines';
import LeaderBoard from './components/pages/LeaderBoard';
import './App.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={ <Home />}/>
        <Route path='/feeds' element={ <Feeds />}/>
        <Route path='/guidance' element={ <Guidance />}/>
        <Route path='/leaderboard' element={ <LeaderBoard />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
