import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChallengeSystem from './pages/ChallengeSystem';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Navigation from './components/Navigation';

function App() {
    return (
        <Router>
            <Navigation testProp={''} />
            <Routes>
                <Route path="/" element={<ChallengeSystem />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </Router>
    );
}

export default App
